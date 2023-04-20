import { Offcanvas, Stack } from "react-bootstrap";
import { useProductCart } from "../context/Cart-Context";
import { CartItem } from "./CartItem";
import productItem from "../data/items.json";

type ProductCartProps = {
  isOpen: boolean;
};

export function ProductCart({ isOpen }: ProductCartProps) {
  const { closeCart, cartItems } = useProductCart();
  const totalCurrency = cartItems.reduce((total, cartItem) => {
    const item = productItem.find((i) => i.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  return (
    <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((ele) => (
            <CartItem key={ele.id} {...ele} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total Currency: {totalCurrency}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
