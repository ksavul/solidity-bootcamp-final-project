import { Box, List, ListItem, Link } from "@chakra-ui/react";

function MainNav() {
  return (
    <Box as="nav" backgroundColor="darkgreen" padding="1rem 2rem">
      <List display="flex" justifyContent="space-between" color="white">
        <ListItem>
          <Link
            href="#"
            padding="0.5rem"
            _hover={{ textDecoration: "underline", color: "limegreen" }} // Lighter green on hover
          >
            Home
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="#"
            padding="0.5rem"
            _hover={{ textDecoration: "underline", color: "limegreen" }} // Lighter green on hover
          >
            About Us
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="#"
            padding="0.5rem"
            _hover={{ textDecoration: "underline", color: "limegreen" }} // Lighter green on hover
          >
            Roadmap
          </Link>
        </ListItem>
      </List>
    </Box>
  );
}

export default MainNav;
