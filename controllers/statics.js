// GET /
function home(req, res) {  
  res.render('index');
}

function north(req, res) {  
  res.render('north.ejs');
}

function west(req, res) {  
  res.render('west.ejs');
}


module.exports = {
	home: home,
	north: north,
	west: west,
};
