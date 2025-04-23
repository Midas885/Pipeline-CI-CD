

const express = require('express');
const promBundle = require('express-prom-bundle');
const app = express();
const metricsMiddleware = promBundle({includeMethod: true});

app.use(metricsMiddleware);

app.get('/api', (req, res) => {
  res.json({ message: "¡Pipeline CI/CD funcionando correctamente!" });
});

app.listen(3000, () => {
  console.log('Backend running on port 3000');
});