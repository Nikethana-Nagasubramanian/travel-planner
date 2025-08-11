import padsData from "./pads"
import React from "react"
import Pads from "../../components/for-understanding/Pads"

export default function App() {

    const [pads, setPads] = React.useState(padsData)

    function toggle(id) {
        setPads(prevPads => prevPads.map(item => {
            return item.id === id ? {...item, on: !item.on} : item
        }))
    }

    const elements = pads.map((pad) => {
      return (<Pads key={pad.id} {...pad} toggleFn = {toggle} id = {pad.id}/>)
    })

    return (
        <main>
            <div className="pad-container">
                {elements}
            </div>
        </main>
    )
}
