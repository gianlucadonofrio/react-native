import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useState} from 'react';
import {Fab} from '../components/Fab';
export const ContadorScreen = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {count}</Text>
      <Fab title="+1" onPress={() => setCount(count + 1)} />

      <Fab
        title="-1"
        onPress={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
        position="bl"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 45,
    top: -15,
  },
});
