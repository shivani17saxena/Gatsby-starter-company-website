import React from 'react'
import * as styles from '../styles/form.module.css'

const Form = () => {
  return (


    <div className={styles.form}>
        <div>
          <img src='https://www.codepwr.com/wp/wp-content/uploads/2023/01/Laravel-290x300.png' alt='logo' />
        </div>
        <div>
            <h3>
                Scale fast with out on-demand developers
            </h3>
        </div>
        <div>
          <input name='name' placeholder='Your Name *' />
          <input name='email' placeholder='Your Work Email *' />
          <textarea className={styles. message} rows='3' name='message' placeholder='How can we help you?' />
        </div>
        <div>
          <button name='btn'>Power Up Your Team</button>
        </div>
    </div>
  )
}

export default Form