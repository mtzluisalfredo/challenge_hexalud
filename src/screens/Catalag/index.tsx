import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useActions } from '../../hooks/useActions';
import * as actionsPokedex from '../../redux/actions/catalag';
import { useSelector } from 'react-redux';
import { LoadingFooter, PokemonCard } from '../../components';
import { getIdComponent } from '../../helpers';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Pokemon } from '../../components/catalag/PokemonCard';

type RootStackParamList = {
  PokemonDetail: { pokemon: any }; // replace 'any' with the actual type of your pokemon
  // add other screens here
};

function Catalag() {
  const { getPokedex } = useActions(actionsPokedex);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'PokemonDetail'>>();
  const { limit, pokemons, loading } = useSelector(({ catalag }: any) => {
    return { ...catalag };
  });

  const [offset, setOffset] = useState(0);

  const fetchpokemons = async () => {
    await getPokedex({ limit, offset });
    setOffset(offset + limit);
  };

  useEffect(() => {
    fetchpokemons();
  }, []);

  const handleGoToDetail = (item: Pokemon) => {
    navigation.navigate('PokemonDetail', { pokemon: item })
  }

  return (
    <FlatList
      data={pokemons}
      renderItem={({ item }) => <PokemonCard onPress={() => handleGoToDetail(item)} item={item} />}
      numColumns={2}
      keyExtractor={() => getIdComponent()}
      onEndReached={fetchpokemons}
      onEndReachedThreshold={0.5}
      ListFooterComponent={() => <LoadingFooter loading={loading} />}
    />
  );
}

export default Catalag;