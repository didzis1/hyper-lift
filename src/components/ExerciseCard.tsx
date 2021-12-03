import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Title } from 'react-native-paper';
import { difficultyStars } from '../utils/difficultyStars';
import { ExerciseDataType } from '../types/ExerciseDataType';
import Loading from './Loading';

type Props = {
  item: ExerciseDataType | null | undefined;
  isSelected?: boolean;
};

const ExerciseCard = ({ item, isSelected }: Props) => {
  if (!item) return <Loading />;
  return (
    <View
      style={[
        styles.exerciseCard,
        {
          backgroundColor: isSelected ? '#E9C46A' : '#2C4E5B'
        }
      ]}>
      <View>
        <Title style={styles.cardHeader}>{item.name}</Title>
      </View>

      <View>
        <Text style={styles.cardText}>
          Difficulty: {difficultyStars(item.level)}
        </Text>
      </View>

      <View>
        {item.mechanic && (
          <Text style={styles.cardText}>
            Type:{' '}
            {item.mechanic.charAt(0).toUpperCase() + item.mechanic.slice(1)}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  exerciseCard: {
    backgroundColor: '#2C4E5B',
    borderRadius: 5,
    padding: 10
  },
  cardHeader: {
    fontSize: 18,
    color: '#FFFFFF'
  },
  cardText: {
    color: '#FFFFFF'
  },
  selectedExercise: {
    backgroundColor: '#E9C46A'
  }
});

export default ExerciseCard;
