import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'

function Nav() {
    return <nav>
        <button onClick={()=> scrollTo('#contact')}>Contact</button>
        Hello?
    </nav>
}

export default Nav