
/*
[string].replace([old],[new]);
e.g.

var name = "Jeremy R. Domasian";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
*/

var work = {
	"jobs": [
		{
			"employer": "Year Up Bay Area",
			"title": "Program Coordinator",
			"location": "San Francisco, CA",
			"dates": "July 2014 to Present",
			"description": "placeholder"
		},
		{
			"employer": "Year Up Bay Area",
			"title": "Teaching Assistant / IT Instructor",
			"location": "San Jose, CA",
			"dates": "February 2014 to July 2014",
			"description": "placeholder"
		},
		{
			"employer": "Splunk",
			"title": "Systems Intern",
			"location": "San Francisco, CA",
			"dates": "July 2013 to January 2014",
			"description": "placeholder"
		},
		{
			"employer": "City College of San Francisco",
			"title": "English Tutor",
			"location": "San Francisco, CA",
			"dates": "January 2008 to May 2010, January 2012 to May 2012",
			"description": "placeholder"
		}
	]
}

var projects = {
	"projects": [
		{
			"title": "Secrets World",
			"dates": "July 2013",
			"description": "A web application using the LAMP stack. Users can submit and vote on other user-submitted secrets! A whole six months before the Secrets iPhone app craze.",
			"images": "images/secrets_world.png"
		}
	]
}

var bio = {
	"name": "Jeremy Domasian",
	"role": "Web Developer",
	"welcomeMessage": "Hello, welcome to my interactive resume!",
	"contacts": {
		"mobile": "(650) 815-1225",
		"email": "j.domasian@gmail.com",
		"github": "oldpastelsoul",
		"twitter": "@jeremydomasian",
		"location": "San Francisco, CA"
	},
	"skills": ["HTML", "CSS", "JavaScript", "jQuery"],
};

var education = {
	"schools": [
		{
			"name": "Udacity",
			"location": "Online",
			"degree": "Nanodegree",
			"majors": ["Front-End Web Development"],
			"dates": "Expected 2015"
		},
		{
			"name": "San Francisco State University",
			"location": "San Francisco, CA, US",
			"degree": "BA",
			"majors": ["English - Linguistics"],
			"dates": "2015",
			"url": "http://www.sfsu.edu"
		},
		{
			"name": "Year Up Bay Area / City College of San Francisco",
			"location": "San Francisco, CA, US",
			"degree": "Certificate",
			"majors": ["Computer Technician"],
			"dates": "2014",
			"url": "http://www.yearup.org"
		},
		{
			"name": "City College of San Francisco",
			"location": "San Francisco, CA, US",
			"degree": "AA",
			"majors": ["Arts and Humanities"],
			"dates": "2009",
			"url": "https://www.ccsf.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": "January 2015",
			"url": "https://www.udacity.com/course/ud804-nd"
		},
		{
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"dates": "December 2014",
			"url": "https://www.udacity.com/course/ud304-nd"
		}
	]
}

/*
$("#main").append(work["position"]);
$("#main").append(education.name);

$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.phone);
$("#main").append(bio.email);
$("#main").append(bio.photo);
$("#main").append(bio.welcome);
$("#main").append(bio.skills);
*/
