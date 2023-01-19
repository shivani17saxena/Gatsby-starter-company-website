import React, {useState} from 'react'
import { navigate } from "gatsby-link";
import * as styles from '../styles/form.module.css'


const Form = () => {

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message:""
  })

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    const myForm = e.target;
    //const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState })
    })
      .then(() => navigate("/thanks"))
      .catch(error => alert(error));

    e.preventDefault();

  }

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
        <form 
          onSubmit={handleSubmit} 
          name="contact" 
          action="/thanks"
          method="post" 
          data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
          <div>
            <input 
              id='name' 
              type='text'
              name='name' 
              onChange={handleChange}
              value={formState.name}
              placeholder='Your Name *' 
            />
            <input 
              type='text'
              id='email'
              onChange={handleChange}
              value={formState.email}
              name='email' 
              placeholder='Your Work Email *' 
            />
            <textarea 
              className={styles.message} 
              rows='3' 
              name='message' 
              id='message'
              onChange={handleChange}
              value={formState.message}
              placeholder='How can we help you?' 
            />
          </div>
          <div>
            <button name='btn' type='submit'>Power Up Your Team</button>
          </div>
        </form>
    </div>
  )
}

export default Form