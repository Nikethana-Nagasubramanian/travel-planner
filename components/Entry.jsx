import '../src/index.css';
import { MapPin } from 'phosphor-react';

export default function Entry() {
    return (
        <article className = "journal-entry">
            <div className='main-image-container'>
                <img src = "https://scrimba.com/links/travel-journal-japan-image-url" 
                className = "main-image" alt="Image of Mt. Fuji in Japan"/>
            </div>
            <div className="info-container">
                <MapPin weight='fill' size={16} color='#F55A5A'/>
                <span className='country'>Japan</span>
                <a href='https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu'>View on Google Maps</a>

                <h2 className='entry-title'>Mount Fuji</h2>
                <h4 className='trip-dates'>12 Jan, 2023 - 24 Jan, 2023</h4>
                <p className='entry-text'>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </article>
    )
}