import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import getFirestore from "../../Firebase/firebase";
import Loader from "../Loader/Loader";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true)
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const products = db.collection('products');
        const itemFirestore = products.doc(id);
        itemFirestore.get().then((doc) => {
            if (!doc.exists) {
                console.log('No existen productos')
                setItem({});
            } else {
                setItem({ id: doc.id, ...doc.data() });
            }
        })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [id])

    return (
        <div>  {loading ? ( <Loader />
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
