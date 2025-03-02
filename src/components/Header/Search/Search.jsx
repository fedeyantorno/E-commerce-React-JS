import './Search.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { getProducts } from '../../../firebase/firebase'
import { Link } from "react-router-dom"
import { Item } from '../../SectionHome/Item/Item'

export const Search = () => {

    const searchIcon = <FontAwesomeIcon icon={faSearch} />

    const [products, setProducts] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResult, setSearchResult] = useState([])

    const handleSearchChange = (e) => { setSearchTerm(e.target.value) }

    const handleSubmit = (e) => { e.preventDefault() }

    useEffect(() => {
        getProducts().then((products) => setProducts(products) )      
    }, [])

    useEffect(() => {
      if(searchTerm) {
        const results = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
        setSearchResult(results)
      } else {
        setSearchResult([])
      }
    }, [searchTerm, products])
    
    return (
      <>
          <form className="d-flex" role="search" id='formSearch' onSubmit={handleSubmit}>
              <input
               className="form-control me-2"
               type="search"
               placeholder="Buscar..."
               aria-label="Buscar"
               id='search'
               value={searchTerm}
               onChange={handleSearchChange}
              />
              <Link to={'/search'}><button className="btn btn-outline-success" type="submit">{searchIcon}</button></Link>
          </form>
          {searchResult.map((product) => (
           <li key={product.id}>
             <Item {...product}/>
           </li>        
           ))}
      </>
    )
}