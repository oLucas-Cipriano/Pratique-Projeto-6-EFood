import * as S from './styles'

type Props = {
  description: string
  image: string
  title: string
}

const ProductDisplay = ({ description, image, title }: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 125) {
      return description.slice(0, 122) + '...'
    } else {
      return description
    }
  }

  return (
    <S.Card>
      <S.Cover>
        <img src={image} alt="teste" />
      </S.Cover>
      <S.Informations>
        <S.Title>{title}</S.Title>
        <S.Description>{getDescription(description)}</S.Description>
      </S.Informations>
      <S.Button>Mais detalhes</S.Button>
    </S.Card>
  )
}
export default ProductDisplay
