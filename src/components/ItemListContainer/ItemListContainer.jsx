
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react'
import { getProducts } from '../../helpers/getProducts';
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList';


const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { category } = useParams();

  useEffect(() => {
    getProducts // trabajando con las respuestas de la promesa
      .then(data => {
        category ? setProducts(data.filter(prod => prod.category === category)) : setProducts(data)//filtro para el ruteo
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, [category])


  return (

    <Container>
      {loading ?
        <div className="d-flex align-items-center">
          <h2>Cargando productos...</h2>
          <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
        </div>
        :
        <ItemList products={products} />
      }
    </Container>
  )
}

export default ItemListContainer
