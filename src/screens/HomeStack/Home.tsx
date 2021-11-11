import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { HomeNavProps } from './HomeParamList';

import useCurrentUser from '../../hooks/useCurrentUser';
import Loading from '../../components/Loading';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { getCurrentDate } from '../../utils/getCurrentDate';

const ProfileScreen: React.FC<HomeNavProps<'Home'>> = ({ navigation }) => {
  const [currentDay, setCurrentDay] = React.useState<string>('');
  const { currentUser } = useCurrentUser();

  if (!currentUser) {
    return <Loading />;
  }

  React.useEffect(() => {
    setCurrentDay(getCurrentDate());
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#2C4E5B'
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#2C4E5B'
        }}>
        <View style={styles.topContainer}>
          <View style={styles.topUpperRow}>
            <View style={styles.dateContainer}>
              <Text style={styles.currentDate}>{currentDay}</Text>
              <Text style={styles.today}>Today</Text>
            </View>

            <View style={styles.avatarContainer}>
              <TouchableOpacity onPress={() => navigation.push('Profile')}>
                <View>
                  <Image
                    source={require('../../../assets/avatarImage.png')}
                    style={styles.avatar}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.settingsContainer}>
              <TouchableOpacity
                onPress={() => console.log('Go To Settings Screen')}>
                <View style={styles.settingsIcon}>
                  <Ionicons
                    name='settings-outline'
                    size={24}
                    color='rgba(255, 255, 255, 0.8)'
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.topBottomRow}>
            <Text style={styles.welcomeText}>Welcome back to Hyperlift</Text>
            <Text style={styles.fullName}>Didzis Zvaigzne</Text>
          </View>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <Text>Under content</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  topUpperRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  topBottomRow: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  welcomeText: {
    fontSize: 14,
    color: '#FFFFFF'
  },
  fullName: {
    fontSize: 18,
    color: '#FFFFFF'
  },
  dateContainer: { flex: 1, marginLeft: 10 },
  currentDate: {
    color: '#FFFFFF',
    fontSize: 16
  },
  today: {
    color: '#E9C46A',
    fontSize: 18
  },
  avatarContainer: { flex: 1, alignItems: 'center' },
  avatar: {
    width: 100,
    height: 100
  },
  settingsContainer: {
    flex: 1,
    alignItems: 'flex-end'
  },
  settingsIcon: {
    backgroundColor: 'rgba(18, 52, 65, 0.8)',
    padding: 10,
    borderRadius: 35,
    marginRight: 10
  },
  contentContainer: {
    flex: 2,
    backgroundColor: '#F0F0F0',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 15
  }
});

export default ProfileScreen;
