import * as React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'
import banner from '../../static/herobanner.gif'
import Form from '../components/Form'
import LeftImage from "../components/LeftImage"
import WebsiteImage from "../../static/building_websites.png"
import RightImage from "../components/RightImage"
import TalentImage from "../../static/talent.svg"

export default function Home() {
  return (
    <Layout>
      <section className={styles.header} style={{ backgroundImage: `url(${banner})`, height: `100vh`, width: `100vw`}}>
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <h2>Looking for Gatsby Development Engineers?</h2>
              <p>Instant access to Experienced Software Developers in your time zone <br />
              The development talent you need, ready to join as an extension of your team.</p>
            </div>
            <div className={styles.content}>
              <Form />
            </div>
          </div>
      </section>
      <LeftImage
        title="Why choose code Power"
        src= {WebsiteImage}
        description = "Scale quickly with on-demand expert software engineers ready to join your development team and swiftly boost your project."
      />
      <RightImage
        title="Rigorously Vetted and
        Proven Talent"
        src= {TalentImage}
        description = "Our meticulous recruiting process is led by our most senior engineers, and all applicants go through a 5 step screening process that lasts over 7 hours."
      />
    </Layout>
  )
}
