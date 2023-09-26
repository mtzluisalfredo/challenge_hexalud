import React, { useEffect } from 'react';
import { FlatList, View, Text } from 'react-native';
import { useActions } from '../../hooks/useActions';
import * as actionsPokedex from '../../redux/actions/catalag';
import { useSelector } from 'react-redux';
import { PokemonCard } from '../../components';
import { getIdComponent } from '../../helpers';

function Catalag() {
  const { getPokedex } = useActions(actionsPokedex);
  const { limit, offset, pokemons } = useSelector(({ catalag }: any) => {
    return { ...catalag };
  });

  const fetchpokemons = async () => {
    await getPokedex({ limit, offset });
  };

  useEffect(() => {
    fetchpokemons();
  }, []);

  return (
    <FlatList
      data={pokemons}
      renderItem={({item}) => <PokemonCard item={item} />}
      numColumns={2}
      keyExtractor={() => getIdComponent()}
    />
  );
}

export default Catalag;
