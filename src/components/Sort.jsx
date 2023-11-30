import React from 'react'
import { BsGrid3X3GapFill } from "react-icons/bs";
import { CiBoxList } from "react-icons/ci";
import { useFilterContext } from '../context/Filter_Context';

const Sort = () => {

  const { filter_products, grid_view, setGridView, setListView , sorting } = useFilterContext()

  return (
    <div>
      <div className="sorting">
        <div className="sortingIcons">
          <BsGrid3X3GapFill className={grid_view ? 'active' : ''} onClick={setGridView} />
          <CiBoxList className={!grid_view ? 'active' : ''} onClick={setListView} />
        </div>
        <h2>{filter_products.length} Total Products </h2>
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
  )
}

export default Sort
