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
            <form className="bg-orange-100 text-black rounded p-3 m-2">
                <div className="flex flex-col text-center items-center justify-center p-1">
                    <label for="name" className="font-semibold text-lg underline">
                        Name
                    </label> 
                        <input 
                            type="text"
                            id="name" 
                            name="name" 
                            value={player.name} 
                            onChange={handleChange}
                            className="text-black bg-white rounded w-3/4 flex"
                        />
                </div>
                
                <div className="flex flex-col text-center items-center justify-center p-1">
                    <label for="nationality" className="font-semibold text-lg underline">
                        Age
                    </label>
                    <input 
                        type="text" 
                        id="nationality" 
                        name="nationality" 
                        value={player.nationality} 
                        onChange={handleChange}
                        className="bg-white text-black rounded w-3/4"
                    />
                </div>

                <div className="flex flex-col text-center items-center justify-center p-1">
                    <label for="position" className="font-semibold text-lg underline">
                        Position
                    </label>
                    <div className="p-1 pb-4 list-none">
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

            <button type="submit" onClick={createPlayer} className="m-1 bg-blue-800 hover:bg-blue-900">
                Create
            </button>
        </div>
    );
  };
  
  export default PlayerForm;