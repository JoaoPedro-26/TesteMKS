import { useEffect, useState } from "react";
import * as S from "./style";
import { getProductsList } from "services/productsService";
import { Product } from "types/products";
import Card from "components/Card";
import Swal from "sweetalert2";

interface ProductList {
  products: Product[];
}

const Products = () => {
  const [productList, setProductList] = useState({
    products: [],
  } as ProductList);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const data = await getProductsList();
        setProductList(data);
      } catch (error) {
        Swal.fire({
          title:'Erro ao trazer os produtos',
          text: `${error}`,
          icon:'error'
        })
      }
    };

    fetchProductList();
  }, []);

  return (
    <S.container>
      {productList &&
        productList.products.map((product, index) => (
          <Card
            key={index}
            src={product.photo}
            label={product.brand}
            price={product.price}
            text={product.description}
          />
        ))}
    </S.container>
  );
};

export default Products;
