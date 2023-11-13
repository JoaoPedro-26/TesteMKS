import * as S from './style'
import CarImg from '../../assets/imgs/car-img.svg'

const Header = () => {

    return (
        <S.header>
            <S.containerHeader>
                <S.logo>MKS</S.logo>
                <S.text>Sistemas</S.text>
            </S.containerHeader>
            <S.button><S.image src={CarImg} alt="Descrição da imagem" />0</S.button>
        </S.header>
    )
}

export default Header;