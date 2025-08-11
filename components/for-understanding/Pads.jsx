import padsData from "../../src/for-understanding/pads"
import React from "react"

export default function Pads(props) {

    return (
        <main> 
                <button 
                key={props.id} 
                style={{backgroundColor: props.color}}
                onClick={() => props.toggleFn(props.id)}
                className={props.on ? "on" : "off"}/>
        </main>
    )
}