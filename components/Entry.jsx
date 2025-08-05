import '../src/index.css';
import { MapPin } from 'phosphor-react';

export default function Entry(props) {
    return (
        <article className = "journal-entry">
            <div className='main-image-container'>
                <img src = {props.img.src} 
                    className = "main-image" 
                    alt={props.img.alt}/>
            </div>
            <div className="info-container">
                <div className="info-country">
                    <MapPin weight='fill' size={16} color='#F55A5A'/>
                    <span className='country'>{props.country}</span>
                    <a href={props.googleMap}>
                        View on Google Maps</a>
                </div>
                <h2 className='entry-title'>{props.title}</h2>
                <p className='trip-dates'>{props.date}</p>
                <p className='entry-text'>{props.text}</p>
            </div>
        </article>
    )
}