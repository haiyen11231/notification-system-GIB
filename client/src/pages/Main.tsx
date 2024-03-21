import { useState, useEffect } from "react";
import Header from "../components/Header";
import Message from "../components/Message";
import "../styles/pages/Main.css";

const Main = () => {
    const [messages, setMessages] = useState<any[]>([]);
    const [displayedMessages, setDisplayedMessages] = useState<any[]>([]);
    const notificationDisappearTime = parseInt(
        localStorage.getItem("notificationDisappearTime") + "000" || "7000"
    );

    const notificationCount = parseInt(
        localStorage.getItem("notificationCount") || "3"
    );
    const position =
        localStorage.getItem("notificationPosition") || "position-1";

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

    useEffect(() => {
        const newDisplayedMessages = messages.slice(0, notificationCount);
        setDisplayedMessages(newDisplayedMessages);

        const timeouts: NodeJS.Timeout[] = [];
        newDisplayedMessages.forEach((message, index) => {
            const timeout = setTimeout(() => {
                setDisplayedMessages((prevMessages) =>
                    prevMessages.filter((_, i) => i !== index)
                );
            }, notificationDisappearTime);
            timeouts.push(timeout);
        });

        return () => {
            timeouts.forEach((timeout) => clearTimeout(timeout));
        };
    }, [messages, notificationCount, notificationDisappearTime]);

    return (
        <div className="container">
            <Header />
            <div className={`message-list ${handlePosition()}`}>
                {displayedMessages.map((message) => (
                    <Message
                        key={message.msg_id}
                        content={message.msg}
                        timeout={notificationDisappearTime}
                        setMessages={setMessages}
                    />
                ))}
            </div>
        </div>
    );
};

export default Main;
