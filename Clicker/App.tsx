import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import Przycisk from './components/Przycisk';
import Licznik from './components/Licznik';
import {useState} from 'react';

export default function App() {
  const [count, setcount] = useState(29292929292)
  const onClickAdd=()=>setcount(count+1)
  const onClickDub=()=>setcount(2*count)
  const onClickReset=()=>setcount(0)

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <Licznik wartosc={count}/>
        <View style={styles.buttons}>
          <Przycisk funkcja={onClickAdd} opis="Plus 1" />
          <Przycisk funkcja={onClickReset} opis="= 0 =" />
          <Przycisk funkcja={onClickDub} opis="Razy 2" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'whitesmoke',
  },
  container: {
    alignItems:'center',
    justifyContent:'space-between',
    width:300,
    height:200,
  },
  buttons:{
    display:"flex",
    flexDirection:"row",

  }
});
