var express = require('express');
var router = express.Router();


router.get('/', function(req, res){
	var data = req.app.get('appData');
	var screenShots = [];
	var about = "";
	var works = "";
	var skills = "";
	var skillsList = [];
	var company = "";
	data.pageSections.forEach(function(item){
		if(item.title == "About"){
			about = item.description;
		} else if(item.title == "Works"){
			company = item.company;
			works = item.description;
			screenShots = screenShots.concat(item.screenshots);
		} else if(item.title == "Skills"){
			skills = item.description;
			skillsList = skillsList.concat(item.skills);

		}
	});

	res.render('index', {
		pageTitle: 'Home',
		screenshot: screenShots,
		pageID: 'home',
		aboutMe: about,
		myWorks: works,
		companyName: company,
		mySkills: skills,
		skillList: skillsList
	});
});


module.exports = router;
