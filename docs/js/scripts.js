$('.link1').click(function() {
  var options = [
		'https://wp.nyu.edu/monicaflores/gis-maps',
    'https://wp.nyu.edu/monicaflores/design_projects',
    'https://wp.nyu.edu/monicaflores/plans/'
  ];

  var randomNumber = Math.floor(Math.random() * options.length);

  var randomOption = options[randomNumber];

  location.replace(randomOption);
  })

count=1;
//Number
console.log(typeof(count));

var myName = 'Monica Flores';
// string
console.log(typeof(myName));

//object
var myObject = {
  myLastName: 'Flores',
  myFullName: myName,
  someNumber: 8893,
}

//Loads the whole object
console.log(myObject)
// Loads only someNumber within my object
console.log(myObject.someNumber)

// array
var myArrayOfNumbers = [15, 88, 01, 103];
//1st element is listed #0
console.log(myArrayOfNumbers[0])

var thingsILike = ['Gis/Maps', 'Architecture', 'Urban Design and Planning']

thingsILike.forEach(function(thing){
  console.log(things);
  //Make an object in htmal
  $('.like-list').append('<li>' +thing+ '</li>')
}
)
