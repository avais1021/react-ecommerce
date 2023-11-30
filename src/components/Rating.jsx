import React from 'react'
import { HiOutlineStar } from "react-icons/hi";
import { FaStarHalf ,FaStar} from "react-icons/fa";

const Rating = ({reviews,stars}) => {
    
   const ratingStar =  Array.from({length:5},(ele,index)=>{
        console.log(index,'index');
        let number = 0.5 + index;
        console.log(number,'number');

        return(
            <span key={index}>
                {stars >= index + 1 ? (<FaStar/>) : stars >= number ? (<FaStarHalf/>) : (<HiOutlineStar/>) }
            </span>
        )
    })


    return (
    
            <div className='rating'>
              
                <div>{ratingStar}</div>
                <span>({reviews}customers reviews)</span>
            </div>
        
    )
}

export default Rating
