const express = require('express');
const cors = require('cors');

const PORT = 3001;

const app = express();
app.use(cors());

app.get('/welcome', (req, res) => {
  console.log('hello');
  res.status(200).send('Tillsammans	gör	vi	det	lättare	för	ditt	företag	att	växa');
});

app.listen(process.env.PORT || 5000, () => console.log(`Example app listening on port ${PORT}!`));
