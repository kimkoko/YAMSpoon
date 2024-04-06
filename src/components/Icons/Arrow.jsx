import React from 'react';
import propTypes from "prop-types";

export default function Arrow ({stroke}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
            <path fill="none" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M244 400L100 256l144-144M120 256h292"/>
        </svg>

    )
}


// props 정의
Arrow.propTypes = {
    stroke: propTypes.string,
}
