const volumeKubus = (r) => {
  volumeBalok = r * r * r;
  console.log(volumeBalok);
};

const luasPermukaanKubus = (s) => {
  luasPermukaanKubus = 6 * (s * s);
  console.log(luasPermukaanKubus);
};

const volumeBalok = (p, l, t) => {
  volumeBalok = p * l * t;
  console.log(volumeBalok);
};

const luasPermukaanBalok = (p, l, t) => {
  luasPermukaanBalok = 2 * (p * l + p * t + l * t);
  console.log(luasPermukaanBalok);
};

module.exports = {
  volumeKubus,
  luasPermukaanKubus,
  volumeBalok,
  luasPermukaanBalok,
};
