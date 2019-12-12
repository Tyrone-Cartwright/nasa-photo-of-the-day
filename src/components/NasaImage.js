import React, { useState, useEffect } from 'react'
import axios from 'axios'

const apiKey = "b65GJLSeI9Xttix36JAHMYZsSBniL8ptBolKhkY1"
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
export default function NasaImage() {
  const [nasaImg, setNasaImg] = useState([])

  useEffect(() => {
    axios.get(apiUrl)
    .then(response => {
      console.log(response.data)
      setNasaImg(response.data)
    })
    .catch(error => {
      console.log("sorry no image", error)
    })
  }, [])
  return (
    <div className="constainer">
      
      <img src={nasaImg.url} alt={nasaImg.title} />
      <div className="image-content">
        <h1 className="title">{nasaImg.title}</h1>
        <h2>{nasaImg.date}</h2>
        <p>{nasaImg.explanation}</p>
      </div>
    </div>
  )
}