
import { SafeAreaView, ScrollView, Switch, Alert, StyleSheet } from 'react-native';
import { TextInput,Text, RadioButton, Button } from 'react-native-paper';
import NumericInput from 'react-native-numeric-input';
import styles from './styles/styles.js';
import { useState } from 'react';



export default function App() {

  const [bottles, setBottles] = useState(0);
  const [hours, setHours] = useState(0);
  const [weight, setWeight] = useState(0);
  const [gender, setGender] = useState(0);
  const [result, setResult] = useState(0);
 
 
 
 
  
  const alcometerMagic = () => {
    if (weight === 0) {
      Alert.alert('ERROR! WEIGHT CANNOT BE EMPTY');
      return;
    }

    const litres = bottles*0.33;

    const grams = litres * 8 * 4.5;
  
    const burn = weight / 10;
  
    const grams_left = Math.max(0, grams - burn * hours);
    const result =  (grams_left / (weight * gender)).toFixed(2);
    
  setResult(result) 
   };

   const getColor = (result) => {
    if (result < 0.5) {
      return '#09ff00';
    } else if (result < 1) {
      return '#fff700';
    } else {
      return '#ff0000';
    }
  }


  return (
    <SafeAreaView style={styles.container}>
    <ScrollView >
      
      
     
        <Text style={styles.heading}>ALCOMETER A'LA KASPERI</Text>
        <Text style={styles.label}>Weight:</Text>
        <TextInput 
          keyboardType='number-pad'
          value={weight}
          onChangeText={w => setWeight(w)}
          minValue={0}
        />
        
        <Text style={styles.label}>Bottles</Text>
        <NumericInput
          value={bottles}
          onChange={ b => setBottles(b)}
          minValue={0}
        />

        <Text style={styles.label}>Hours</Text>
         <NumericInput 
          value={hours}
          onChange={ h => setHours(h)}
           minValue={0}
        />
        <RadioButton.Group 

         value={gender} onValueChange= {v => setGender(v)}
         >
          <RadioButton uncheckedColor='black' value="0.6"/>
          <Text style={styles.label}>Female</Text>
          <RadioButton  uncheckedColor='black' value="0.7"/>
          <Text style={styles.label}>Male</Text>
        </RadioButton.Group>
      
        <Button style={styles.button} mode={'contained'} onPress={alcometerMagic}>
        CALCULATE
        </Button>
        
        <Text style={[styles.result, {color: getColor(result)}]}>{result}</Text>
    </ScrollView>
    </SafeAreaView>
   
  );
}

