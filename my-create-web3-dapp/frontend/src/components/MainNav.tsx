import { Box, List, ListItem } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "./MainNav.css";

function MainNav() {
  const linkStyle = {
    padding: "0.5rem",
    color: "white",
    textDecoration: "none",
    transition: "color 0.3s",
  };

  return (
    <Box as="nav" backgroundColor="darkgreen" padding="1rem 2rem">
      <List display="flex" justifyContent="space-between" color="white">
        {[
          { route: "/", label: "Home" },
          { route: "/about", label: "About Us" },
          { route: "/roadmap", label: "Roadmap" },
          { route: "/marketplace", label: "Marketplace" },
          { route: "/play", label: "Play" },
          { route: "/dashboard", label: "My Profile" },
        ].map(({ route, label }) => (
          <ListItem key={route}>
            <RouterLink to={route} style={linkStyle} className="nav-link">
              {label}
            </RouterLink>
          </ListItem>
        ))}
        <ListItem>
          <ConnectButton />
        </ListItem>
      </List>
    </Box>
  );
}

export default MainNav;
