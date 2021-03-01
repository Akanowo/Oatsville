const express = require('express');
const result = require('dotenv').config();
const contactRouter = require('./routes/contact.route');

if(result.parsed) {
  console.log(result.parsed);
}

if(result.error) {
  console.log(result.error);
}

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('../dist/oatsville'));

app.use('/api/contact', contactRouter());



app.listen(process.env.PORT || 8080, () => {
  console.log('App started on port 8080');
});