import Image from "next/image";
import React from "react";

// Define a type for the images
interface ImageItem {
  Picture: string;
}

// Define the array with the type
const iconImages: ImageItem[] = [
  { Picture: "/icon1.png" },
  { Picture: "/icon2.png" },
  { Picture: "/icon3.png" },
  { Picture: "/icon4.png" },
  { Picture: "/icon5.png" },
  { Picture: "/icon6.png" },
];

const Icons = () => {
  return (
    <div className="max-w-6xl mx-auto p-10 bg-[#fafafa]">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center">
        {iconImages.map((imges, index) => (
          <div key={index} className="flex items-center justify-center">
            <Image
              src={imges.Picture}
              alt={`Icon ${index + 1}`}
              width={128} // Replace with your desired width
              height={128} // Replace with your desired height
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Icons;
