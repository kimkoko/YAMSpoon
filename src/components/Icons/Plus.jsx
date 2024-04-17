import React from "react";
import PropTypes from 'prop-types';

export default function Plus({ width, height, strokeColor, fillColor }) {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={fillColor} stroke={strokeColor} viewBox="0 0 512 512" >
            <path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" strokeMiterlimit="10" strokeWidth="32"/>
            <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M256 176v160M336 256H176"/>
        </svg>
    );
}

Plus.propTypes = {
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    strokeColor: PropTypes.string.isRequired,
    fillColor: PropTypes.string.isRequired,
};
