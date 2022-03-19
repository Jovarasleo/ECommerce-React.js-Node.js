import { FC } from "react";
import "./index.css";
interface cardProps {
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  images: string;
  id: number;
}

const ItemCard: FC<cardProps> = ({
  title,
  description,
  price,
  thumbnail,
  images,
}) => {
  console.log(title);
  return (
    <div className="itemCard">
      <div>
        <img src={thumbnail} />
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
      <span>{price}</span>
    </div>
  );
};
export default ItemCard;
