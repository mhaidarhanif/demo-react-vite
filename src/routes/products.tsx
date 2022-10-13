import { Link } from "react-router-dom";
import { fetcher, useSWR } from "../libs";

export const ProductsRoute = () => {
  const { data: products, error } = useSWR(
    `${import.meta.env.VITE_BACKEND_API_URL}/products`,
    fetcher
  );

  if (error) return <div>Failed to load products</div>;
  if (!products) return <div>Loading products...</div>;

  return (
    <>
      <h1>Products Route</h1>
      <ul>
        {products.map((product: any) => {
          return (
            <li>
              <Link to={`/products/${product.id}`}>{product.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
