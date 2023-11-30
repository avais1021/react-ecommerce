import React from 'react'
import FilterSection from './components/FilterSection'
import Sort from './components/Sort'
import ProductList from './components/ProductList'
import { Container } from './App'

const Product = () => {

  return (
    <div className="section">
      <Container>
        <div className='AllProduct'>
          <div className="row">
            <div className="left">
              <FilterSection />
            </div>
            <div className="right">
              <Sort />
              <ProductList />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Product
