import Image from "next/image";

const categories = [
  { label: "MEN", image: "/men.png", size: "col-span-2 row-span-2" },
  { label: "WOMEN", image: "/women.png", size: "col-span-1 row-span-2" },
  { label: "ACCESSORIES", image: "/accessories.png", size: "col-span-1 row-span-1" },
  { label: "KIDS", image: "/kids.png", size: "col-span-1 row-span-1" },
];

const EditorsPick = () => {
  return (
    <section className="text-center py-12">
      <h2 className="text-2xl font-bold text-gray-900">EDITOR’S PICK</h2>
      <p className="text-gray-500 mt-2">Problems trying to resolve the conflict between</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 m-4 auto-rows-fr ">
        {categories.map((category, index) => (
          <div key={index} className={`relative group ${category.size}`}>
            <Image
              src={category.image}
              alt={category.label}
              width={300}
              height={400}
              className="w-full h-full object-cover rounded-lg"
            />
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 px-4 py-2 rounded-md shadow-md font-semibold opacity-90 hover:opacity-100">
              {category.label}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EditorsPick;
