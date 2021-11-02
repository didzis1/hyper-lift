import React from 'react';
import { KeyboardTypeOptions, StyleSheet, Text, View } from 'react-native';
import { TextInput, useTheme } from 'react-native-paper';
import { useField } from 'formik';

type FormikTextInputProps = {
  label: string;
  name: string;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
};

const FormikTextInput = ({ label, name, ...props }: FormikTextInputProps) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;
  const theme = useTheme();

  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.input}
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        dense={true}
        {...props}
      />
      {showError && (
        <Text style={[{ color: theme.colors.error }]}>{showError}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 5
  },
  label: {
    paddingVertical: 5
  }
});

export default FormikTextInput;
