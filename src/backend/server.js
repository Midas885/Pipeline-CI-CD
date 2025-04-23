

const express = require('express');
const app = express();


app.get('/api', (req, res) => {
  res.json({ message: "¡Pipeline CI/CD funcionando correctamente!" });
});


if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
  });
}

module.exports = app;  