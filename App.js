import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Platform, SafeAreaView, StyleSheet, View} from 'react-native';
import List from './components/List';
import { useForm } from 'react-hook-form';
import {useMedia} from './hooks/ApiHooks'


const App = () => {
  const {uploadNewCoffee} = useMedia();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    await uploadNewCoffee(data)
    window.location.reload(false);
  };
  //const onSubmit = (data) => console.log(data);
  //{...register("weight", {valueAsNumber: true})} placeholder="Packet weight in grams" />*/
  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <View style={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>

      <input {...register("name")} placeholder="Cofee name" />

      <input type="number"
        {...register("weight", {
          valueAsNumber: true,
        })} placeholder="Packet weight in grams"
        />
      
      <input {...register("price", {
          valueAsNumber: true,
        })} placeholder="Packet price in cents"/>
        
        <select {...register("roast_level", {
          valueAsNumber: true,
        })}>
          <option value="">Select coffee roast level...</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <input type="submit" />
      </form>
        <List />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },

  droidSafeArea: {
    flex: 1,
    backgroundColor: '#ccc',
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },
});

export default App;
