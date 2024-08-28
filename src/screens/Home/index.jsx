import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './styles';

export default function Home() {
const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home screen</Text>
      <TouchableOpacity onPress= { () => navigation.navigate("Totoro")}>
        <Text style={styles.text}>Go to Totoro!</Text>
      </TouchableOpacity>
    </View>
  )
}