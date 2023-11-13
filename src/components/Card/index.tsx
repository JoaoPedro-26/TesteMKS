import Button from 'components/Button';
import * as S from './style'

interface CardProps {
    src: string,
    text: string,
    price: number,
    label: string,
}

const Card = ({src, text, price, label}: CardProps) => {

    return (
        <S.container>
            <S.image src={src}/>
            <S.textPrice>
                <S.text>{label}</S.text>
                <S.price>R${price}</S.price>
            </S.textPrice>
            <S.subText>{text}</S.subText>
            <Button
                src={src}
                label={label}
                price={price}
            />
        </S.container>
    )
}

export default Card;