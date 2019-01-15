// DEPENDENCIES
const express = require('express');
const app = express();
const MarsMissions = require('./models/marsMissions');
app.use(express.static(__dirname + '/public'));
// * Make it so you can click on a mission’s name on the index page, and be taken to that mission’s show page
// * Bonus: add images to the data and have them display
// * Bonus: add static css to style the pages

// PORT
const port = 3000;

app.get('/missions', (req,res)=>{
  res.render('missions/index.ejs', {
    missions: MarsMissions
  });
});

app.get('/missions/:id',(req,res)=>{
  //res.send(MarsMissions[req.params.id]);
  res.render('missions/show.ejs',{
    missions: MarsMissions,
    thisMission: MarsMissions[req.params.id]
  });
});

// LISTENER
app.listen(port, function() {
  console.log('Missions to Mars running on port: ', port);
})

module.exports = app;
