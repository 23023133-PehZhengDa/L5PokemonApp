import React from 'react';
import { StyleSheet, Text, View, SectionList, TouchableOpacity, Image, StatusBar } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const pokemonData = [
  {
    data: [
      {
        name: 'Seel',
        imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_86-2x.png',
        id: '7',
      },
      {
        name: 'Psyduck',
        imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_54-2x.png',
        id: '54',
      },
    ],
    title: 'Water',
    color: '#58ABF6',
    icon: 'water',
  },
  {
    data: [
      {
        name: 'Charmander',
        imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_4-2x.png',
        id: '4',
      },
      {
        name: 'Growlithe',
        imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_58-2x.png',
        id: '58',
      },
    ],
    title: 'Fire',
    color: '#FF5C5C',
    icon: 'fire',
  },
  {data: [
      {
        name: 'Oddish',
        imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_43-2x.png',
        id: '7',
      },
      {
        name: 'Venomoth',
        imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_49-2x.png',
        id: '54',
      },
    ],
    title: 'Plant',
    color: '#6df658',
    icon: 'leaf',
  },
];

const App = () => {

  return (
      <View style={[styles.container,{margin: 20}]}>
        <StatusBar hidden={true} />
        <SectionList
            sections={pokemonData}
            renderItem={({ item }) => (
                <TouchableOpacity style={styles.listItem}>
                  <Text style={styles.pokemonName}>{item.name}</Text>
                  <Image source={{ uri: item.imageUrl }} style={styles.pokemonImage} />
                </TouchableOpacity>
            )}
            renderSectionHeader={({ section }) => (
                <View style={[styles.sectionHeader, { backgroundColor: section.color }]}>
                  <Icon name={section.icon} size={30} color="#fff"/>
                  <Text style={styles.sectionHeaderText}>{section.title}</Text>
                </View>
            )}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#c5c5ca',
    borderRadius: 5,
    borderWidth: 1,
  },
  pokemonName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  pokemonImage: {
    width: 140,
    height: 200,
    borderRadius: 5,
  },
  sectionHeader: {
    padding: 10,
    marginBottom: 5,
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  sectionIcon: {
    size: 20,
  },
});

export default App;
