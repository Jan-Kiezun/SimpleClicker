import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Licznik = (props:any) => {
  return (
    <View>
      <Text numberOfLines={2} style={styles.counter}>{props.wartosc}</Text>
    </View>
  )
}

export default Licznik

const styles = StyleSheet.create({
  counter:{
    fontSize:50,
  }
})