import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native'
import { getUrlImagePokemon } from '../../../helpers';
import { styles } from './styles';

interface Pokemon {
  name: string;
  url: string;
}

const PokemonCard = ({ item }: { item: Pokemon }) => {

  const screenHeight = Dimensions.get('window').height;
  const itemHeight = screenHeight / 5;
  const imageUrl = getUrlImagePokemon(item?.url);

  return (
    <View style={[styles.wrapper, { height: itemHeight }]}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <Text style={styles.pokemonName}>{item.name}</Text>
    </View>
  )
};



export default PokemonCard;
