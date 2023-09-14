import { Box } from "@chakra-ui/react";
import MainNav from "./MainNav";

function RoadmapPage() {
  <MainNav />;
  const iframeLink =
    "https://excalidraw.com/#room=70caf16c805e5303f46f,0SGiZfRZiEXvojHstMt7tg";
  return (
    <Box width="100%" height="100vh" padding="1rem">
      <iframe
        title="Roadmap"
        src={iframeLink}
        width="100%"
        height="100%"
        frameBorder="0"
      ></iframe>
    </Box>
  );
}

export default RoadmapPage;
