import { Button, Card } from "react-bootstrap";
import { formatRs } from "../utilities/formatRs";
import "./ProductItem.css";
import { useProductCart } from "../context/Cart-Context";

// type in TypeScript is used to create a new type alias or define a new type. It allows you to create an alias for an existing type, or create a completely new type. and Aliasing is often used to make the code more readable, reduce the amount of typing needed, or create alternative names for library or third-party functions to avoid naming conflicts. In TypeScript, the as keyword is used to create an alias for a type.

type ProductItemProps = {
  id: number;
  album: string;
  title: string;
  price: number;
  imageUrl: string;
};

export function ProductItem({
  id,
  album,
  title,
  price,
  imageUrl,
}: ProductItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useProductCart();
  const quantity = 0;
  return (
    <>
      <Card className="product-box">
        <Card.Img
          variant="top"
          src={imageUrl}
          height="200px"
          style={{ objectFit: "cover" }}
          className="product-img"
        />
        <Card.Body style={{ padding: 0 }}>
          <Card.Title>
            <h5 className="product-names">{title}</h5>
          </Card.Title>
        </Card.Body>
        <div className="album">
          <span>{album}</span>
        </div>
        <div className="mt-2 ">
          <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
            {" "}
            + Add To Cart{" "}
          </Button>
        </div>
        <div className="price">
          <h4 className="mb-0 me-2">Price</h4>
          <span className="ms-2 product-price">{formatRs(price)}</span>
        </div>
      </Card>
    </>
  );
}
