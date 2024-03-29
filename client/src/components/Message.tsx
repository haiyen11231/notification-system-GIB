import { useEffect, useState } from "react";
import "../styles/components/Message.css";

interface MessageProps {
    content: string;
    timeout: number;
    setMessages: React.Dispatch<React.SetStateAction<any[]>>;
}

const Message: React.FC<MessageProps> = ({ content, timeout, setMessages }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            setMessages((prevMessages: any) =>
                prevMessages.filter((message: any) => message.msg !== content)
            );
        }, timeout);

        return () => clearTimeout(timer);
    }, [content, timeout, setMessages]);

    const handleClick = () => {
        setIsVisible(false);
    };

    return isVisible ? (
        <div className="message">
            <p className="message__content">{content}</p>
            <button className="message__btn" onClick={handleClick}>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.9393 12L5.11109 6.17175C5.03298 6.09364 5.03298 5.96701 5.11109 5.8889L5.8889 5.11109C5.96701 5.03298 6.09364 5.03298 6.17175 5.11109L12 10.9393L17.8282 5.11109C17.9063 5.03298 18.033 5.03298 18.1111 5.11109L18.8889 5.8889C18.967 5.96701 18.967 6.09364 18.8889 6.17175L13.0607 12L18.8889 17.8282C18.967 17.9063 18.967 18.033 18.8889 18.1111L18.1111 18.8889C18.033 18.967 17.9063 18.967 17.8282 18.8889L12 13.0607L6.17175 18.8889C6.09364 18.967 5.96701 18.967 5.8889 18.8889L5.11109 18.1111C5.03298 18.033 5.03298 17.9063 5.11109 17.8282L10.9393 12Z"
                        fill="white"
                        fill-opacity="0.6"
                    />
                </svg>
            </button>
        </div>
    ) : null;
};

export default Message;
