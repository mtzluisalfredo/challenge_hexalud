import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useActions } from '../../hooks/useActions';
import * as actionsPokedex from '../../redux/actions/catalag';
import { useSelector } from 'react-redux';
interface Pokemon {
  name: string;
}

function Catalag() {
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const { getPokedex } = useActions(actionsPokedex);
  const { loading, limit, offset, pokemonData } = useSelector(({ catalag }: any) => {
    return { ...catalag };
  });

  const fetchPokemonData = async () => {
    if (!isLoadingMore) {
      setIsLoadingMore(true);
      await getPokedex({ limit, offset });
      setIsLoadingMore(false);
    }
  };
  useEffect(() => {
    fetchPokemonData();
  }, []);

  const renderItem = ({ item }: { item: Pokemon }) => (
    <View style={{ padding: 16, flex: 1, height: 100, backgroundColor: 'red' }}>
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
      numColumns={2}
      keyExtractor={(item) => item.name}
      onEndReachedThreshold={0.1}
      onEndReached={fetchPokemonData}
      ListFooterComponent={renderFooter}
    />
  );
}

export default Catalag;
