const volumeKubus = (r) => {
  const volumeKubus = r * r * r;
  console.log(volumeKubus);
};

const luasPermukaanKubus = (s) => {
  const luasPermukaanKubus = 6 * (s * s);
  console.log(luasPermukaanKubus);
};

module.exports = {
  volumeKubus,
  luasPermukaanKubus,
};
