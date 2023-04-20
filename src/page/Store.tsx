import productsArr from "../data/items.json";
import { Col, Row } from "react-bootstrap";
import "./Store.css";
import { ProductItem } from "../component/ProductItem";

export function Store() {
  return (
    <>
      <div className="text-white title">
        <h1 className="text-center">The Generics</h1>
      </div>
      <div className="music-title-container">
        <span className="text-cente">Music</span>
      </div>
      <div className="product-parent">
        <Row className="g-5 custom-item product-row">
          {productsArr.map((item, index) => (
            <Col key={index} md={6}>
              <ProductItem {...item} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}
