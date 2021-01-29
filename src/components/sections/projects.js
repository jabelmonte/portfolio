import React from 'react'
import Image from '../image'
import globalStyles from '../../styles/globals.module.css'

function Projects(){
    return <p><h1 className={globalStyles}>This would be my project</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <Image />
            </div>
            </p>
}

export default Projects;