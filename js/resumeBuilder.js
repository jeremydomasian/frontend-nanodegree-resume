// Bio Section

var bio = {
	"name": "Jeremy Domasian",
	"role": "Web Developer",
	"welcomeMessage": "Hello and welcome to my interactive resume!",
	"contacts": {
		"mobile": "(650) 815-1225",
		"email": "j.domasian@gmail.com",
		"github": "oldpastelsoul",
		"twitter": "@jeremydomasian",
		"location": "San Francisco, CA"
	},
	"skills": [
		"HTML", "CSS", "JavaScript", "jQuery"
	],
	"bioPic": "images/me.jpg"
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedBioPic);


if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
};


// Work Section

var work = {
	"jobs": [
		{
			"employer": "Year Up Bay Area",
			"title": "Program Coordinator",
			"location": "San Francisco, CA",
			"dates": "July 2014 - Present",
			"description": "placeholder"
		},
		{
			"employer": "Year Up Bay Area",
			"title": "Teaching Assistant / IT Instructor",
			"location": "San Jose, CA",
			"dates": "February 2014 - July 2014",
			"description": "placeholder"
		},
		{
			"employer": "Splunk",
			"title": "Systems Intern",
			"location": "San Francisco, CA",
			"dates": "July 2013 - January 2014",
			"description": "placeholder"
		},
		{
			"employer": "City College of San Francisco",
			"title": "English Tutor",
			"location": "San Francisco, CA",
			"dates": "January 2008 - May 2010, January 2012 - May 2012",
			"description": "placeholder"
		}
	]
}

function displayWork() {
	for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(formattedLocation);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
	}
}

// Projects section

var projects = {
	"projects": [
		{
			"title": "Secrets World",
			"dates": "July 2013",
			"description": "A web application using the LAMP stack. Users can submit secrets and vote on other user-submitted secrets! Created a whole six months before the Secrets iPhone app craze.",
			"images": "images/gnj_fingerwag.gif"
		}
	],
	"display": function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
		$(".project-entry:last").append(formattedImage);
		}
	}
}


// Education section

var education = {
	"schools": [
		{
			"name": "Udacity",
			"location": "Mountain View, CA",
			"degree": "Nanodegree",
			"majors": ["Front-End Web Development"],
			"dates": 2015
		},
		{
			"name": "San Francisco State University",
			"location": "San Francisco, CA, US",
			"degree": "BA",
			"majors": ["English - Linguistics"],
			"dates": 2015,
			"url": "http://www.sfsu.edu"
		},
		{
			"name": "Year Up Bay Area / City College of San Francisco",
			"location": "San Francisco, CA, US",
			"degree": "Certificate",
			"majors": ["Computer Technician"],
			"dates": 2014,
			"url": "http://www.yearup.org"
		},
		{
			"name": "City College of San Francisco",
			"location": "San Francisco, CA, US",
			"degree": "AA",
			"majors": ["Arts and Humanities"],
			"dates": 2009,
			"url": "https://www.ccsf.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/ud804-nd"
		},
		{
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"dates": 2014,
			"url": "https://www.udacity.com/course/ud304-nd"
		}
	]
}

// Function calls

projects.display();
displayWork();

// Other function definitions

function locationizer(work_obj) {
	var locations = [];

	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locations.push(newLocation);
	}

	return locations;
}

function inName(name) {
	name = name.trim().split(' ');
	// console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() +
		name[0].slice(1).toLowerCase();

	/*
	var firstNameFirstLetter = name[0].toUpperCase();
	var restOfFirstName = (name.slice(1, name.indexOf(' '))).toLowerCase()
	var firstName = firstNameFirstLetter + restOfFirstName;

	var lastName = (name.slice(name.indexOf(' ') + 1)).toUpperCase();
	
	name = firstName + ' ' + lastName
	*/
	
	return name[0] + ' ' + name[1];
}

$('#main').append(internationalizeButton);
$('#mapDiv').append(googleMap);
