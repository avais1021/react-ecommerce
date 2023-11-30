import React, { useState } from 'react'

const MySingleProImages = ({ image = [{ url: "" }] }) => {

    const [imageName, setImageName] = useState(image[0]);

    return (

        <>
            <div className="smallImages">

                {image.map((ele, index) => {
                    return (
                        <img src={ele.url} alt={ele.filename} key={index} onClick={() => setImageName(ele)} />
                    )
                })}


            </div>
            <div className="bigImage">
                <img src={imageName.url} alt={image[0].filename} />
            </div>
        </>
    )
}

export default MySingleProImages

