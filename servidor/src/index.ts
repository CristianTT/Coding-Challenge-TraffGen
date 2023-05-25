const express = require('express');
const cors = require('cors');
import { rutasCupones } from './routes/cupones.route';

const app = express();
app.use(cors());

rutasCupones(app);

app.listen(3000, () => {
  console.log(`Servidor iniciado en http://localhost:3000`);
});
