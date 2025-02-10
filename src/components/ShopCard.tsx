// components/ShopCard.tsx
import Image from "next/image";

interface ShopCardProps {
  imageUrl: string;
  title: string;
  itemCount: number;
}

const ShopCard: React.FC<ShopCardProps> = ({ imageUrl, title, itemCount }) => {
  return (
    <div className="relative bg-cover bg-center rounded-2xl overflow-hidden shadow-md">
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={300}
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
        <h2 className="text-xl font-bold uppercase">{title}</h2>
        <p className="text-sm">{itemCount} Items</p>
      </div>
    </div>
  );
};

export default ShopCard;
