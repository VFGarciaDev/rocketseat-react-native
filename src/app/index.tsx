import { Container } from "@/components/Container"
import { Stack } from "expo-router"

import { Text } from "react-native"

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: "Home" }} />
      <Container>
        <Text className="text-red-400">OIE</Text>
      </Container>
    </>
  )
}
