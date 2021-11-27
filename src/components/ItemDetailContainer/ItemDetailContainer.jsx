import { useState, useEffect } from "react";
import { getProducts } from "../../helpers/getProducts";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
/* const itemMock = {
    "id": 12,
    "title": "Nintendo Switch",
    "price": 60000,
    "category": "gaming",
    "color": "negro",
    "detail": "Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur",
    "url": "https://source.unsplash.com/EdUYo2Y435s/800x600",
    "stock": 5
}
const getItems = new Promise((successed, rejected) => {
    setTimeout(() => {
        successed(itemMock)
    }, 3000);
}) */
const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true)
    const { id } = useParams();

    useEffect(() => {
        getProducts
            .then(data => {
                setItem(data.find(prod => prod.id === Number(id)))
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        return () => {

        }
    }, [id]);
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
