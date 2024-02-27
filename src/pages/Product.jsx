import { Container } from "@mui/system";
import ProductCard from "../components/ProductCard/ProductCard";
import productData from "../products";

function Product({}) {
  return (
    <>
      <Container
        maxWidth="xl"
        style={{
          marginTop: 90,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Container
          maxWidth="xl"
          style={{
            marginTop: 10,
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            paddingBottom: 20,
            marginBottom: 30,
            width: "100%",
          }}
        >
          {productData.map((prod) => (
            <ProductCard prod={prod} />
          ))}
        </Container>
      </Container>
      ;
    </>
  );
}
export default Product;
