(function () {
	loadOptions();
	submitHandler();
})();

function submitHandler() {
	var $submitButton = $('#submitButton');

	$submitButton.on('click', function() {
		console.log('Submit');

		var return_to = getQueryParam('return_to', 'pebblejs://close#');
		document.location = return_to + encodeURIComponent(JSON.stringify(getAndStoreConfigData()));
	});
}

function loadOptions() {
	var $backgroundColorPicker = $('#backgroundColorPicker');
	var $textColorPicker = $('#textColorPicker');
	var $weatherFrequencySlider = $('#weatherFrequencySlider');
	var $useCelsius = $('#useCelsius');
	var $displayPrefix = $('#displayPrefix');
	var $invertColors = $('#invertColors');

	if (localStorage.backgroundColor) {
		$backgroundColorPicker[0].value = localStorage.backgroundColor;
		$textColorPicker[0].value = localStorage.textColor;
		$weatherFrequencySlider.value = localStorage.weatherFrequency;

		$useCelsius[0].checked = localStorage.useCelsius;
		$displayPrefix[0].checked = localStorage.displayPrefix;
		$invertColors[0].checked = localStorage.invertColors;
		//$invertColors[0].checked = localStorage.invertColors === 'true';
		
	}
}

function getAndStoreConfigData() {
	var $backgroundColorPicker = $('#backgroundColorPicker');
	var $textColorPicker = $('#textColorPicker');
	var $weatherFrequencySlider = $('#weatherFrequencySlider');
	var $useCelsius = $('#useCelsius');
        var $displayPrefix = $('#displayPrefix');
        var $invertColors = $('#invertColors');
        var use_Celsius = 0;
        var display_Prefix = 0;
        var invert_Colors = 0;
	
        if ($useCelsius[0].checked)
            use_Celsius = 1;
	
	if ($displayPrefix[0].checked)
	    display_Prefix = 1;
	
        if ($invertColors[0].checked)
            invert_Colors = 1;

	var options = {
		backgroundColor: $backgroundColorPicker.val(),
		textColor: $textColorPicker.val(),
		weatherFrequency: $weatherFrequencySlider.val(),
		useCelsius: use_Celsius,
        	displayPrefix: display_Prefix,
        	invertColors: invert_Colors
	};

	localStorage.backgroundColor = options.backgroundColor;
	localStorage.textColor = options.textColor;
	localStorage.weatherFrequency = options.weatherFrequency;
	localStorage.useCelsius = options.useCelsius;
	localStorage.displayPrefix = options.displayPrefix;
	localStorage.invertColors = options.invertColors;

	console.log('Got options: ' + JSON.stringify(options));
	return options;
}

function getQueryParam(variable, defaultValue) {
  var query = location.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (pair[0] === variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  return defaultValue || false;
}
