import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
