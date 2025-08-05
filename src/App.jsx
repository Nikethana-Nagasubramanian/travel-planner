import Header from "../components/Header.jsx";
import Entry from "../components/Entry.jsx";
import data from "./data.js";
/**
 * Challenge:
 * - import the array of data from data.js
 * - map over the array to create an <Entry /> component
 *   for every item in the data array.
 * - display the array of Entry components in place of the current
 *   hard-coded <Entry /> instance.
 */
export default function App() {
    const entryElements = data.map((entry)=> {
        return (
            <Entry
                img={entry.img}
                title={entry.title}
                country={entry.country}
                googleMap={entry.googleMapsLink}
                date={entry.dates}
                text={entry.text}
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