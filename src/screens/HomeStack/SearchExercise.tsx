import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Divider, Text, TextInput } from 'react-native-paper';
import { HomeNavProps } from './HomeParamList';

import exerciseList from '../../data/exercises.json';
import globalStyles from '../../globalStyles';

type ExerciseDataType = {
  name: string;
  force: string | null;
  level: string;
  mechanic: string | null;
  equipment: string | null;
  primaryMuscles: string[];
  secondaryMuscles: string[];
  instructions: string[];
  category: string;
};

const ExerciseCard = ({ item }: { item: ExerciseDataType }) => {
  return (
    <View style={styles.exerciseCard}>
      <View>
        <Text style={styles.cardText}>{item.name}</Text>
      </View>

      <View>
        <Text style={styles.cardText}>Level: {item.level}</Text>
      </View>

      <View>
        <Text style={styles.cardText}>Type: {item.mechanic}</Text>
      </View>
    </View>
  );
};

const SearchExercise: React.FC<HomeNavProps<'SearchExercise'>> = ({}) => {
  const [exercises, setExercises] = useState<[] | ExerciseDataType[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');

  useEffect(() => {
    setExercises(exerciseList.exercises);
  }, []);

  const renderItem = (item: ExerciseDataType) => {
    return <ExerciseCard item={item} />;
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          dense={true}
          style={globalStyles.input}
          placeholder='Search'
          onChangeText={(value) => setSearchValue(value)}
        />
        <Text>{searchValue}</Text>
      </View>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={() => <Divider style={styles.separator} />}
        renderItem={({ item }) => renderItem(item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  exerciseCard: {
    backgroundColor: '#2C4E5B',
    borderRadius: 5,
    padding: 10
  },
  separator: {
    margin: 5
  },
  cardText: {
    color: '#FFFFFF'
  }
});

export default SearchExercise;
