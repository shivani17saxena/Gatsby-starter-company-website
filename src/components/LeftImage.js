import React from 'react'
import * as styles from '../styles/left.module.css'
import icon from '../../static/logo.png'

const LeftImage = (props) => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.image}>
            <img src={props.src} alt='code-image' />
        </div>
        <div></div>
        <div className={styles.text}>
            <h2 className={styles.h2}>{props.title}</h2>
            <h3>
                {props.description}
            </h3>
            <ul className='ul'>
              <ul style={{margin:`2%`}}><img src='https://www.codepwr.com/wp/wp-content/uploads/2022/02/code-power-icon-Senior-Engineers-200x200-1.png' alt='icon' style={{ width: `10%`}} /><span className={styles.list} style={{padding: `10px`}}>Senior Consultants with 9+ years' experience</span></ul>
              <ul style={{margin:`2%`}}><img src='https://www.codepwr.com/wp/wp-content/uploads/2022/02/code-power-icon-Time-Zone-200x200-1.png' alt='abc' style={{ width: `10%`}} /><span className={styles.list} style={{padding: `10px`}}>Time Zone Aligned</span></ul>
              <ul style={{margin:`2%`}}><img src='https://www.codepwr.com/wp/wp-content/uploads/2022/02/code-power-icon-pool-developers-200x200-1.png' alt='abc' style={{ width: `10%`}} /><span className={styles.list} style={{padding: `10px`}}>Large pool of on-demand talent</span></ul>
            </ul>
        </div>
    </div>
  )
}

export default LeftImage