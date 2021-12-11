import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import getFirestore from "../../Firebase/firebase";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true)
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const products = db.collection('productos');
        const item = products.doc(id);
        item.get().then((doc) => {
            setItem({ id: doc.id, ...doc.data() });
        })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [id])
    
    return (
        <div>  {loading ? (

            <div className='d-flex align-items-center container' style={{ height: '50vh' }}>
                <h2>Cargando detalle...</h2>
                <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
            </div>

        ) : (
            <Container>
                <ItemDetail item={item} />
            </Container>
        )
        }
        </div>
    )
}

export default ItemDetailContainer
