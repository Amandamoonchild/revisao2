import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'


export default function Totoro() {
    const navigation = useNavigation();
  return (
    <View>
      <Text>My neighbor Totoro</Text>
      <TouchableOpacity onPress= { () => navigation.navigate("Home")}>
        <Text>Back to Home!</Text>
      </TouchableOpacity>
    </View>
  )
}