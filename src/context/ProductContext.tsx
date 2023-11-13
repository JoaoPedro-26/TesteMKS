import { createContext, Dispatch, SetStateAction, useState } from "react";

import { Product } from "types/products";

interface ButtonProps {
    src: string,
    price: number,
    label: string,
}
export interface ProductContextInterface {
    product: Product;
    setProduct: Dispatch<SetStateAction<Product>>;
    clickedProducts: ButtonProps[];
    setClickedProducts: Dispatch<SetStateAction<ButtonProps[]>>;
    isSidebarOpen: boolean;
    setSidebarOpen: Dispatch<SetStateAction<boolean>>;
  }

  const defaultState = {
    product: {} as Product,
    setProduct: (product: Product) => {},
    clickedProducts: [] as ButtonProps[],
    setClickedProducts: (products: ButtonProps[]) => {},
    isSidebarOpen: false,
    setSidebarOpen: (isOpen: boolean) => {},
  } as ProductContextInterface;

export const ProductContext = createContext<ProductContextInterface>(defaultState);

export interface ProductProviderProps {
  children: React.ReactNode;
}

export default function ProductProvider({ children }: ProductProviderProps) {
    const [product, setProduct] = useState<Product>({
      brand: "",
      description: "",
      name: "",
      price: 0,
      id: 0,
      photo: "",
    });
  
    const [clickedProducts, setClickedProducts] = useState<ButtonProps[]>([]);
    const [isSidebarOpen, setSidebarOpen] = useState(false);
  
    return (
      <ProductContext.Provider
        value={{
          product,
          setProduct,
          clickedProducts,
          setClickedProducts,
          isSidebarOpen,
          setSidebarOpen,
        }}
      >
        {children}
      </ProductContext.Provider>
    );
  }