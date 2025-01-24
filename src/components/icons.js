import { StaticImage } from "gatsby-plugin-image"
import {invertIcon, imageCircle, invertIcon2} from '../styles/styles.module.css'
import React from "react"

export function Email() {
  return <StaticImage src="../images/email.svg" alt="email icon" className={invertIcon}/>
}

export function LinkedIn() {
  return <StaticImage src="../images/linkedin-brands-solid.svg" alt="LinkedIn icon" className={invertIcon}/>
}

export function GitHub() {
  return <StaticImage src="../images/github-brands-solid.svg" alt="GitHub icon" className={invertIcon}/>
}

export function Resume() {
  return <StaticImage src="../images/resume.svg" alt="resume icon" className={invertIcon2}/>
}

export function Portrait() {
  return <StaticImage src="../images/portrait.jpg" alt="portrait of Sean Collins dressed professionally in the park" className={imageCircle}/>
}


