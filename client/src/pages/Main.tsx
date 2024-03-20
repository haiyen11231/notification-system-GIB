import Header from "../components/Header";
import Message from "../components/Message";
import "../styles/pages/Main.css";

const Main = () => {
    return (
        <div className="container">
            <Header></Header>
            <Message content="Notification title. Example text, example text, example text, example text, example text"></Message>
        </div>
    );
};

export default Main;
