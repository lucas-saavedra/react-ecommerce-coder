
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Item from '../Item/Item';
import productos from '../../data/productos'
const ItemListContainer = ({ greeting }) => {
  return (
    <Container>
      <Row className=' py-3'>
        <h1 className='display-4 py-1 text-center'>{greeting}</h1>
        {productos.map((prod) =>
          <Item key={prod.id} title={prod.title} price={prod.price} category={prod.category} imgUrl={prod.url} />
        )}
      </Row>
    </Container>
  )
}

export default ItemListContainer
