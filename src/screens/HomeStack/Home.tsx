import React, { useEffect, useContext } from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { HomeNavProps } from './HomeParamList';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { getCurrentDate } from '../../utils/dateFormat';
import { PreferenceContext } from '../../contexts/PreferenceContext';

import useCurrentUser from '../../hooks/useCurrentUser';
import useGetMaxLift from '../../hooks/useGetMaxLift';
import useGetRoutines from '../../hooks/useGetRoutines';

import Loading from '../../components/Loading';
import MaxLiftCard from '../../components/MaxLiftCard';
import RoutineCards from '../../components/RoutineCards';
import SnackBar from '../../components/SnackBar';

const Home: React.FC<HomeNavProps<'Home'>> = ({ navigation, route }) => {
  const { currentUser } = useCurrentUser();
  const { maxLifts } = useGetMaxLift();
  const { routines } = useGetRoutines();

  const { weightMeasurement } = useContext(PreferenceContext);
  const [currentDay, setCurrentDay] = React.useState<string>('');

  const { colors } = useTheme();

  useEffect(() => {
    setCurrentDay(getCurrentDate());
  }, []);

  if (!currentUser || !maxLifts) {
    return <Loading />;
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.primary
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.primary
        }}>
        <View style={styles.topContainer}>
          <View style={styles.topUpperRow}>
            <View style={styles.dateContainer}>
              <Text style={[styles.currentDate, { color: colors.background }]}>
                {currentDay}
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ alignSelf: 'center' }}>
                  <Ionicons name='today' size={20} color={colors.accent} />
                </View>
                <View style={{ paddingLeft: 5 }}>
                  <Text style={[styles.today, { color: colors.accent }]}>
                    Today
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.avatarContainer}>
              <TouchableOpacity>
                <View>
                  <Image
                    source={require('../../../assets/hyperlift.png')}
                    style={styles.avatar}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.settingsContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
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
            <Text style={[styles.welcomeText, { color: colors.background }]}>
              Welcome back,
            </Text>
            <Text style={[styles.fullName, { color: colors.background }]}>
              {currentUser.firstName} {currentUser.lastName}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={[
          styles.bottomContainer,
          { backgroundColor: colors.background }
        ]}>
        <View style={styles.contentContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Maximum lifts</Text>
          </View>

          <MaxLiftCard
            maxLifts={maxLifts}
            navigation={navigation}
            weightMeasurement={weightMeasurement}
          />

          <View style={styles.headerContainer}>
            <Text style={styles.header}>Routines</Text>
            <View style={styles.addButton}>
              <TouchableOpacity
                onPress={() => navigation.navigate('CreateRoutine', {})}>
                <Ionicons name='add' size={24} color='grey' />
              </TouchableOpacity>
            </View>
          </View>

          <RoutineCards
            routines={routines ? routines : []}
            navigation={navigation}
          />
        </View>
      </View>
      <SnackBar navigation={navigation} route={route} />
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
    fontSize: 14
  },
  fullName: {
    fontSize: 18
  },
  dateContainer: { flex: 1, marginLeft: 10 },
  currentDate: {
    fontSize: 16
  },
  today: {
    fontSize: 18
  },
  avatarContainer: { flex: 1, alignItems: 'center' },
  avatar: {
    width: 125,
    height: 75
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
  bottomContainer: {
    flex: 3,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25
  },
  contentContainer: {
    padding: 20,
    flex: 1
  },
  headerContainer: {
    paddingLeft: 20,
    paddingTop: 15
  },
  routineFlex: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  routineHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  addButton: {
    position: 'absolute',
    right: 15,
    top: 15
  }
});

export default Home;
