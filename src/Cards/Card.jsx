import React from 'react'
import styles from './Card.module.css'

function Card(props) {
    return (
        <div className={styles.card}>
            <img className={styles.img} src="mypic.jpg" alt="Profile pic" />
            <h2>SupunR</h2>
            <h4> Age:{props.age}</h4>
            <p>{props.para}</p>
        </div>
    )
}

export default Card