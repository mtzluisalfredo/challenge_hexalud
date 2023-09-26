import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useActions } from '../../hooks/useActions';
import * as actionsPokedex from '../../redux/actions/catalag';
import { useSelector } from 'react-redux';
import { LoadingFooter, PokemonCard } from '../../components';
import { getIdComponent } from '../../helpers';

function Catalag() {
  const { getPokedex } = useActions(actionsPokedex);
  const { limit, pokemons, loading } = useSelector(({ catalag }: any) => {
    return { ...catalag };
  });

  const [offset, setOffset] = useState(0); // Nuevo estado para el offset

  const fetchpokemons = async () => {
    await getPokedex({ limit, offset });
    setOffset(offset + limit); // Incrementa el offset después de cada carga
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
      onEndReached={fetchpokemons} // Carga más datos cuando se llega al final de la lista
      onEndReachedThreshold={0.5} // Llama a onEndReached cuando el final de los datos cargados está a la mitad de la pantalla
      ListFooterComponent={() => <LoadingFooter loading={loading} />}
    />
  );
}

export default Catalag;