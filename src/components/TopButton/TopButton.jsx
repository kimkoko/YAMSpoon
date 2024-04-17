import "./TopButton.scss";
import Plus from "../Icons/Plus";
import React from "react";

function TopButton() {

    function moveTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <div className="buttons-container">
            <div className="plus-button">
                <Plus width="55px" height="55px" strokeColor="#fff" fillColor="#D3233A"  />
            </div>
            <button type="button" className="top-button" onClick={moveTop}>
                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M112 244l144-144 144 144M256 120v292"/>
                </svg>
            </button>
        </div>
    )

}

export default TopButton;