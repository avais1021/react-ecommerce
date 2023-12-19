import React from 'react'
// import { useProductContext } from '../context/ProductContext';
import { useFilterContext } from '../context/Filter_Context';
import { AiOutlineCheck } from "react-icons/ai";
import FormatPrice from '../helper/FormatPrice';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";


const FilterSection = ({onPress , clickVal}) => {

  // const { products } = useProductContext()

  // let uniqColor = [];
  // products.forEach((ele) => {
  //   ele.colors.forEach((item) => {
  //     if (!uniqColor.includes(item)) {
  //       uniqColor.push(item)
  //     }
  //   })
  // })
  // console.log(uniqColor, 'uniqColor');


  const { filter: { text, colors , minPrice , maxPrice , price }, updateFilterValue, all_products , clearFilter } = useFilterContext();

  // get uniq data of feilds 
  const getUniqData = (data, property) => {
    let newVal = data.map((ele) => {
      return ele[property]
    })

    // ----------------first way----------
    // if (property === 'colors') {
    //   //  return (newVal = ['All' , ...new Set([].concat(newVal))])
    //   // fat function does this concat multiple array
    //   newVal = newVal.flat();
    // }

    // return newVal = ['All', ...new Set(newVal)];
    // ------------------------end-------


    // -----------------secod way ------------
    if (property === 'colors') {
      // alert('color')
      return (newVal = ['All', ...new Set([].concat(...newVal))])
    } else {
      // alert('nonColor')
      return newVal = ['All', ...new Set(newVal)];
    }
    // ------------------------end---------------


  }

  // uniq function 
  const categoryData = getUniqData(all_products, 'category');
  // console.log(categoryData, 'categoryData');
  const companyData = getUniqData(all_products, 'company');
  // console.log(companyData, 'companyData');
  const colorData = getUniqData(all_products, 'colors');
  // console.log(colorData, 'colorData');


  return (
    <div className='filter_sec'>

      <form onSubmit={(e) => e.preventDefault()}>

        {/* <input className='searchPList' type="text" placeholder='SEARCH' name='text' value={text} onChange={updateFilterValue} /> */}

        {clickVal ? <button onClick={onPress} className='filter_doneBtn'><IoMdCheckmarkCircleOutline /></button> : null }
        <h2>Category</h2>

        {categoryData.map((ele, idx) => {
          return (
            <button key={idx} name='category' value={ele} onClick={updateFilterValue} >{ele}</button>
          )
        })}


        <h2>Company</h2>
        <select name="company" onClick={updateFilterValue}>
          {companyData.map((ele, idx) => {
            return <option key={idx} name='company' value={ele} >{ele}</option>
          })}
        </select>

        <h2>Colors</h2>
        <div className='filterColor colors'>
          {/* <p>All</p> */}
          {colorData.map((ele, idx) => {

            if(ele === 'All'){
              return (<button key={idx} type='button' name='colors' value={ele}
               onClick={updateFilterValue}>
              All
            </button>
            )
            }

            return (<button key={idx} className={colors===ele ? 'active' : null} type='button' name='colors' value={ele}
              style={{ background: ele }} onClick={updateFilterValue}>
              {colors === ele ? <AiOutlineCheck /> : null}
            </button>
            )
          })}
          {/* {uniqColor.map((uC, idx) => {
            return <button key={idx} style={{ background: uC }}></button>
          })} */}
        </div>

        <h2>Price</h2>
        <p><FormatPrice price={price} /></p>
        <input type="range" name='price' value={price} min={minPrice} max={maxPrice} onChange={updateFilterValue} />

        <button type='button' className='clearFilter' onClick={clearFilter}>CLEAR FILTER</button>

      </form>
    </div>
  )
}

export default FilterSection
