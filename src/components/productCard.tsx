import { addToCart } from "@/app/actions/actions";

import Image from "next/image";
import Swal from "sweetalert2";

// Define the props type for CardText
type CardTextProps = {
  id: string;

  title: string;
  description: string;
 
  price: number;
  quantity: number;
  stock: number;
  image: string;
};


const CardText: React.FC<CardTextProps> = ({ id, title, description, price, quantity, stock, image }) => {
  const handleAddToCart = (e: React.MouseEvent, product:CardTextProps)=>{
    e.preventDefault()
    addToCart(product)
    Swal.fire(
      {
        position:"top-right",
        icon:"success",
        title:`${product.title} added to cart`,
        showConfirmButton:false,
        timer:1000,
      }
    )
    
  }
  return (
    <div className="w-[239px] h-[188px] py-[25px] px-[25px] flex flex-col items-center justify-center gap-[10px]">
      <h5 className="w-full font-Montserrat font-bold text-[16px] leading-[24px] text-center text-[#252B42]">
        {title} {/* Use dynamic title */}
      </h5>
      <p className="w-full line-clamp-1 font-Montserrat font-bold text-[14px] leading-[24px] text-center text-[#737373]">
        {description} {/* Use dynamic description */}
      </p>
      <div className="w-full px-[3px] py-[5px] flex justify-center gap-[5px]">
        <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#BDBDBD]">
          {price} {/* Use dynamic price */}
        </h5>
       </div>
       <button className="bg-gradient-to-r from-blue-500 to-blue-950 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out"
        onClick={(e)=>handleAddToCart(e, { id, title, description, price, quantity, stock, image })}>
          Add to Cart
        </button>
      <div className="w-[82.2px] h-[16px] flex justify-center">
        <Image src={"/color.png"} alt="product colors" width={500} height={500} />
      </div>
    </div>
  );
};

export default CardText;
