import Header from "../../components/travel-journal-components/Header.jsx";
import Entry from "../../components/travel-journal-components/Entry.jsx";
import data from "./data.js";

export default function App() {
    const entryElements = data.map((entry)=> {
        return (
            <Entry
                key={entry.id}
                {...entry}
            />
        )
    })
    console.log(data)
    return (
        <>
            <Header/>
            <main className="container">
                {entryElements}
            </main>
        </>
    )
}