import { useParams } from "react-router-dom";
import { fetcher, useSWR } from "../libs";

export const ProductIdRoute = () => {
  const { productId } = useParams();

  const { data: product, error } = useSWR(
    `${import.meta.env.VITE_BACKEND_API_URL}/products/${productId}`,
    fetcher
  );

  if (error) return <div>Failed to load product: {productId}</div>;
  if (!product) return <div>Loading product...</div>;

  return (
    <>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </>
  );
};
