import * as React from 'react'
import Layout from '../components/homepage_layout'
import { personalLinks, title, header, titleBox, portraitBox, downloadButton, aboutMe} from '../styles/styles.module.css'
import { Email, Resume, GitHub, LinkedIn, Portrait } from '../components/icons'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <div className={header}>
        <div className={titleBox}>
          <h1 className={title}>Sean Collins' Portfolio</h1>
          <h2>Welcome to my page.</h2>
          <nav className={personalLinks}>
            <a href="/SeanCollinsResume.pdf" download >
              <button className={downloadButton}>
              Resume&nbsp;
              <Resume/>
              </button>
            </a>
            <a href='#' onClick={() => window.open("mailto:sean.collins.developer@gmail.com")}>
              <Email/>
            </a>
            <a href="https://www.linkedin.com/in/sean-collins-4a6279252/" target="_blank" rel="noreferrer">
              <LinkedIn/>
            </a>
            <a href="https://github.com/Drink-some-water" target="_blank" rel="noreferrer">
              <GitHub/>
            </a>
          </nav>
        </div>
        <div className={portraitBox}>
          <Portrait/>
        </div>
      </div>
      <div className={aboutMe}>
        <h2>About me:</h2>
        <p>I invite you on a journey through the experiences of my life up to now. There will be a few stops on the road to see some of the projects I have put my passion into. I hope you will get to know me and perhaps contact me to collaborate. If you want to learn more about me, this section contains a combination of personal material and experience. If you’re only interested in code examples, stop reading here and jump over to my projects window via the nav bar at the top of the page or <a className="sparkleLink" href='#'>this link</a>.</p>
        <p>I began my journey into the computing field in the unlikeliest of places. While I had always been a bit of a science geek (I am still proud of my chem SAT score), I felt lost. Unsure of what to do after high school, I began my college career as an art student on the beautiful, forested coast of Santa Cruz, California.</p>
      </div>
    </Layout>
  )
}
export const Head = () => <title>Sean Collins</title>
export default IndexPage