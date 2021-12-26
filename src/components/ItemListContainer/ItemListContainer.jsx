
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList';
import getFirestore from '../../Firebase/firebase';
import Loader from '../Loader/Loader';


const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { category } = useParams();


  useEffect(() => {
    let mounted = true
    const limitOfProducts = 20;
    if (mounted) {
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
    }
    return function cleanup() {
      mounted = false
    }
  }, [category])

  return (
    <>
      <Container>
        {loading ? (<Loader msg='Cargando productos...' />) :
          (
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
