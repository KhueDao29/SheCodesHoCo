import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

const TextConfirmPassword = () => {
  const [text, onChangeText] = React.useState();

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder='Xác nhận mật khẩu'
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    width: 300,
    marginTop: 45,
    marginBottom: -20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#FEF3E7',
  },
});

export default TextConfirmPassword;