const volumeBalok = (p, l, t) => {
  const volumeBalok = p * l * t;
  console.log(volumeBalok);
};

const luasPermukaanBalok = (p, l, t) => {
  const luasPermukaanBalok = 2 * (p * l + p * t + l * t);
  console.log(luasPermukaanBalok);
};

module.exports = {
  volumeBalok,
  luasPermukaanBalok,
};
