import { PhoneCall, PaperPlaneTilt } from 'phosphor-react';
import '../../src/for-understanding/f-index.css';

export default function Jokes(props) {
    return (
        <article className="joke-card">
            <h2>{props.setup}</h2>
            {props.punchline && <h3>{props.punchline}</h3>}
        </article>
    )
}