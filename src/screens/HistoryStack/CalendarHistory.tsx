import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Text } from 'react-native-paper';

const CalendarHistory = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.calendarContainer}>
        <Calendar />
      </View>
      <View style={styles.contentContainer}>
        <Text>Hello</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  calendarContainer: { padding: 20 },
  calendar: {
    backgroundColor: '#FFFFFF'
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#2C4E5B'
  }
});

export default CalendarHistory;
