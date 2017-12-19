const express = require('express');
const app = express();

app.set("port", process.env.PORT || 3001);

app.get('/api/v1/systems', (req, res) => {
  const systems = [
    {
      name: 'dnd-3.5',
      label: "Dungeons and Dragons",
      rules: "3.5",
    }, {
      name: 'star-trek-decypher',
      label: "Star Tre",
      rules: "decypher",
    },
  ];
  return res.json(systems);
});

app.listen(app.get('port'), () => {
  console.log(`Server listing: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});
