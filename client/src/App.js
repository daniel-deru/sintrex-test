import './App.css';
import { useEffect, useState } from "react"
import axios from "axios"


function App() {
  const [currentLocation, setCurrentLocation] = useState({
    lat: 0,
    lon: 0
  })

  useEffect(() => {
    // get_zones()  
    get_location()
  }, [])

  const get_zones = async () => {
    const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJ4T2R0ck1tMnhOTXlPeml4STRXdHNIWmdiTlMyIiwiaWF0IjoxNjI5MjYzMjk4fQ.WSOnbAaIoLudWalUqNc5p-uDRtS19tw-S5Vks00EcZE"
    const URL = "https://loadshedding-api.sintrex.com"
    const get_all_zones = "/getLocations/"
    let headers = {
      "Authorization": `Bearer ${TOKEN}`
    }

    let zones = await axios.get(`${URL}${get_all_zones}`, { headers })
    console.log(zones)
  }

  const reverse_geo = async () => {
    const LOCATION_TOKEN = "pk.2ba4263c7f6094469ddb1fc02ea37238"
    const url = `https://us1.locationiq.com/v1/reverse.php?key=${LOCATION_TOKEN}&lat=LATITUDE&lon=LONGITUDE&format=json`
  }

  const get_location = () => {
    if (navigator.geolocation){
      let location = navigator.geolocation.getCurrentPosition((location) => {
        console.log(location)
        setCurrentLocation({ lat: location.coords.latitude, lon: location.coords.longitude})
      })
    }
    console.log(currentLocation)
  }

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
