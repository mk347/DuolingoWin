import { View, Text, Pressable } from 'react-native';
import React from 'react';
import styles from './styles';

const Button = () => {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.text}>Press Me</Text>
    </Pressable>
  )
}

export default Button