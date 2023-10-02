import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNavigation = ({ title }) => {
    return (
        <>
            <div className="pageNavigation">
                <NavLink to="/"><h2>Home</h2></NavLink> <span>/ {title}</span>
            </div>
        </>
    )
}

export default PageNavigation
