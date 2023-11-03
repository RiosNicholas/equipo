import Header from "../components/Header";
import PlayerForm from "../components/PlayerForm";

const CreatePlayer = () => {
    return (
        <>
            <Header />
            <div className="">
                <h3>Create a New Player</h3>
                <PlayerForm />
            </div>
        </>
    ); 
}

export default CreatePlayer;