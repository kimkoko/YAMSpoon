import "./TopButton.scss";
import React from "react";

function TopButton() {

    function moveTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <>
            <button type="button" className="top-button" onClick={moveTop}>
                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M112 244l144-144 144 144M256 120v292"/>
                </svg>
            </button>
        </>
    )

}

export default TopButton;