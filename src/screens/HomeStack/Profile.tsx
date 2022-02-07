import React, { useState, useContext } from 'react';
import { Formik } from 'formik';
import {
  ActionSheetIOS,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Button, Subheading, useTheme } from 'react-native-paper';

import { HomeNavProps } from './HomeParamList';
import useCurrentUser from '../../hooks/useCurrentUser';
import useLogout from '../../hooks/useLogout';

import Loading from '../../components/Loading';
import FormikTextInput from '../../components/FormikTextInput';

import { LiftingType, UpdateUserType } from '../../types/UserType';
import PreferenceContext from '../../contexts/PreferenceContext';
import { Picker } from '@react-native-picker/picker';
import useUpdateProfile from '../../hooks/useUpdateProfile';

const liftingTypes: LiftingType[] = [
  'Powerlifting',
  'Bodybuilding',
  'Crossfit',
  'Olympic Weightlifting',
  'Aerobics'
];

const Profile: React.FC<HomeNavProps<'Profile'>> = ({}) => {
  const { isDarkTheme } = useContext(PreferenceContext);
  const { colors } = useTheme();
  const { logout } = useLogout();
  const { currentUser, loading } = useCurrentUser();
  const { updateProfile } = useUpdateProfile();
  const [selectedLiftingType, setSelectedLiftingType] =
    useState<LiftingType | null>(
      currentUser?.liftingType ? currentUser?.liftingType : null
    );

  if (loading || !currentUser) return <Loading />;

  const showiOSActionSheet = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', ...liftingTypes],
        cancelButtonIndex: 0,
        title: 'Select your lifting type'
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          // cancel action
          return null;
        }

        return setSelectedLiftingType(liftingTypes[buttonIndex - 1]);
      }
    );

  const handleUpdateProfile = async (values: UpdateUserType) => {
    try {
      console.log(values);
      await updateProfile(values);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Subheading style={{ textAlign: 'center' }}>
            Feel free to update your profile however you want! Your information
            is visible to you and you only.
          </Subheading>
        </View>
        <View style={{ flex: 1 }}>
          <Formik
            initialValues={{
              firstName: currentUser.firstName,
              lastName: currentUser.lastName,
              age: String(currentUser.age) ?? '',
              liftingType: currentUser.liftingType ?? ''
            }}
            validateOnChange={false}
            onSubmit={(values) =>
              handleUpdateProfile({
                ...values,
                age: Number(values.age),
                liftingType: selectedLiftingType
              })
            }>
            {({ handleSubmit }) => (
              <View>
                <FormikTextInput
                  name='firstName'
                  placeholder={currentUser.firstName}
                  label='First Name'
                />
                <FormikTextInput
                  name='lastName'
                  placeholder={currentUser.lastName}
                  label='Last Name'
                />

                <FormikTextInput
                  name='age'
                  keyboardType='number-pad'
                  placeholder={
                    currentUser.age ? String(currentUser.age) : 'Enter your age'
                  }
                  label='Age'
                />

                {Platform.OS === 'ios' ? (
                  <View>
                    <Button
                      onPress={showiOSActionSheet}
                      mode='contained'
                      uppercase={false}>
                      {selectedLiftingType ? `Selected: something}` : 'Select'}
                    </Button>
                  </View>
                ) : (
                  <>
                    <Text style={styles.label}>Lifting Type</Text>
                    <View
                      style={{
                        borderWidth: 1,
                        backgroundColor: isDarkTheme
                          ? colors.accent
                          : '#FFFFFF',
                        borderColor: 'rgba(0, 0, 0, 0.3)',
                        borderRadius: 5,
                        marginBottom: 15
                      }}>
                      <Picker
                        style={[
                          styles.picker,
                          {
                            color: colors.text
                          }
                        ]}
                        mode='dialog'
                        selectedValue={selectedLiftingType}
                        onValueChange={(value) =>
                          setSelectedLiftingType(value)
                        }>
                        {liftingTypes.map((liftingType) => (
                          <Picker.Item
                            key={liftingType}
                            label={liftingType}
                            value={liftingType}
                          />
                        ))}
                      </Picker>
                    </View>
                  </>
                )}

                <Button
                  mode='contained'
                  dark={true}
                  uppercase={false}
                  onPress={handleSubmit}>
                  Update Profile
                </Button>
              </View>
            )}
          </Formik>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Button
          mode='contained'
          uppercase={false}
          style={styles.logout}
          onPress={() => logout()}>
          Log out
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20
  },
  logout: {
    width: '50%',
    backgroundColor: '#E76F51',
    alignSelf: 'center'
  },
  picker: {
    paddingVertical: 20
  },
  label: {
    paddingVertical: 5
  }
});

export default Profile;
