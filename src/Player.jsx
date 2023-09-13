import { Link, useParams } from "react-router-dom";

const Player = ({ players })=> {
  const params = useParams();
  const id = params.id*1;  
  
  const player = players.find( player => player.id === id);

  if(!player){
    return null;
  }
  return (
    <div>
      <header>
        <h1>Details for Doggie: </h1>
        <h2>{ player.name }</h2>
      </header> 
        <h3>{ player.breed }</h3>
        <h4> Status: { player.status }</h4>
        <Link to='/players'>
          Back to All Players
        </Link>
    </div>
  );
};

export default Player;
