import React from "react";
import "./CircleSelector.css";

export default function CircleSelector(props) {
    let num = props.selected;

    return (
        <div className="CircleSelector">
            <button
                onClick={() => props.handleClick(1)}
                className={props.selected === 1 ? "selected" : ""}
            >
                {num === 1 ? "CIRCLE 1 SELECTED" : "SELECT CIRCLE 1"}
            </button>
            <button
                onClick={() => props.handleClick(2)}
                className={props.selected === 2 ? "selected" : ""}
            >
                {num === 2 ? "CIRCLE 2 SELECTED" : "SELECT CIRCLE 2"}
            </button>
            <button
                onClick={() => props.handleClick(3)}
                className={props.selected === 3 ? "selected" : ""}
            >
                {num === 3 ? "CIRCLE 3 SELECTED" : "SELECT CIRCLE 3"}
            </button>
            <button
                onClick={() => props.handleClick(4)}
                className={props.selected === 4 ? "selected" : ""}
            >
                {num === 4 ? "CIRCLE 4 SELECTED" : "SELECT CIRCLE 4"}
            </button>
        </div>
    );
}
