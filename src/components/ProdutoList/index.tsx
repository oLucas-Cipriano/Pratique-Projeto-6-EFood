import ProdutoModelo from '../../models/Produto'
import Produto from '../Produto'
import { List, ListContainer } from './styles'

type Props = {
  produtos: ProdutoModelo[]
}

const ProdutoList = ({ produtos }: Props) => (
  <ListContainer>
    <List>
      {produtos.map((produto) => (
        <Produto
          key={produto.id}
          description={produto.description}
          image={produto.image}
          title={produto.title}
        ></Produto>
      ))}
    </List>
  </ListContainer>
)

export default ProdutoList
