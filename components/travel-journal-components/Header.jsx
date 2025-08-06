import { GlobeHemisphereWest } from 'phosphor-react';
import '../../src/index.css';

export default function Header() {
    return (
        <header>
            <GlobeHemisphereWest size={24} color="#ffffff" weight="fill"/>
            <h1>my travel journey.</h1>
        </header>
    )
}