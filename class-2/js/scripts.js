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
