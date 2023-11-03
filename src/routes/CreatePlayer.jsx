import Header from "../components/Header";
import PlayerForm from "../components/PlayerForm";

const CreatePlayer = () => {
    return (
        <>
            <Header />
            <div className="m-2">
                <h3 className="text-xl uppercase font-bold text-red-950">Create a New Player</h3>
                <PlayerForm />
            </div>
        </>
    ); 
}

export default CreatePlayer;