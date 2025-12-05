import prisma from "@/lib/prisma";
import LuxeButtons from "@/components/LuxeButtons";
import Gallery from "@/components/Gallery";
import ProductNavigation from "@/components/ProductNavigation";

/**
 * ProductPage - server component
 */
export default async function ProductPage({ params }) {
  // params is a Promise in Next 15 – await it first
  const { id: rawId } = await params;

  if (!rawId) {
    throw new Error("Invalid product id");
  }

  // Watch.id is String in schema.prisma
  const product = await prisma.watch.findUnique({
    where: { id: rawId },
  });

  if (!product) {
    return (
      <div className="p-10 text-center text-red-600 font-semibold">
        Product not found.
      </div>
    );
  }

  const imageUrls = Array.isArray(product.images)
    ? product.images.filter(Boolean)
    : [];
  const DEBUG_LOCAL_IMAGE =
    "/mnt/data/Screenshot 2025-11-24 at 15.32.07.png";
  const galleryImages = imageUrls.length ? imageUrls : [DEBUG_LOCAL_IMAGE];

  function highlight(label, ...keys) {
    const desc = product?.description || "";
    for (let key of keys) {
      const regex = new RegExp(`${key}\\s*:?\\s*(.+)`, "i");
      const match = desc
        .split("*")
        .map((l) => l.trim())
        .find((l) => regex.test(l));
      if (match) return match.match(regex)?.[1]?.trim();
    }
    return null;
  }

  const highlights = [
    { label: "Brand", value: product.brand },
    { label: "Gender", value: highlight("Gender", "gender") },
    {
      label: "Strap Material",
      value: highlight("Strap Material", "strap material"),
    },
    {
      label: "Strap Color",
      value: highlight("Strap Color", "strap color"),
    },
    {
      label: "Glass Material",
      value: highlight("Glass Material", "glass material"),
    },
    {
      label: "Warranty",
      value: highlight("Warranty", "warranty period", "warranty detail"),
    },
    { label: "Dial Color", value: highlight("Dial Color", "dial color") },
    { label: "Movement", value: highlight("Movement", "movement") },
  ].filter((h) => h.value);

  const formatPrice = (value) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <div className="bg-[#f6f3ee] min-h-screen w-full flex flex-col py-0">
      {/* Top Navigation Bar */}
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-12 pt-6">
        <ProductNavigation />
      </div>

      {/* Main Content */}
      <div className="w-full flex flex-col lg:flex-row max-w-[1600px] mx-auto px-0 pt-4 lg:pt-8 gap-8 lg:gap-12">
        {/* Gallery */}
        <div className="flex-1 flex flex-col items-center xl:items-end pl-0 xl:pl-36">
          <Gallery images={galleryImages} productName={product.name} />
        </div>

        {/* Product details */}
        <div className="flex-1 flex flex-col justify-center px-6 xl:pl-0 xl:pr-28">
          <h1
            className="font-serif text-[2.2rem] sm:text-[2.7rem] xl:text-5xl font-extrabold text-[#23221d] mt-2 mb-6 leading-tight tracking-tight"
            style={{ letterSpacing: "-0.015em", lineHeight: "1.09" }}
          >
            {product.name}
          </h1>

          <div className="flex items-center gap-6 sm:gap-8 mb-8">
            <span className="uppercase font-sans text-base sm:text-lg font-bold tracking-widest text-[#b89f56]">
              {product.brand}
            </span>
            <span className="text-[1.8rem] sm:text-[2.2rem] font-extrabold text-[#23221d] pt-1">
              {formatPrice(product.price)}
            </span>
          </div>

          <div className="bg-[#fff9ed] border border-[#ead199] rounded-2xl py-7 sm:py-9 px-6 sm:px-9 shadow mb-10 sm:mb-12 max-w-2xl">
            <h2 className="text-[1.1rem] sm:text-[1.25rem] font-serif font-bold text-[#ac9247] mb-4 sm:mb-5 tracking-widest">
              Product Highlights
            </h2>
            <table className="w-full text-[0.95rem] sm:text-[1.09rem] font-medium">
              <tbody>
                {highlights.map((h, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-[#eedfa2]/40 last:border-0"
                  >
                    <td
                      className="pr-3 py-2.5 sm:py-3 text-[#7f7755] w-40 sm:w-56"
                      style={{ fontWeight: 540 }}
                    >
                      {h.label}
                    </td>
                    <td className="pl-3 py-2.5 sm:py-3 text-[#23221d]">{h.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <LuxeButtons product={product} />
        </div>
      </div>
    </div>
  );
}