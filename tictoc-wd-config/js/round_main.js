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
	var $shakeforLoHi = $('#shakeforLoHi');
	var $useCelsius = $('#useCelsius');
	var $displayDate = $('#displayDate');
	var $displayDigitalTime = $('#displayDigitalTime');
	var $displayDots369 = $('#displayDots369');
	var $weatherDateDTimeReadability = $('#weatherDateDTimeReadability');

	if (localStorage.backgroundColor) {
		$backgroundColorPicker[0].value = localStorage.backgroundColor;
		$textColorPicker[0].value = localStorage.textColor;
		$weatherFrequencySlider.val(localStorage.weatherFrequency);
		$displayDate.val("0");
		$displayDate.val(localStorage.displayDate);
		$displayDigitalTime.val("0");
		$displayDigitalTime.val(localStorage.displayDigitalTime);
		$displayDots369.val("0");
		$displayDots369.val(localStorage.displayDots369);
		$weatherDateDTimeReadability.val("0");
		$weatherDateDTimeReadability.val(localStorage.weatherDateDTimeReadability);


		$shakeforLoHi[0].checked = false;
		if (localStorage.shakeforLoHi == "1")
			$shakeforLoHi[0].checked = true;
		
		$useCelsius[0].checked = false;
		if (localStorage.useCelsius == "1")
			$useCelsius[0].checked = true;
		
		$displayDate[0].checked = false;
		if (localStorage.displayDate == "1")
			$displayDate[0].checked = true;
		
		$displayDigitalTime[0].checked = false;
		if (localStorage.displayDigitalTime == "1")
			$displayDigitalTime[0].checked = true;
		
		$displayDots369[0].checked = false;
		if (localStorage.displayDots369 == "1")
			$displayDots369[0].checked = true;
	
		$weatherDateDTimeReadability[0].checked = false;
		if (localStorage.weatherDateDTimeReadability == "1")
			$weatherDateDTimeReadability[0].checked = true;
	}
}

function getAndStoreConfigData() {
	var $backgroundColorPicker = $('#backgroundColorPicker');
	var $textColorPicker = $('#textColorPicker');
	var $weatherFrequencySlider = $('#weatherFrequencySlider');
	var $shakeforLoHi = $('#shakeforLoHi');
	var $useCelsius = $('#useCelsius');
	var $displayDate = $('#displayDate');
	var $displayDigitalTime = $('#displayDigitalTime');
	var $displayDots369 = $('#displayDots369');
	var $weatherDateDTimeReadability = $('#weatherDateDTimeReadability');
        
        var shake_for_LoHi = 0;
        var use_Celsius = 0;
        var invert_Colors = 0;
		var displayDate = 0;
		var displayDigitalTime = 0;
		var displayDots369 = 0;
		var weatherdatedtime_readability = 0;
	
	if ($shakeforLoHi[0].checked)
		shake_for_LoHi = 1;

        if ($useCelsius[0].checked)
            use_Celsius = 1;
		
		if ($displayDate[0].checked)
			displayDate = 1;

		if ($displayDigitalTime[0].checked)
			displayDigitalTime = 1;
		
		if ($displayDots369[0].checked)
			displayDots369 = 1;

		if ($weatherDateDTimeReadability[0].checked)
			weatherdatedtime_readability = 1;

	var options = {
		backgroundColor: $backgroundColorPicker.val(),
		textColor: $textColorPicker.val(),
		weatherFrequency: $weatherFrequencySlider.val(),
		shakeforLoHi: shake_for_LoHi,
		useCelsius: use_Celsius,
		displayDate: displayDate,
		displayDigitalTime: displayDigitalTime,
		displayDots369: displayDots369,		
		weatherDateDTimeReadability: weatherdatedtime_readability
	};

	localStorage.backgroundColor = options.backgroundColor;
	localStorage.textColor = options.textColor;
	localStorage.weatherFrequency = options.weatherFrequency;
	localStorage.shakeforLoHi = options.shakeforLoHi;
	localStorage.useCelsius = options.useCelsius;
	localStorage.displayDate = options.displayDate;
	localStorage.displayDigitalTime = options.displayDigitalTime;
	localStorage.displayDots369 = options.displayDots369;
	localStorage.weatherDateDTimeReadability = options.weatherDateDTimeReadability;

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
