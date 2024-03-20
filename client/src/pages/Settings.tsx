import Header from "../components/Header";
import "../styles/pages/Settings.css";
import SettingsSection from "../components/SettingsSection";

const positions = [
    { label: "Position 1", value: "position 1" },
    { label: "Position 2", value: "position 2" },
    { label: "Position 3", value: "position 3" },
    { label: "Position 4", value: "position 4" },
];

const Settings = () => {
    const handleChangeNotificationCount = (e: any) => {
        localStorage.setItem("notificationCount", e.target.value);
    };
    return (
        <div className="container">
            <Header></Header>
            <SettingsSection title="Notification count">
                <input
                    onChange={(e) => handleChangeNotificationCount(e)}
                    type="number"
                    className="number-input"
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
                    ></input>
                    <span>sec</span>
                </div>
            </SettingsSection>
        </div>
    );
};

export default Settings;
