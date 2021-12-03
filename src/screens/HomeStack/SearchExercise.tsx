import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableOpacity
} from 'react-native';
import { Divider, Text, TextInput } from 'react-native-paper';
import { HomeNavProps } from './HomeParamList';
import { ExerciseDataType } from '../../types/ExerciseDataType';
import ExerciseCard from '../../components/ExerciseCard';

import exerciseList from '../../data/exercises.json';
import globalStyles from '../../globalStyles';

const SearchExercise: React.FC<HomeNavProps<'SearchExercise'>> = ({
  navigation,
  route
}) => {
  const submit = useRef(() => {});

  const [exercises, setExercises] = useState<[] | ExerciseDataType[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [selectedExercise, setSelectedExercise] =
    useState<ExerciseDataType | null>(
      route.params.isSelected ? route.params.isSelected : null
    );

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
    // If the item is selected, change it's background color
    const isSelected = selectedExercise === item;

    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedExercise(item);
        }}>
        <ExerciseCard isSelected={isSelected} item={item} />
      </TouchableOpacity>
    );
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
  },
  selectedCard: {
    backgroundColor: '#E9C46A'
  }
});

export default SearchExercise;
