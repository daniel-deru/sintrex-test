import './App.css';
import { useEffect } from "react"
import axios from "axios"


function App() {

  const get_zones = async () => {
    const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJ4T2R0ck1tMnhOTXlPeml4STRXdHNIWmdiTlMyIiwiaWF0IjoxNjI5MjYzMjk4fQ.WSOnbAaIoLudWalUqNc5p-uDRtS19tw-S5Vks00EcZE"
    const URL = "loadshedding-api.sintrex.com"
    const get_all_zones = "/getLocations"
    let headers = {
      "Authorization": `Bearer ${TOKEN}`
    }

    let zones = await axios.get(`${URL}${get_all_zones}`, { headers })
    console.log(zones.data)
  }
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
