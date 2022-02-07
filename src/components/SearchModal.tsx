import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Alert
} from 'react-native';
import { Divider, Searchbar, Text, useTheme } from 'react-native-paper';
import { ExerciseDataType } from '../types/ExerciseDataType';
import ExerciseCard from './ExerciseCard';
import { ModalDataType } from '../types/ModalType';

import exerciseList from '../data/exercises.json';

type SearchModalProps = {
  modalData: ModalDataType;
  setModalData: React.Dispatch<React.SetStateAction<ModalDataType>>;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void;
};

const SearchModal = ({
  modalData,
  setModalData,
  setFieldValue
}: SearchModalProps) => {
  const { colors } = useTheme();
  const [exercises, setExercises] = useState<[] | ExerciseDataType[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [selectedExercise, setSelectedExercise] =
    useState<ExerciseDataType | null>(null);

  useEffect(() => {
    setExercises(exerciseList.exercises);
  }, []);

  const saveExercise = () => {
    if (selectedExercise && modalData.location) {
      if (modalData.fieldName) {
        // If fieldName is specified, setFieldValue saves an object with fieldName
        setFieldValue(modalData.location, {
          [modalData.fieldName]: selectedExercise.name
        });
      } else {
        // fieldName is not specified, save as a string
        setFieldValue(modalData.location, selectedExercise.name);
      }
      setModalData({
        visible: false,
        location: null,
        fieldName: null
      });
    } else {
      Alert.alert('Exercise missing', 'You must select an exercise to add it', [
        {
          text: 'Okay',
          onPress: () => console.log('Cancel pressed'),
          style: 'cancel'
        }
      ]);
    }
  };

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
    <View
      style={[
        styles.mainContainer,
        {
          backgroundColor: colors.background
        }
      ]}>
      <View style={styles.navigation}>
        <View>
          <TouchableOpacity
            onPress={() =>
              setModalData({
                visible: false,
                location: null,
                fieldName: null
              })
            }>
            <Text
              style={{
                color: colors.error
              }}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={() => saveExercise()}>
            <Text
              style={{
                color: '#33A7FF'
              }}>
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <Text>Search for an exercise that you would like to add.</Text>
        <View style={styles.searchBarContainer}>
          <Searchbar
            style={styles.inputStyle}
            placeholder='Search'
            onChangeText={(value) => setSearchValue(value)}
            value={searchValue}
            placeholderTextColor='#bccbd1'
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
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20
  },
  searchBarContainer: {
    marginVertical: 10
  },
  inputStyle: {
    height: 40
  },
  navigation: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 15
  },
  container: {
    flex: 1
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

export default SearchModal;
