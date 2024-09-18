import logo from '../../assets/images/logo.svg'
import twitter from '../../assets/images/twitter.svg'
import facebook from '../../assets/images/facebook.svg'
import instagram from '../../assets/images/instagram.svg'
import { FooterContainer, RedesSociais } from './styles'

const Footer = () => (
  <FooterContainer>
    <img src={logo} alt="logo" />
    <RedesSociais>
      <a href="#">
        {' '}
        <img src={instagram} alt="instagram" />
      </a>
      <a href="#">
        <img src={facebook} alt="facebook" />
      </a>
      <a href="#">
        <img src={twitter} alt="twitter" />
      </a>
    </RedesSociais>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br />
      dos produtos é toda do estabelecimento contratado.
    </p>
  </FooterContainer>
)

export default Footer
