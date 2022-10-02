import {useEffect, useState} from "react";

export default function Body({id, x, y, r, color}){
    return(
        <div
            style={{
                position: "absolute",
                borderRadius: "50%",
                border: `solid ${r}px ${color}`,
                left: `${x}px`,
                top: `${y}px`}}
        />
    )
}