const { prisma } = require('../generated/prisma-client');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get(`/beers/onStock`, async (req, res) => {
  const onStockBeers = await prisma.beers({ where: { onStock: true } });
  res.json(onStockBeers);
});

app.get('/beer/:beerId', async (req, res) => {
  const { beerId } = req.params;
  const beer = await prisma.beer({ id: beerId });
  res.json(beer);
});

app.get('/beers/user/:userId', async (req, res) => {
  const { userId } = req.params;
  const beersByUser = await prisma.user({ id: userId }).beers();
  res.json(beersByUser);
});

app.post('/user', async (req, res) => {
  const newUser = await prisma.createUser(req.body);
  res.json(newUser);
});

app.post('/beer/draft', async (req, res) => {
  const newBeer = await prisma.createBeer(req.body);
  res.json(newBeer);
});

app.put(`/beer/reStock/:beerId`, async (req, res) => {
  const { beerId } = req.params;
  const updatedBeer = await prisma.updateBeer({
    where: { id: beerId },
    data: { onStock: true }
  });
  res.json(updatedBeer);
});

app.listen(4001, () => console.log('Server is running on http://localhost:4001'));
