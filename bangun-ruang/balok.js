const volumeBalok = (p, l, t) => {
  const volumeBalok = p * l * t;
  return(volumeBalok);
};

const luasPermukaanBalok = (p, l, t) => {
  const luasPermukaanBalok = 2 * (p * l + p * t + l * t);
  return(luasPermukaanBalok);
};

module.exports = {
  volumeBalok,
  luasPermukaanBalok,
};
