import { Route, Routes } from "react-router-dom";
import Signin from "./pages/signin";
import VideoFile from "./pages/file";
import Landing from "./pages/landing";
import Home from "./pages/home";
import Singlevideo from "./pages/singlevideo";

const RouteSwitch = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/file" element={<VideoFile />} />
        <Route path="/video" element={<Singlevideo />} />
      </Routes>
    </>
  );
};

export default RouteSwitch;
