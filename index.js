const express = require('express');
const routes = require('./api/routes');

const app = express();

// expose the client
app.use(express.static('build'));

// expose the API
app.use('/api', routes);

// expose the images
app.use('/images', express.static('images'));

app.listen(process.env.PORT, () => console.log('Listening on port %s', process.env.PORT));
