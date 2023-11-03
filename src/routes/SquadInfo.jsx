import { supabase } from "../client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const SquadInfo = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const fetchPlayers = async () => {
          const {data} = await supabase
            .from('Equipo')
            .select()
            .order('created_at', { ascending: true })
   
            setPlayers(data)
        }
        fetchPlayers();
    }, []);

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = "/CreatePlayer"; 
        navigate(path);
    }
    const moveToEditPlayer = (event, id) =>{
        let path = "/UpdatePlayer/" + id; 
        navigate(path);
    }

    return (
        <div>
            <Header />
            <h3 className="text-xl uppercase font-bold text-red-950">Squad Info</h3>
            <div>
                {players != null && players.length > 0 ? (
                    players.map((player,index) => 
                        <div>
                            <Link to={'/playerDetails/' + player.id}>
                            <img className="" src='src/assets/player_outline.png' />
                            </Link>
                            <h3>
                                Name: <span className="">{player.name}</span>
                            </h3>
                            <h3>
                                Nationality: <span className="">{player.nationality}</span>
                            </h3>
                            <h3>
                                Position: <span className="">{player.position}</span>
                            </h3>

                            <button onClick={(event) => moveToEditCrewmate(event, player.id)}>Update Player</button>
                        </div>
                        
                )): 
                    <div className=""> 
                        <h2 className="bg-orange-100 text-black rounded p-12 m-2 italic">
                            No players in your squad!
                        </h2>
                        <button onClick={routeChange} className="hover:bg-neutral-950 m-1">
                            Add a Player
                        </button>
                    </div>
                }
            </div>
        </div>
    );
  };
  
  export default SquadInfo;