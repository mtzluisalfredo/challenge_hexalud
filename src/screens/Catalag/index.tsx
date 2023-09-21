import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useActions } from '../../hooks/useActions';
import * as actionsPokedex from '../../redux/actions/pokedex';

const limit = 10; // Cantidad de resultados por página
interface Pokemon {
  name: string;
}

function Catalag() {
  const { getPokedex } = useActions(actionsPokedex);
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(0);

  const fetchPokemonData = async () => {
    getPokedex({ limit, offset })
  };

  useEffect(() => {
    fetchPokemonData();
  }, []);

  const renderItem = ({ item }: { item: Pokemon }) => (
    <View style={{ padding: 16 }}>
      <Text>{item.name}</Text>
    </View>
  );

  const renderFooter = () => {
    if (loading) {
      return (
        <View style={{ padding: 16 }}>
          <ActivityIndicator size="large" color="#007AFF" />
        </View>
      );
    }
    return null;
  };

  return (
    <FlatList
      data={pokemonData}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
      onEndReached={fetchPokemonData}
      onEndReachedThreshold={0.1}
      ListFooterComponent={renderFooter}
    />
  );
}

export default Catalag;
