const { volumeKubus, luasPermukaanKubus } = require("./bangun-ruang/kubus");
const { volumeBalok, luasPermukaanBalok } = require("./bangun-ruang/balok");
const { volumePrisma, luasPermukaanPrisma } = require("./bangun-ruang/prisma");

const fs = require("fs");
const {
  setInitialData,
  getData,
  getDetail,
  addData,
} = require("./filesystem/people");

console.log(volumeKubus(3));
console.log(luasPermukaanKubus(3));
const vBalok = volumeBalok(6, 4, 3);
console.log(vBalok);
console.log(luasPermukaanBalok(6, 4, 3));
console.log(volumePrisma(6, 4, 10));
console.log(luasPermukaanPrisma(6, 4, 10));

fs.writeFileSync("./filesystem/result.txt", `${vBalok}`, "utf-8");

setInitialData();
getData();
getDetail(1);

const newData = {
  id: 11,
  name: "Joshua Hong",
  username: "joshu_acoustic",
  email: "joshuji@pledis17.com",
};
addData(newData);
