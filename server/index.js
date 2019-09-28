const app = require('./config.js');

const port = (3000);
app.listen(port, function ()  {
  console.log(`Listening on Port ${port}`);
});
