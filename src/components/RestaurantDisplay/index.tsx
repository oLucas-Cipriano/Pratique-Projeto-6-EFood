import Tag from '../Tag'

import star from '../../assets/images/star_favorite.svg'

import * as S from './styles'

type Props = {
  description: string
  image: string
  infos: string[]
  title: string
  avaliation: number
  link: string
}

const RestaurantDisplay = ({
  description,
  image,
  infos,
  title,
  avaliation,
  link
}: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 234) {
      return description.slice(0, 231) + '...'
    } else {
      return description
    }
  }
  return (
    <S.Card>
      <S.Cover>
        <img src={image} alt="teste" />
      </S.Cover>
      <S.TagInfos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </S.TagInfos>
      <S.Informations>
        <div>
          <S.Title>{title}</S.Title>
          <S.Assessment>
            {avaliation}
            <img src={star} alt="estrela" />
          </S.Assessment>
        </div>
        <S.Description>{getDescription(description)}</S.Description>
        <S.LearnMore to={link}>Saiba mais</S.LearnMore>
      </S.Informations>
    </S.Card>
  )
}

export default RestaurantDisplay
