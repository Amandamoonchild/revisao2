import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Home() {
const navigation = useNavigation();
  return (
    <View>
      <Text>Home screen</Text>
      <TouchableOpacity onPress= { () => navigation.navigate("Totoro")}>
        <Text>Go to Totoro!</Text>
      </TouchableOpacity>
    </View>
  )
}