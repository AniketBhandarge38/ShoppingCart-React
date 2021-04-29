import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
const products = [
  { id: 1, name: "Mobile", description: "Its an Iphone", price: 75000 },
  { id: 2, name: "Laptop", description: "Its a MacBook", price: 175000 }
];
function Products() {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}

export default Products;
