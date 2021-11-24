import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { HomeNavProps } from './HomeParamList';
import useCurrentUser from '../../hooks/useCurrentUser';
import useGetMaxLift from '../../hooks/useGetMaxLift';
import Loading from '../../components/Loading';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { getCurrentDate } from '../../utils/getCurrentDate';
import MaxLiftCard from '../../components/MaxLiftCard';
import RoutineCards from '../../components/RoutineCards';

const Home: React.FC<HomeNavProps<'Home'>> = ({ navigation }) => {
  const [currentDay, setCurrentDay] = React.useState<string>('');
  const { currentUser } = useCurrentUser();
  const { maxLifts } = useGetMaxLift();

  const { colors } = useTheme();

  React.useEffect(() => {
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
              <Text style={styles.currentDate}>{currentDay}</Text>
              <Text style={styles.today}>Today</Text>
            </View>

            <View style={styles.avatarContainer}>
              <TouchableOpacity>
                <View>
                  <Image
                    source={require('../../../assets/avatarImage.png')}
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
            <Text style={styles.welcomeText}>Welcome back to Hyperlift</Text>
            <Text style={styles.fullName}>
              {currentUser.firstName} {currentUser.lastName}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={[
          styles.contentContainer,
          { backgroundColor: colors.background }
        ]}>
        <ScrollView>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Maximum lifts</Text>
          </View>

          <MaxLiftCard maxLifts={maxLifts} navigation={navigation} />

          <View style={styles.headerContainer}>
            <Text style={styles.header}>Routines</Text>
          </View>

          <RoutineCards
            routines={currentUser.routines}
            navigation={navigation}
          />
        </ScrollView>
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
    width: 75,
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
  contentContainer: {
    flex: 3,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20
  },
  headerContainer: {
    paddingLeft: 20
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
  }
});

export default Home;
