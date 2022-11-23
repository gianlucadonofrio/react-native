import React from 'react';
import {View, Text} from 'react-native';

export const HolaMundo = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 45,
        }}>
        Hola Mundo
      </Text>
    </View>
  );
};
