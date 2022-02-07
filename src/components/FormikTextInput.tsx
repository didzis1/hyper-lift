import React, { useContext } from 'react';
import { KeyboardTypeOptions, StyleSheet, View } from 'react-native';
import { TextInput, Text, useTheme } from 'react-native-paper';
import { useField } from 'formik';
import globalStyles from '../globalStyles';
import PreferenceContext from '../contexts/PreferenceContext';

type FormikTextInputProps = {
  label?: string;
  name: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  left?: JSX.Element;
  right?: JSX.Element;
  disabled?: boolean;
};

const FormikTextInput = ({ label, name, ...props }: FormikTextInputProps) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;
  const { isDarkTheme } = useContext(PreferenceContext);
  const { colors } = useTheme();

  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[
          globalStyles.input,
          {
            backgroundColor: isDarkTheme ? colors.accent : '#FFFFFF',
            borderColor: 'rgba(0, 0, 0, 0.3)'
          }
        ]}
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        dense={true}
        placeholderTextColor='#bccbd1'
        underlineColor='transparent'
        theme={{ colors: { primary: '#FE5E41' } }}
        {...props}
      />
      {showError && <Text style={styles.error}>{showError}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    paddingVertical: 5
  },
  error: {
    color: '#fc2c08'
  }
});

export default FormikTextInput;
