import * as S from './style'
import ShoppingBag from '../../assets/imgs/shopping-bag.svg';
import Sidebar from 'components/SideBar';
import { useContext, useState, useEffect } from 'react';
import { ProductContext } from 'context/ProductContext';

interface ButtonProps {
    src: string,
    price: number,
    label: string,
}

const Button = ({ src, label, price }: ButtonProps) => {
    const {
      setClickedProducts,
      isSidebarOpen,
      setSidebarOpen,
    } = useContext(ProductContext);

    const [openSidebar, setOpenSidebar] = useState(isSidebarOpen || false);

    useEffect(() => {
      setOpenSidebar(isSidebarOpen);
    }, [isSidebarOpen]);

    const handleButtonClick = () => {
      if (!isSidebarOpen) {
        setSidebarOpen(true);
      }
      setClickedProducts((prevProducts) => [
        ...prevProducts,
        { src, price, label },
      ]);
    };

    const closeSidebar = () => {
      setSidebarOpen(false);
    };


    return (
        <>
            <S.button onClick={handleButtonClick}>
                <S.image src={ShoppingBag} alt="Shopping-bag"/>
                Comprar
            </S.button>
            <Sidebar openSide={openSidebar} onClose={closeSidebar}/>
        </>
    )
}

export default Button;