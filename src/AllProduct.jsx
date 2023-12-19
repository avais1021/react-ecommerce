import React, { useState } from 'react'
import FilterSection from './components/FilterSection'
import Sort from './components/Sort'
import ProductList from './components/ProductList'
import { Container } from './App'

const Product = () => {
const [click,setClicl] = useState(false)
  return (
    <div className="section allPro_sec">
      <Container>
        <div className='AllProduct'>
          <div className="row">
            <div className={click ? "left active" : "left remove_act"}>
              <FilterSection onPress={()=>setClicl(!click) } clickVal={click} />
            </div>
            <div className="right">
              <Sort onPress={()=>setClicl(!click)} />
              <ProductList />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Product
