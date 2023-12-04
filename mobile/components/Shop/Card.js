import { View, Text, StyleSheet,Image} from 'react-native'
import React from 'react'

export default function Card({text,src}) {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri:src}}></Image>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        height:200,
        width:130,
        marginHorizontal:4,
    },
    text:{
        color:'black',
        marginTop:6,
        fontSize:14,
        fontFamily:'Roboto-Medium'
    },
    img:{
        borderRadius:10,
        height:'75%',
        width:'100%'
    }
})