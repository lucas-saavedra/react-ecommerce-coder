

import { useEffect, useState } from 'react'
import { getProducts } from '../../helpers/getProducts';
import { NavLink } from 'react-router-dom/'
import NavDropdown from 'react-bootstrap/NavDropdown'

const CategoryListContainer = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts
            .then(data => {
                const categoriesDuplicated = data.map(prod => prod.category);
                const cat = categoriesDuplicated.filter((item, index) => {
                    return categoriesDuplicated.indexOf(item) === index;
                })
                setCategories(cat)
                console.log()
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        return () => {

        }
    }, []);



    return (
        <>
            <NavDropdown bg="dark" variant="dark" title="Categorias" id="collasible-nav-dropdown">
                {
                    loading ? (
                        < NavDropdown.Item >Cargando...
                        </NavDropdown.Item>) :

                        (
                            categories.map((cat, id) =>
                                <NavDropdown.Item>
                                    <NavLink key={id} className='dropdown-item' style={{ textTransform: 'capitalize', padding: '0.3em' }} to={`/category/${cat}`}>{cat}</NavLink>
                                </NavDropdown.Item>
                            )
                        )
                }
            </NavDropdown>
        </>
    )
}

export default CategoryListContainer
