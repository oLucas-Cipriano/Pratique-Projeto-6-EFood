import fundo from '../../assets/images/pos-header-image-italiano.png'
import { ImagemBackground, NomeDoRestaurante, Titulo } from './styles'

const PosHeader = () => (
  <ImagemBackground style={{ backgroundImage: `url(${fundo})` }}>
    <Titulo>Italiana</Titulo>
    <NomeDoRestaurante>La Dolce Vita Trattoria</NomeDoRestaurante>
  </ImagemBackground>
)

export default PosHeader
