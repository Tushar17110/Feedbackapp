const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');


mongoose.connect(keys.mongoURI); 

const app = express();

app.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,         //it allows the session to last till 30 days. It has to be passed in millisecond, so we write it like this.
      keys: [keys.cookieKey]                    //to encript the cookie
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);


//localhost:5000/