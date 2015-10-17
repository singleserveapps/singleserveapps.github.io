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
	var $weatherDateAlignment = $('#weatherDateAlignment');
	var $hourMinutesAlignment = $('#hourMinutesAlignment');
	var $hourMinutesReadability = $('#hourMinutesReadability');
	var $weatherDateReadability = $('#weatherDateReadability');

	if (localStorage.backgroundColor) {
		$backgroundColorPicker[0].value = localStorage.backgroundColor;
		$textColorPicker[0].value = localStorage.textColor;
		$weatherFrequencySlider.val(localStorage.weatherFrequency);
		$weatherDateAlignment.val("1");
		$weatherDateAlignment.val(localStorage.weatherDateAlignment);
		$hourMinutesAlignment.val("0");
		$hourMinutesAlignment.val(localStorage.hourMinutesAlignment);
		$hourMinutesReadability.val("0");
		$hourMinutesReadability.val(localStorage.hourMinutesReadability);
		$weatherDateReadability.val("0");
		$weatherDateReadability.val(localStorage.weatherDateReadability);

		
		$useCelsius[0].checked = false;
		if (localStorage.useCelsius == "1")
			$useCelsius[0].checked = true;
			
		$displayPrefix[0].checked = false;
		if (localStorage.displayPrefix == "1")
			$displayPrefix[0].checked = true;
		
		$hourMinutesReadability[0].checked = false;
		if (localStorage.hourMinutesReadability == "1")
			$hourMinutesReadability[0].checked = true;
		
		$weatherDateReadability[0].checked = false;
		if (localStorage.weatherDateReadability == "1")
			$weatherDateReadability[0].checked = true;
	}
}

function getAndStoreConfigData() {
	var $backgroundColorPicker = $('#backgroundColorPicker');
	var $textColorPicker = $('#textColorPicker');
	var $weatherFrequencySlider = $('#weatherFrequencySlider');
	var $useCelsius = $('#useCelsius');
	var $displayPrefix = $('#displayPrefix');
	var $weatherDateAlignment = $('#weatherDateAlignment');
	var $hourMinutesAlignment = $('#hourMinutesAlignment');
	var $hourMinutesReadability = $('#hourMinutesReadability');
	var $weatherDateReadability = $('#weatherDateReadability');
        
        var use_Celsius = 0;
        var display_Prefix = 0;
        var invert_Colors = 0;
		var hourminutes_readability = 0;
		var weatherdate_readability = 0;
	
        if ($useCelsius[0].checked)
            use_Celsius = 1;
	
		if ($displayPrefix[0].checked)
			display_Prefix = 1;
		
		if ($hourMinutesReadability[0].checked)
			hourminutes_readability = 1;

		if ($weatherDateReadability[0].checked)
			weatherdate_readability = 1;
		

	var options = {
		backgroundColor: $backgroundColorPicker.val(),
		textColor: $textColorPicker.val(),
		weatherFrequency: $weatherFrequencySlider.val(),
		useCelsius: use_Celsius,
        displayPrefix: display_Prefix,
        weatherDateAlignment: $weatherDateAlignment.val(),
        hourMinutesAlignment: $hourMinutesAlignment.val(),
		hourMinutesReadability: hourminutes_readability,
		weatherDateReadability: weatherdate_readability
	};

	localStorage.backgroundColor = options.backgroundColor;
	localStorage.textColor = options.textColor;
	localStorage.weatherFrequency = options.weatherFrequency;
	localStorage.useCelsius = options.useCelsius;
	localStorage.displayPrefix = options.displayPrefix;
	localStorage.weatherDateAlignment = options.weatherDateAlignment;
	localStorage.hourMinutesAlignment = options.hourMinutesAlignment;
	localStorage.hourMinutesReadability = options.hourMinutesReadability;
	localStorage.weatherDateReadability = options.weatherDateReadability;

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
