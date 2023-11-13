import * as S from './style';

const InfosSideBar = ({ clickedItems }) => {

  return (
    <div>
      {clickedItems.map((item, index) => (
        <div key={index}>
          <S.itemInfo>
            <S.itemImage src={item.src} alt={item.label} />
            <S.itemLabel>{item.label}</S.itemLabel>
          </S.itemInfo>
        </div>
      ))}
      {/* <S.totalPrice>Total: R${totalPrice.toFixed(2)}</S.totalPrice> */}
    </div>
  );
};

export default InfosSideBar;