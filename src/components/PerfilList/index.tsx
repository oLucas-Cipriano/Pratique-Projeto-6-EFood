import PerfilModelo from '../../models/Perfil'
import Perfil from '../Perfil'
import { List, ListContainer } from './styles'

type Props = {
  perfis: PerfilModelo[]
}

const PerfilList = ({ perfis }: Props) => (
  <ListContainer>
    <List>
      {perfis.map((perfil) => (
        <Perfil
          key={perfil.id}
          description={perfil.description}
          image={perfil.image}
          infos={perfil.infos}
          title={perfil.title}
          nota={perfil.nota}
          link={perfil.link}
        ></Perfil>
      ))}
    </List>
  </ListContainer>
)

export default PerfilList
