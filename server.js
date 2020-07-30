const express = require('express');
const cors = require('cors');
const port = 3333;

const server = express();
server.use(express.json());
server.use(cors());

const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};

let players = [
  {
    name: "Ricky Rubio",
    age: 29,
    height: "6′ 4″",
    id: 0
  }
];
server.get('/players', (req, res) => {
  res.json(players);
});
let playerId = players.length;

server.post('/players', (req, res) => {
  const { name, age, height } = req.body;
  const newplayer = { name, age, height, id: playerId };
  if (!name || !age || !height) {
    return sendUserError(
      'Ya goofed! Name/Age/Height are all required to create a player in the player DB.',
      res
    );
  }
  const findPlayerByName = player => {
    return player.name === name;
  };
  if (players.find(findPlayerByName)) {
    return sendUserError(
      `Ya done goofed! ${name} already exists in the player DB.`,
      res
    );
  }

  players.push(newplayer);
  playerId++;
  res.json(players);
});

server.put('/players/:id', (req, res) => {
  const { id } = req.params;
  const { name, age, height } = req.body;
  const findplayerById = player => {
    return player.id == id;
  };
  const foundPlayer = players.find(findplayerById);
  if (!foundPlayer) {
    return sendUserError('No player found by that ID', res);
  } else {
    if (name) foundPlayer.name = name;
    if (age) foundPlayer.age = age;
    if (height) foundPlayer.height = height;
    res.json(players);
  }
});

server.delete('/players/:id', (req, res) => {
  const { id } = req.params;
  const foundPlayer = players.find(player => player.id == id);

  if (foundPlayer) {
    const playerRemoved = { ...foundPlayer };
    players = players.filter(player => player.id != id);
    res.status(200).json(players);
  } else {
    sendUserError('No player by that ID exists in the player DB', res);
  }
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});
