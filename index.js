const { volumeKubus, luasPermukaanKubus } = require("./kubus");
const { volumeBalok, luasPermukaanBalok } = require("./balok");
const { volumePrisma, luasPermukaanPrisma } = require("./prisma");

volumeKubus(3);
luasPermukaanKubus(3);
volumeBalok(6, 4, 3);
luasPermukaanBalok(6, 4, 3);
volumePrisma(6, 4, 10);
luasPermukaanPrisma(6, 4, 10);
