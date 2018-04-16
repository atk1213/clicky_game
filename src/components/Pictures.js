import React from "react";
import App from "../App.js";

const List = props => (
    <div className="container">
        {props.choices.map(choice => {
            return <div role="img" aria-label="click item" className="click-item"
            style="background-image: url({choices.images});"></div>
        })}
    </div>   
);

export default List;