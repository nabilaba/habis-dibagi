import { Stack, Container, Heading, Flex, Text } from "@chakra-ui/react";
import Rumus from "./Rumus";

function App() {
  return (
    <Stack bgGradient="linear(to-b, #FFE3F1, #FFFFFF)" minH="100vh">
      <Container maxW="7xl">
        <Heading>Habis Dibagi</Heading>
        <Text>
          Bilangan bulat antara 1 sampai 200 yang habis dibagi 3 atau 7 dan tidak habis dibagi 5 adalah : {Rumus(1, 200, 1).join(", ")}
        </Text>
        <Text>Jumlahnya adalah : {Rumus(1, 200, 1).length}</Text>
      </Container>
    </Stack>
  );
}

export default App;
