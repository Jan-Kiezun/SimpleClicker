import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

const Przycisk = (props:any) => {
  return (
    <View style={styles.buttonStyle}>
      <Button onPress={props.funkcja} title={props.opis} color="#636" />
    </View>
  )
}

export default Przycisk

const styles = StyleSheet.create({
    buttonStyle:{
        width:110,
        margin:5,
    }
})