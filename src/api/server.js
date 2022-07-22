require('dotenv').config();

const PORT = process.env.PORT || 4242;
const app = require('./app');

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
