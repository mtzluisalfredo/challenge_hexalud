import request from './request';

const { get } = request;

export default {
  getPokedex(data: { offset: number; limit: number }) {
    return get('/pokemon', data);
  },
  getPokemonById(pokemonId: number | string) {
    return get(`/pokemon/${pokemonId}`);
  },
};
