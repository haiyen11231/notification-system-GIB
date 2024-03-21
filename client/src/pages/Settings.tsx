import { useState } from "react";
import Header from "../components/Header";
import SettingsSection from "../components/SettingsSection";
import "../styles/pages/Settings.css";

const positions = [
    { label: "Position 1", value: "position-1" },
    { label: "Position 2", value: "position-2" },
    { label: "Position 3", value: "position-3" },
    { label: "Position 4", value: "position-4" },
];

const Settings = () => {
    const [notificationCount, setNotificationCount] = useState(
        localStorage.getItem("notificationCount") || "3"
    );
    const [notificationPosition, setNotificationPosition] = useState(
        localStorage.getItem("notificationPosition") || "position 1"
    );
    const [notificationDisappearTime, setNotificationDisappearTime] = useState(
        localStorage.getItem("notificationDisappearTime") || "7000"
    );

    const handleClick = () => {
        localStorage.setItem("notificationCount", notificationCount);
        localStorage.setItem("notificationPosition", notificationPosition);
        localStorage.setItem(
            "notificationDisappearTime",
            notificationDisappearTime
        );
    };

    // const handleNotificationDisappearTime = (e: any) => {
    //     const inputValue = e.target.value;
    //     // Concatenate "000" to the input value and set it
    //     setNotificationDisappearTime(inputValue + "000");
    // };

    return (
        <div className="container">
            <Header></Header>
            <SettingsSection title="Notification count">
                <input
                    onChange={(e) => setNotificationCount(e.target.value)}
                    type="number"
                    className="number-input"
                    value={notificationCount}
                    placeholder="0"
                />
            </SettingsSection>
            <SettingsSection title="Notification position">
                <div className="notification-position__list">
                    {positions.map((position, index) => {
                        return (
                            <div
                                className="notification-position__item"
                                key={index}
                            >
                                <label>{position.label}</label>
                                <input
                                    type="radio"
                                    value={position.value}
                                    name="position"
                                    onChange={(e) => {
                                        setNotificationPosition(e.target.value);
                                    }}
                                    checked={
                                        notificationPosition === position.value
                                    }
                                />
                            </div>
                        );
                    })}
                </div>
            </SettingsSection>
            <SettingsSection title="Notification disappear time">
                <div className="notification-disappear-time">
                    <input
                        className="number-input"
                        type="number"
                        placeholder="0"
                        value={notificationDisappearTime}
                        onChange={(e) =>
                            setNotificationDisappearTime(e.target.value)
                        }
                        // onChange={handleNotificationDisappearTime} // Updated event handler
                    ></input>
                    <span>sec</span>
                </div>
            </SettingsSection>
            <button className="btn-submit" onClick={handleClick}>
                Submit
            </button>
        </div>
    );
};

export default Settings;
