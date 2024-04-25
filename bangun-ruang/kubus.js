const volumeKubus = (r) => {
  const volumeKubus = r * r * r;
  return(volumeKubus);
};

const luasPermukaanKubus = (s) => {
  const luasPermukaanKubus = 6 * (s * s);
  return(luasPermukaanKubus);
};

module.exports = {
  volumeKubus,
  luasPermukaanKubus,
};
