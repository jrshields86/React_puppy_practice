import { useState, useEffect } from "react"
import axios from "axios";

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(()=> {
    const fetchPlayers = async()=> {
    console.log('howdy world')
    const response = await axios.get('https://fsa-puppy-bowl.herokuapp.com/api/2307-FTB-ET-WEB-FT/players')
    const data = response.data.data.players;
    setPlayers(data)
  };
    fetchPlayers();
  }, []);

  return (
    <>
      <div>
        <nav>
          <a href='#'>Home</a>
          <a href="#players">Players ({ players.length})</a>
        </nav>
      </div>
    </>
  )
}

export default App
