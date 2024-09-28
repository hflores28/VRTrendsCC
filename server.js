const express = require('express');
// const googleTrends = require('google-trends-api');
const app = express();
const port = 3000;

app.get('/trends', (req, res) => {
  const keyword = req.query.keyword || 'Grand Velas Riviera Nayarit'; // Parámetro de búsqueda
  
  googleTrends.interestOverTime({ keyword, geo: 'MX', category: 174 })
    .then((results) => {
      res.json(JSON.parse(results));
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
