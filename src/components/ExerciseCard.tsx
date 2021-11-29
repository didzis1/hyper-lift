import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { difficultyStars } from '../utils/difficultyStars';
import { ExerciseDataType } from '../types/ExerciseDataType';
import Loading from './Loading';

const ExerciseCard = ({
  item
}: {
  item: ExerciseDataType | null | undefined;
}) => {
  if (!item) return <Loading />;
  return (
    <View style={styles.exerciseCard}>
      <View>
        <Text style={styles.cardText}>{item.name}</Text>
      </View>

      <View>
        <Text style={styles.cardText}>
          Difficulty: {difficultyStars(item.level)}
        </Text>
      </View>

      <View>
        <Text style={styles.cardText}>Type: {item.mechanic}</Text>
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
  cardText: {
    color: '#FFFFFF'
  }
});

export default ExerciseCard;
