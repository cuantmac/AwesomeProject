import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export const MyCom = ({title, onClick}) => {
  const lintInnerClick = () => {
    if (onClick) onClick('事件发送');
  };
  return (
    <TouchableOpacity onPress={lintInnerClick} style={styles.container}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
  },
});
