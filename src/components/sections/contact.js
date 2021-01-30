import React from 'react'
import {dummy, email} from '../links'

function Contact(){
    return <h1>
        <a className="email-button" href={`mailto:${email}`}>Come say hi</a>
    </h1>

}

export default Contact;