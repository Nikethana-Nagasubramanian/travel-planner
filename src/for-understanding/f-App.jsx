import Jokes from "../../components/components-f/Jokes"
import jokesData from "./f-jokes"
export default function App() {
     const jokeElements = jokesData.map((joke) => {
        return <Jokes setup={joke.setup}
        punchline={joke.punchline}/>
     })
    return (
        <main>
            {jokeElements}
        </main>
    )
}