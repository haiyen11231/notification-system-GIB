import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Settings from "./pages/Settings";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/settings" element={<Settings />}></Route>
            </Routes>
        </Router>
    );
};

export default App;
