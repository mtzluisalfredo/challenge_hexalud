export function getIdPokemon(url: string) {
  const regex = /pokemon\/(\d+)\//;
  const match = url?.match(regex);

  if (match && match[1]) {
    return parseInt(match[1], 10); // Devuelve el número de Pokémon como un entero
  } else {
    return ''; // Devuelve null si no se encuentra ningún número de Pokémon en la URL
  }
}

export function getUrlImagePokemon(url: string) {
  if (!url) {
    return ''
  }

  const pokemonId = getIdPokemon(url);

  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
}

function generateUUID(): string {
  const chars = '0123456789abcdef';
  const uuid = [];
  let rnd = 0;
  let r;

  for (let i = 0; i < 36; i++) {
    if (i === 8 || i === 13 || i === 18 || i === 23) {
      uuid[i] = '-';
    } else if (i === 14) {
      uuid[i] = '4';
    } else {
      if (rnd <= 0x02) rnd = 0x2000000 + (Math.random() * 0x1000000) | 0;
      r = rnd & 0xf;
      rnd = rnd >> 4;
      uuid[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r];
    }
  }

  return uuid.join('');
}

export function getIdComponent() {
  return generateUUID();
}
