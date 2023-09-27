import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import * as actionsPokedex from '../../redux/actions/catalag';
import { getIdPokemon } from '../../helpers';
import { useActions } from '../../hooks/useActions';
import { useSelector } from 'react-redux';



const PokemonDetail = ({ route }: any) => {
  const { getPokemonById } = useActions(actionsPokedex);



  const { pokemon_detail, loading } = useSelector(({ catalag }: any) => {
    return { ...catalag };
  });


  useEffect(() => {
    const urlPokemon = route?.params?.pokemon?.url;
    const idPokemon = getIdPokemon(urlPokemon);
    getPokemonById(idPokemon)

  }, [route.params]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0077FF" />
      </View>
    );
  }

  if (!pokemon_detail) {
    return (
      <View style={styles.errorContainer}>
        <Text>Error al cargar los datos del Pokémon.</Text>
      </View>
    );
  }

  const abilities = pokemon_detail.abilities.map((ability: any) => ability.ability.name).join(', ');
  const types = pokemon_detail.types.map((type: any) => type.type.name).join(', ');
  const genderRatioFemale = pokemon_detail.gender_rate * 12.5;
  const genderRatioMale = 100 - genderRatioFemale;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: pokemon_detail.sprites.front_default }}
        style={styles.image}
      />
      <Text style={styles.name}>{pokemon_detail.name}</Text>
      <Text style={styles.info}>Peso: {pokemon_detail.weight / 10} kg</Text>
      <Text style={styles.info}>Altura: {pokemon_detail.height / 10} m</Text>
      <Text style={styles.info}>Categoría: {types}</Text>
      <Text style={styles.info}>Habilidad: {abilities}</Text>
      <Text style={styles.info}>Género: {genderRatioFemale}% Hembra, {genderRatioMale}% Macho</Text>
      <Text style={styles.info}>Estadísticas de Fuerza:</Text>
      <FlatList
        data={pokemon_detail.stats}
        keyExtractor={(item) => item.stat.name}
        renderItem={({ item }) => (
          <Text style={styles.info}>{item.stat.name}: {item.base_stat}</Text>
        )}
      />
      <Text style={styles.info}>Evaluaciones:</Text>
      <FlatList
        data={pokemon_detail.flavor_text_entries}
        keyExtractor={(item) => item.version.name}
        renderItem={({ item }) => (
          <View style={styles.evaluationContainer}>
            <Image
              source={{ uri: `https://www.serebii.net/pokedex-swsh/icon/${item.version.name}.png` }}
              style={styles.evaluationImage}
            />
            <Text style={styles.evaluationText}>{item.flavor_text}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
  },
  evaluationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  evaluationImage: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
  evaluationText: {
    fontSize: 14,
  },
});

export default PokemonDetail;
