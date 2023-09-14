// AppRouter.tsx
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import NewUserPage from "./NewUserPage";
import MyProfilePage from "./MyProfilePage";
import RoadmapPage from "./RoadmapPage";
// import AboutPage from "./AboutPage";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<MyProfilePage />} />
        <Route path="/new-user" element={<NewUserPage />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
        {/* Add more routes for additional pages */}
      </Routes>
    </Router>
  );
}

export default AppRouter;
