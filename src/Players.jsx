import { Link } from "react-router-dom";

const Players = ({ players })=> {
  console.log(players)
  return (
    <div>
      <h1>Welcome to the 2023 Puppy Bowl!</h1>
      <h3>Please click a player to see more details!</h3>
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