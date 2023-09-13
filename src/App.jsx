import { useState, useEffect } from "react"
import axios from "axios";
import { Link, Routes, Route, useLocation, useParams } from "react-router-dom";
import Players from "./Players";
import Player from "./Player";

function App() {
  const [players, setPlayers] = useState([]);
  const location = useLocation();
  const { pathname } = location
  
  useEffect(()=> {
    const fetchPlayers = async()=> {
    
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
          <Link to='/players' className={ pathname === '/players' ? 'selected': ''}>Players ({ players.length })</Link>
        </nav>
        <Routes>
          {/* <Route path='/' element={ <Home />} /> */}
          <Route path='/players' element={ <Players players={ players } />} />
          <Route path='/players/:id' element={ <Player players={ players } /> } />
        </Routes>
      </div>
    </>
  )
}

export default App
