import { Alert, Button, Card } from "react-bootstrap";
import { formatRs } from "../utilities/formatRs";
import "./ProductItem.css";
import { useState, useEffect } from "react";
import { useProductCart } from "../context/Cart-Context";

// type in TypeScript is used to create a new type alias or define a new type. It allows you to create an alias for an existing type, or create a completely new type. and Aliasing is often used to make the code more readable, reduce the amount of typing needed, or create alternative names for library or third-party functions to avoid naming conflicts. In TypeScript, the as keyword is used to create an alias for a type.

type ProductItemProps = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  album?: string;
};
//  album?: string; this is optional
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

  const quantity = getItemQuantity(id);

  const [showAlert, setShowAlert] = useState(false);
  const handleAddToCart = () => {
    increaseCartQuantity(id);
    setShowAlert(true);
  };

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showAlert]);

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
          {quantity === 0 ? (
            <Button className="w-100" onClick={handleAddToCart}>
              + Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button
                onClick={() => removeFromCart(id)}
                variant="danger"
                size="sm"
              >
                Remove
              </Button>
            </div>
          )}
        </div>
        <div className="price">
          <h4 className="mb-0 me-2">Price</h4>
          <span className="ms-2 product-price">{formatRs(price)}</span>
        </div>
      </Card>
      {showAlert && (
        <Alert
          variant="primary"
          className="position-fixed bottom-0 end-0 mb-2"
          style={{ zIndex: "1" }}
        >
          Your Product: '{title}' is added to the Cart
        </Alert>
      )}
    </>
  );
}
