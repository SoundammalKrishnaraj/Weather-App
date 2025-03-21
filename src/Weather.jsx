import { useState } from "react"
import axios from "axios"
import "/images/background.jpeg"

function Weather() {

    const [city, setcity] = useState("")

    const [weather, setweather] = useState("")
    const [temp, settemp] = useState("")
    const [desc, setdesc] = useState("")

    function handleCity(evt) {
        setcity(evt.target.value)
    }

    function getWeather() {
        var weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5ab6b5ba020424ad40c79239215eca0f`)

        document.getElementById("results").classList.remove("hidden")

        weatherData.then(function (success) {
            console.log(success.data)
            setweather(success.data.weather[0].main)
            settemp(success.data.main.temp)
            setdesc(success.data.weather[0].description)
        })
    }
    return (
        <div className="bg-[url(images/background.jpeg)] bg-cover bg-opacity-100 h-screen w-screen flex items-center justify-center">
            <div className=" text-white text-center ">
                <h1 className="text-6xl font-bold">Weather Report</h1>
                <p className="mt-4 mb-4 text-2xl">I can give you a weather report about your city !</p>
                <input onChange={handleCity} type="text" className="mt-2 border border-black rounded-md bg-white text-black p-2 mb-4" placeholder="Enter Your City Name" /><br />
                <button onClick={getWeather} className="bg-black text-white p-2 rounded-md mt-2 mb-4">Report</button>
                <div className="mt-2 hidden text-4xl" id="results">
                    <p className="mb-4"><b>Weather: </b> {weather}</p>
                    <p className="mb-4"><b>Temperature: </b>{temp}</p>
                    <p ><b>Description: </b>{desc}</p>
                </div>

            </div>

        </div>
    )
}

export default Weather

