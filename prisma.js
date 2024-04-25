//prisma segi tiga
const volumePrisma = (a, t, tp) => {
    const volumeBalok = (0.5 * a * t) * tp;
    console.log(volumeBalok);
  };
  
  const luasPermukaanPrisma = (a, t, tp) => {
    const luasPermukaanPrisma = (2* 0.5 * a * t) * ((3 * a) * tp);
    console.log(luasPermukaanPrisma);
  };
  
  module.exports = {
    volumePrisma,
    luasPermukaanPrisma,
  };
  