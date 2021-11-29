import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Alert
} from 'react-native';
import { Divider, Text, TextInput } from 'react-native-paper';
import { HomeNavProps } from './HomeParamList';
import { ExerciseDataType } from '../../types/ExerciseDataType';
import ExerciseCard from '../../components/ExerciseCard';

import exerciseList from '../../data/exercises.json';
import globalStyles from '../../globalStyles';

const Exercise = ({
  item,
  setSelectedExercise
}: {
  item: ExerciseDataType;
  setSelectedExercise: React.Dispatch<
    React.SetStateAction<ExerciseDataType | null>
  >;
}) => {
  return (
    <TouchableOpacity onPress={() => setSelectedExercise(item)}>
      <ExerciseCard item={item} />
    </TouchableOpacity>
  );
};

const SearchExercise: React.FC<HomeNavProps<'SearchExercise'>> = ({
  navigation
}) => {
  const submit = useRef(() => {});

  const [exercises, setExercises] = useState<[] | ExerciseDataType[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [selectedExercise, setSelectedExercise] =
    useState<ExerciseDataType | null>(null);

  submit.current = () => {
    if (!selectedExercise) {
      Alert.alert('Exercise missing', 'You must select an exercise to add it', [
        {
          text: 'Okay',
          onPress: () => console.log('Cancel pressed'),
          style: 'cancel'
        }
      ]);
      return null;
    }
    navigation.navigate('CreateMaxLift', {
      exercise: selectedExercise
    });
    return selectedExercise;
  };

  useEffect(() => {
    navigation.setParams({ submit });
    setExercises(exerciseList.exercises);
  }, []);

  const renderItem = (item: ExerciseDataType) => {
    return <Exercise item={item} setSelectedExercise={setSelectedExercise} />;
  };

  return (
    <View style={styles.container}>
      <Text>Search for an exercise that you would like to add.</Text>
      <View>
        <TextInput
          dense={true}
          style={globalStyles.input}
          placeholder='Search'
          onChangeText={(value) => setSearchValue(value)}
        />
        <Text>{selectedExercise?.name}</Text>
      </View>
      <FlatList
        // Filter exercises by name with search bar
        data={exercises.filter((exercise) =>
          exercise.name.toLowerCase().includes(searchValue.toLowerCase())
        )}
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
