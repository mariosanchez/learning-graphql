const express = require('express');
const PORT = 3500;
const app = express();

app.use('/graphql', (req, res) => {
  res.send('It works!')
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})