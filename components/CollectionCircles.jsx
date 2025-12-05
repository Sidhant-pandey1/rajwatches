import Image from "next/image";

const collections = [
  {
    name: "Men",
    imgSrc: "/images/men-watch.png",
    link: "/watches/category/men",
  },
  {
    name: "Women",
    imgSrc: "/images/woman-watch.png", // double-check spelling: woman-watch
    link: "/watches/category/women",
  },
  {
    name: "Couple",
    imgSrc: "/images/Couple-watch.png", // double-check spelling: couple-watch
    link: "/watches/category/couple",
  },
  {
    name: "Smartwatches",
    imgSrc: "/images/smart-watch.png",
    link: "/watches/category/smartwatches",
  },
  {
    name: "Wall Clocks",
    imgSrc: "/images/wall-clock.png",
    link: "/watches/category/wallclocks",
  },
];

export default function CollectionCircles() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <h2 className="text-2xl sm:text-4xl font-serif font-extrabold text-[#c2ab72] mb-6 sm:mb-10 text-center drop-shadow-lg tracking-tight">
        Shop by Collection
      </h2>
      {/* Grid layout: 2 columns on mobile, 3 on tablet, flex on desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:justify-center gap-4 sm:gap-8 lg:gap-12">
        {collections.map(({ name, imgSrc, link }) => (
          <a
            href={link}
            key={name}
            className="flex flex-col items-center cursor-pointer"
          >
            {/* Smaller circles on mobile, larger on desktop */}
            <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden shadow-xl border-3 sm:border-4 border-[#c2ab72] bg-white transition-transform hover:scale-105">
              <Image
                src={imgSrc}
                alt={name}
                width={176}
                height={176}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <span className="mt-3 sm:mt-6 text-sm sm:text-lg lg:text-xl font-semibold font-serif text-[#c2ab72] tracking-wide text-center">
              {name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

// import Image from "next/image";

// const collections = [
//   {
//     name: "Men",
//     imgSrc: "/images/men-Watch.png", // update path if needed
//     link: "/watches/category/men",
//   },
//   {
//     name: "Women",
//     imgSrc: "/images/woman--watch.png",
//     link: "/watches/category/women",
//   },
//   {
//     name: "Unisex",
//     imgSrc: "/images/Unisex.png",
//     link: "/watches/category/unisex",
//   },
//   {
//     name: "Couple",
//     imgSrc: "/images/Couple-watch.png",
//     link: "/watches/category/couple",
//   },
//   {
//     name: "Wall Clocks",
//     imgSrc: "/images/wall-clock.png",
//     link: "/watches/category/wallclocks",
//   },
// ];

// export default function CollectionCircles() {
//   return (
//     <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//       <h2 className="text-4xl font-serif font-extrabold text-[#c2ab72] mb-10 text-center drop-shadow-lg tracking-tight">
//         Shop by Collection
//       </h2>
//       <div className="flex justify-center gap-12 flex-wrap">
//         {collections.map(({ name, imgSrc, link }) => (
//           <a
//             href={link}
//             key={name}
//             className="flex flex-col items-center cursor-pointer"
//           >
//             <div className="w-56 h-56 rounded-full overflow-hidden shadow-xl border-4 border-[#c2ab72] bg-white">
//               <Image
//                 src={imgSrc}
//                 alt={name}
//                 width={224}
//                 height={224}
//                 className="object-cover w-full h-full"
//               />
//             </div>
//             <span className="mt-6 text-2xl font-semibold font-serif text-[#c2ab72] tracking-wide">
//               {name}
//             </span>
//           </a>
//         ))}
//       </div>
//     </section>
//   );
// }

// import Image from "next/image";

// const collections = [
//   {
//     name: "Gents",
//     imgSrc: "/images/men-Watch.png", // saved local image
//     link: "/watches/category/men",
//   },
//   {
//     name: "Ladies",
//     imgSrc: "/images/woman-Watch.png", // saved local image
//     link: "/watches/category/women",
//   },
//   {
//     name: "Wall Clocks",
//     imgSrc: "/images/wall-clock.png", // saved local image
//     link: "/watches/category/wallclocks",
//   },
// ];

// export default function CollectionCircles() {
//   return (
//     <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//       <h2 className="text-4xl font-serif font-extrabold text-[#c2ab72] mb-10 text-center drop-shadow-lg tracking-tight">
//         Shop by Collection
//       </h2>
//       <div className="flex justify-center gap-16 flex-wrap">
//         {collections.map(({ name, imgSrc, link }) => (
//           <a
//             href={link}
//             key={name}
//             className="flex flex-col items-center cursor-pointer"
//           >
//             <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-[#c2ab72]">
//               <Image
//                 src={imgSrc}
//                 alt={name}
//                 width={160}
//                 height={160}
//                 className="object-cover"
//               />
//             </div>
//             <span className="mt-4 text-xl font-semibold font-serif text-[#c2ab72]">
//               {name}
//             </span>
//           </a>
//         ))}
//       </div>
//     </section>
//   );
// }
