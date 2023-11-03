import { useEffect, useState } from "react";
import { supabase } from "../client";
import { useParams } from 'react-router-dom';

const UpdatePlayerForm = () => {
    const {id} = useParams();
    const positions = ['GK', 'LB', 'CB', 'RB', 'CDM', 'CM', 'CAM', 'LM', 'RM', 'LW', 'RW', 'CF', 'ST'];
    const [player, setPlayer] = useState({name: "", nationality: "", position: ""});

    useEffect(() => {
        const getPlayer = async () => {
            const {data, error} = await supabase
                .from('Equipo')
                .select()
                .eq('id', id);

            console.log(data[0].id);
            setPlayer({name: data[0].name, nationality: data[0].nationality, position: data[0].position});
        }

        getPlayer();
    }, [])

    const updatePlayer = async (event) => {
        event.preventDefault();

        await supabase
            .from('Equipo')
            .update({name: player.name, nationality: player.nationality, position: player.position})
            .eq('id', id);
        window.location = "/SquadInfo";
    }

    const deletePlayer = async (event) => {
        event.preventDefault();

        await supabase
            .from('Equipo')
            .delete()
            .eq('id', id);
        window.location = "/squad-info";
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        console.log("Name: ", name, " value: ", value);
        setPlayer((prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

  return (
        <div>
            <form>
                <div>
                    <label htmlFor="name" className="font-semibold text-lg underline">
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
                
                <div>
                    <label htmlFor="nationality" className="font-semibold text-lg underline">
                        Nationality
                    </label>
                    <input 
                        type="text" 
                        id="nationality" 
                        name="nationality" 
                        value={player.nationality} 
                        onChange={handleChange}
                        className="text-black bg-white rounded w-3/4 flex"
                    />
                </div>
                    
  
                <div>
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
            <button type="submit" onClick={updatePlayer}>Update</button>
            <button type="submit" onClick={deletePlayer}>Delete</button>
        </div>
    );
};
  
export default UpdatePlayerForm;
    