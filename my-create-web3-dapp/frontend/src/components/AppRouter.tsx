// AppRouter.tsx
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import GamePage from "./GameGrid";
import NewUserPage from "./NewUserPage";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/new-user" element={<NewUserPage />} />
        {/* Add more routes for additional pages */}
      </Routes>
    </Router>
  );
}

export default AppRouter;
