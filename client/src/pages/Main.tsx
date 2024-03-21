import { useState, useEffect } from "react";
import Header from "../components/Header";
import Message from "../components/Message";
import "../styles/pages/Main.css";

const Main = () => {
    const [messages, setMessages] = useState<any[]>([]);
    const position = localStorage.getItem("notificationPosition")
        ? localStorage.getItem("notificationPosition")
        : "position-1";
    const notificationDisappearTime = localStorage.getItem(
        "notificationDisappearTime"
    );

    const handlePosition = () => {
        if (position === "position-1") {
            return "position-1";
        } else if (position === "position-2") {
            return "position-2";
        } else if (position === "position-3") {
            return "position-3";
        } else {
            return "position-4";
        }
    };

    useEffect(() => {
        const eventSource = new EventSource("http://localhost:9000/events");

        eventSource.onmessage = (event) => {
            const newMessage = JSON.parse(event.data);
            setMessages((prevMessages: any) => [...prevMessages, newMessage]);
        };

        return () => {
            eventSource.close();
        };
    }, []);

    return (
        <div className="container">
            <Header></Header>
            <div className={`message-list ${handlePosition()}`}>
                {messages.map((message) => {
                    return (
                        <Message
                            key={message.msg_id}
                            content={message.msg}
                            timeout={notificationDisappearTime}
                        ></Message>
                    );
                })}
            </div>
        </div>
    );
};

export default Main;
