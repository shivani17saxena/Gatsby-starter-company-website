import React from 'react'
import * as styles from '../styles/right.module.css'

const RightImage = (props) => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.text}>
            <h2 className={styles.h2}>{props.title}</h2>
            <h3>
                {props.description}
            </h3>
        </div>
        <div></div>
        <div className={styles.image}>
            <img src={props.src} alt='code-image' />
        </div>
    </div>
  )
}

export default RightImage