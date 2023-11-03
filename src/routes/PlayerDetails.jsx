import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../client";
import { useNavigate } from "react-router-dom";

const PlayerDetails = () => {
 const {id} = useParams();
    const [player, setPlayer] = useState({id: "", name: "", nationality: "", position: ""});

    useEffect(() => {
        const getPlayer = async () => {
            // Get the crewmate associated with the id
            const {data, error} = await supabase
                .from('Equipo')
                .select()
                .eq('id', id);
            console.log(data[0].color);
            setPlayer({
                id: data[0].id, 
                name: data[0].name, 
                nationality: data[0].nationality, position: data[0].position
            });
        }

        getPlayer();
    }, []);

    let navigate = useNavigate(); 

    const moveToEditPlayer = (event, id) =>{
        let path = "/UpdatePlayer/" + id; 
        navigate(path);
    }

    return (
        <div className="">
            <h2>Player: {player.name}</h2>
            <h3>Nationality: {player.nationality}</h3>
            <h3>Position: {player.position}</h3>
            <button onClick={(event) => moveToEditPlayer(event, player.id)}>Update Player</button>
        </div>
    );
};

export default PlayerDetails;