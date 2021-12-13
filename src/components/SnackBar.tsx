import React, { useEffect, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { Snackbar } from 'react-native-paper';
import { HomeParamList } from '../screens/HomeStack/HomeParamList';

type SnackBarProps = {
  navigation: NativeStackNavigationProp<HomeParamList, 'MaxLifts' | 'Routine'>;
  route: RouteProp<HomeParamList, 'MaxLifts' | 'Routine'>;
};

const SnackBar: React.FC<SnackBarProps> = ({ navigation, route }) => {
  const [snackBarVisible, setSnackBarVisible] = useState<boolean>(false);

  useEffect(() => {
    if (route.params?.snackBarMessage) {
      setSnackBarVisible(true);
    } else {
      setSnackBarVisible(false);
    }
  }, [route.params?.snackBarMessage]);

  return (
    <Snackbar
      onDismiss={() => navigation.setParams({ snackBarMessage: '' })}
      style={{
        backgroundColor: route.params?.snackBarError ? '#E76F51' : '#2A9D8F'
      }}
      action={{
        label: 'Dismiss',
        onPress: () => setSnackBarVisible(false)
      }}
      visible={snackBarVisible}>
      {route.params?.snackBarMessage}
    </Snackbar>
  );
};

export default SnackBar;
