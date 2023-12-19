import React, { useState } from 'react'
import { BsGrid3X3GapFill } from "react-icons/bs";
import { CiBoxList } from "react-icons/ci";
import { useFilterContext } from '../context/Filter_Context';

const Sort = ({onPress}) => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  const { filter_products, grid_view, setGridView, setListView, sorting, filter: { text }, updateFilterValue } = useFilterContext()

  return (
    <div>
      <div className="sorting__wrapper">


        <div className="sorting">
          <div className="serach__price_grid">

          {windowWidth < 768.9 ? <button onClick={onPress} className='show_filter'>Filter</button> : null }  

            <div className="sortingIcons">
              <BsGrid3X3GapFill className={grid_view ? 'active' : ''} onClick={setGridView} />
              <CiBoxList className={!grid_view ? 'active' : ''} onClick={setListView} />
            </div>
            <div className="serach_pro">
              <input className='searchPList' type="text" placeholder='SEARCH' name='text' value={text} onChange={updateFilterValue} />
            </div>
          </div>
          <form >
            <label htmlFor="sort"></label>
            <select name="sort" id="sort" onClick={sorting}>
              <option value="#" disabled></option>
              <option value="lowest">Price(lowest)</option>
              <option value="#" disabled></option>
              <option value="highest">Price(highest)</option>
              <option value="#" disabled></option>
              <option value="a-z">Price(a-z)</option>
              <option value="#" disabled></option>
              <option value="z-a">Price(z-a)</option>
            </select>
          </form>
        </div>
      </div>
      <h2 className='filter_product_qty'>{filter_products.length} Total Products </h2>

    </div>
  )
}

export default Sort
