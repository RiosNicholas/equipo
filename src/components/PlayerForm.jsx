import { useState } from "react";
import { supabase } from "../client";

const PlayerForm = () => {
    const positions = ['GK', 'LB', 'CB', 'RB', 'CDM', 'CM', 'CAM', 'LM', 'RM', 'LW', 'RW', 'ST'];
    const [player, setPlayers] = useState({name: "", nationality: "", position: ""});

    const handleChange = (event) => {
        const {name, value} = event.target;
        console.log("Name: ", name, " value: ", value);
        setCrewmate( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const createPlayer = async (event) => {
        event.preventDefault(); 
        await supabase
            .from('Equipo')
            .insert({
                name: player.name, 
                nationality: player.nationality, 
                position: player.position 
            })
            .select();

            window.location = "/SquadInfo";   
    }

    return (
        <div>
            <form>
                <div>
                    <label for="name">Name</label> <br />
                    <div className="card">
                        <input type="text" id="name" name="name" value={player.name} onChange={handleChange}/>
                    </div>
                </div>
                
                <div>
                    <label for="nationality">Age</label><br />
                    <div className="card">
                        <input type="text" id="nationality" name="nationality" value={player.nationality} onChange={handleChange}/>
                    </div>
                </div>
                <div>
                    <label for="position">Position</label><br />
                    <div className="card">
                        {positions.map((position) => (
                            <li key={position}>
                                <input 
                                    id="position"
                                    value={position}
                                    name="position"
                                    type="radio"
                                    onChange={handleChange}
                                />
                                {position}
                            </li>
                        ))}
                    </div>
                </div>
            </form>
            <button type="submit" onClick={createPlayer}>Create</button>
        </div>
    );
  };
  
  export default PlayerForm;