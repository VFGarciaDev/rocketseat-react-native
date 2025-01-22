import { SafeAreaView, View } from "react-native"

export function Container({ children }: { children: React.ReactNode }) {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 items-center bg-blue-400 px-5">{children}</View>
    </SafeAreaView>
  )
}
