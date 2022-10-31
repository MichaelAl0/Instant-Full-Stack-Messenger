import { Button, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <Button onClick={() => toggleColorMode()} pos="absolute" top="0" right="0" m="1rem" >
        {" "}
        {colorMode === "dark" ? <SunIcon color="yellow.400" /> : <MoonIcon color="blue.700" />}{" "}
      </Button>
    </div>
  );
};

export default ToggleColorMode;
