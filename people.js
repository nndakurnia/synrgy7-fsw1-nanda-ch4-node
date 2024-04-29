const fs = require("fs");

const data = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
  },
];

const setInitialData = () => {
  fs.writeFile("./filesystem/people.txt", JSON.stringify(data), "utf-8", (err) => {
    if (err) console.log("Error saving data!");
    else console.log("Success saving data!");
  });
};

const getData = () => {
  fs.readFile("./filesystem/people.txt", "utf-8", (err, data) => {
    if (err) console.log("Error reading data!");

    const parsed = JSON.parse(data);
    const names = parsed.map((row) => row.name);
    console.log(names);
  });
};

const getDetail = (id) => {
  fs.readFile("./filesystem/people.txt", "utf-8", (err, data) => {
    if (err) console.log("Error reading data!");

    const parsed = JSON.parse(data);
    const person = parsed.find((row) => row.id === id);

    if (person) {
      console.log(person);
    } else {
      console.log("Person not found");
    }
  });
};

const addData = (payload) => {
  fs.readFile("./filesystem/people.txt", "utf-8", (err, data) => {
    if (err) console.log("Error reading data!");

    const parsedData = JSON.parse(data);
    parsedData.push(payload);
    
    fs.writeFile("./filesystem/people.txt", JSON.stringify(parsedData), "utf-8", (err) => {
      if (err) console.log("Error saving data!");
      else console.log(parsedData);
    });
  });
};

module.exports = {
  data,
  setInitialData,
  getData,
  getDetail,
  addData,
};
