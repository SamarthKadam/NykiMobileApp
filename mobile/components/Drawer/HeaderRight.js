import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function HeaderRight() {

  return (
    <View style={styles.container}>
      <Pressable  android_ripple={{color:'rgba(0, 0, 0, 0.2)'}}>
        <View style={{overflow:'hidden'}}>
          <Icon size={26} color="black" name="search" />
        </View>
      </Pressable>
      <Pressable  android_ripple={{color:'rgba(0, 0, 0, 0.2)'}}>
        <View style={styles.button}>
          <Icon size={26} color="black" name="shopping-bag" />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '40%',
    height:'100%',
  },
  button: {
    borderRadius: 50, // Half of the width/height for a circle effect
    padding: 3,
    overflow: 'hidden', // Ensure ripple effect stays within the bounds of the button
  },
});