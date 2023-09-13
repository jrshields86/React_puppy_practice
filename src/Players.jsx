import { Link } from "react-router-dom";

const Players = ({ players })=> {
  console.log(players)
  return (
    <div>
      <h1>Players</h1>
      <ul>
        {
          players.map( player => {
            return (
              <li key={ player.id }>
                <Link to={`/players/${ player.id }`}>
                { player.name }
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default Players;