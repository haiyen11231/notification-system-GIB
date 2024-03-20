import "../styles/components/SettingsSection.css";

const SettingsSection = ({ title, children }: any) => {
    return (
        <div className="settings-section">
            <p className="settings-section__title">{title}</p>
            <div className="settings-section__input">{children}</div>
        </div>
    );
};

export default SettingsSection;
