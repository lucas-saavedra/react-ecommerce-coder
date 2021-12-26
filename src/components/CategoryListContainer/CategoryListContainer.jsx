

import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom/'
import NavDropdown from 'react-bootstrap/NavDropdown'
import getFirestore from '../../Firebase/firebase';

const CategoryListContainer = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const db = getFirestore();
        const categories = db.collection('categories');
        categories
            .get().then((querySnapshot) => {
                if (querySnapshot.size === 0) {
                    console.log('Vacio')
                } else {
                    setCategories(querySnapshot.docs.map(doc => doc.data().category));
                }
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    return (

        <NavDropdown bg="dark" variant="dark" title="Categorias" id="collasible-nav-dropdown">
            {
                loading ? (
                    < NavDropdown.Item >Cargando...
                    </NavDropdown.Item >) :
                    (
                        categories.map((cat, id) =>
                            <NavDropdown.Item key={id} as={NavLink} className='dropdown-item' style={{ textTransform: 'capitalize' }} to={`/category/${cat}`}>{cat}</NavDropdown.Item>
                        )
                    )
            }
        </NavDropdown>

    )
}

export default CategoryListContainer
