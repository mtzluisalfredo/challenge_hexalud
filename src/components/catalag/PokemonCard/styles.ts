import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  pokemonName: {
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 16
  },
  wrapper: {
    padding: 16,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: 'white',
    elevation: 3, // Esto agrega una sombra al elemento en Android
    shadowColor: '#000', // Color de la sombra en iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: 100,
    height: 100,
  },
});
