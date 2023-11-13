import * as S from './style';
import Close from '../../assets/imgs/close_cart.svg'
import { ProductContext } from 'context/ProductContext';
import { useContext, useState, useEffect } from 'react';
 
interface SidebarProps{
  openSide: boolean,
  onClose: ()=> void

}

const Sidebar = ({ openSide, onClose }:SidebarProps) => {

    const {clickedProducts, setClickedProducts } = useContext(ProductContext);
    const [selectedsProducts, setSelectedsProducts] = useState(clickedProducts);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setSelectedsProducts(clickedProducts);
    
        const calculateTotalPrice = () => {
            const total = clickedProducts.reduce((acc, item) => acc + +item.price, 0);
            setTotalPrice(total);
          };
    
        calculateTotalPrice();
      }, [clickedProducts]);

      const removeItem = (indexToRemove: number) => {
        const updatedProducts = clickedProducts.filter((_, index) => index !== indexToRemove);
        setClickedProducts(updatedProducts);
      };

  return (
    <>
      <S.sidebar open={openSide}>
          <S.header>
              <S.title>Carrinho de Compras</S.title>
              <S.closeButton src={Close} onClick={onClose} />
          </S.header>
          <S.infosProducts>
              {selectedsProducts.map((item, index) => (
                  <div key={index}>
                      <S.itemInfo>
                          <S.itemImage src={item.src} alt={item.label} />
                          <S.itemLabel>{item.label}</S.itemLabel>
                          <S.priceSideBar>R${item.price}</S.priceSideBar>
                          <S.closeImageSideBar src={Close} onClick={() => removeItem(index)} />
                      </S.itemInfo>
                  </div>
              ))}
          </S.infosProducts>
          <S.totalPrice>Total R${totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}</S.totalPrice>
          <S.buttonPrice>Finalizar compra</S.buttonPrice>
      </S.sidebar>
    </>
  );
};

export default Sidebar;