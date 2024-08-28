import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import styles from './styles';


const MyButton = ({screen, name}) => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={navigation.navigate({screen})}>
       <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;