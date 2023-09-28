import React, { useEffect } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import {  getUrlImagePokemon } from '../../../helpers';
import { styles } from './styles';

export interface Pokemon {
  name: string;
  url: string;
}

const PokemonCard = ({ item, onPress }: { item: Pokemon; onPress: () => void; }) => {

  const screenHeight = Dimensions.get('window').height;
  const itemHeight = screenHeight / 5;
  const imageUrl = getUrlImagePokemon(item?.url);

  useEffect(() => {
    if (item?.url) {

    }
  }, [item])

  return (
    <TouchableOpacity style={[styles.wrapper, { height: itemHeight }]} onPress={onPress}>
      <View style={[styles.card]}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <Text style={styles.pokemonName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  )
};



export default PokemonCard;
