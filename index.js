const { volumeKubus, luasPermukaanKubus } = require("./kubus");
const { volumeBalok, luasPermukaanBalok } = require("./balok");
const { volumePrisma, luasPermukaanPrisma } = require("./prisma");

const fs = require("fs");
const { setInitialData, getData, getDetail } = require("./people");

console.log(volumeKubus(3));
console.log(luasPermukaanKubus(3));
const vBalok = volumeBalok(6, 4, 3);
console.log(vBalok);
console.log(luasPermukaanBalok(6, 4, 3));
console.log(volumePrisma(6, 4, 10));
console.log(luasPermukaanPrisma(6, 4, 10));

fs.writeFileSync("./result.txt", `${vBalok}`, "utf-8");

setInitialData();
getData();
getDetail(1);
