
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList';
import getFirestore from '../../Firebase/firebase';


const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { category } = useParams();


  useEffect(() => {
    const limitOfProducts = 20;
    const db = getFirestore();
    let products = db.collection('products');
    const query = category ? products.where('category', '==', `${category}`) : products

    query.limit(limitOfProducts).get().then((querySnapshot) => {
      function getProd(doc) {
        return { id: doc.id, ...doc.data() }
      }
      setProducts(querySnapshot.docs.map(getProd));
    })
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, [category])

  return (
    <>
      <Container>
        {loading ? (
          <div className="d-flex align-items-center">
            <h2>Cargando productos...</h2>
            <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
          </div>
        ) : (
          <>
            <ItemList products={products} />
          </>
        )
        }
      </Container>
    </>
  )
}

export default ItemListContainer
