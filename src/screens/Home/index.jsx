import { View, Text, TouchableOpacity } from 'react-native'

import styles from './styles';
import MyButton from '../../components/MyButton';
import MyTitle from '../../components/MyTitle';

export default function Home() {
  return (
    <View style={styles.container}>
      <MyTitle title={'Home Page'}></MyTitle>
      <MyButton screen={'Totoro'}></MyButton>
    </View>
  )
}