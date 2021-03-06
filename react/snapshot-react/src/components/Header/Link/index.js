import React, { useState } from 'react';


const Link = (props) => {

    const { href, title } = props;

    const [ classHover, setClassHover ] = useState('')

    const handleMouseEnter = () => {
        setClassHover('hover');
    }

    const handleMouseLeave = () => {
        setClassHover('');
    }


    return (
        <a href={href || '#'}
            className={"link " + classHover} 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {title}
        </a>
    )
}

export default Link;