import "./TopButton.scss";
import React from "react";

function TopButton() {

    function moveTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <>
            <button type="button" className="top-button" onClick={moveTop}>
                <ion-icon name="arrow-up-outline"></ion-icon>
            </button>
        </>
    )

}

export default TopButton;