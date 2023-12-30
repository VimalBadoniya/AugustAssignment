import React from "react";

let products = [];
for (let i = 1; i <= 8; i++) {
  products.push(`Product - ${i}`);
}
const Products = () => {
  return (
    <div className="productContainer">
      {products.map((product, i) => {
        return <div key={i} className="product">{product}</div>;
      })}
    </div>
  );
};
export default Products;
