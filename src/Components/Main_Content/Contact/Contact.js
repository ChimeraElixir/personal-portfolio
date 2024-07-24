import React from 'react'
import MapBox from './MapBox';
import ContactForm from './ContactForm';

import { map } from '../../../data';



const Contact = () => {
    return(

    <article className="contact" data-page="contact">

        <header>
            <h2 className="h2 article-title">Contact</h2>
        </header>

        <MapBox map={map}/>

        <ContactForm/>
        
    </article>
    )
}

export default Contact;
