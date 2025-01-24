import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {invertIcon, imageCircle, invertIcon2} from '../styles/styles.module.css'

export function Email() {
  return <StaticImage src="../images/email.SVG" alt="email icon" className={invertIcon}/>
}

export function LinkedIn() {
  return <StaticImage src="../images/linkedin-brands-solid.SVG" alt="LinkedIn icon" className={invertIcon}/>
}

export function GitHub() {
  return <StaticImage src="../images/github-brands-solid.SVG" alt="GitHub icon" className={invertIcon}/>
}

export function Resume() {
  return <StaticImage src="../images/resume.SVG" alt="resume icon" className={invertIcon2}/>
}

export function Portrait() {
  return <StaticImage src="../images/portrait.JPG" alt="portrait of Sean Collins dressed professionally in the park" className={imageCircle}/>
}


