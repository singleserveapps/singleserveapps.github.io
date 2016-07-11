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
	var $hrColorPicker = $('#hrColorPicker');
	var $minColorPicker = $('#minColorPicker');	
	var $wsdColorPicker = $('#wsdColorPicker');
	var $weatherFrequencySlider = $('#weatherFrequencySlider');
	var $useGPS = $('#useGPS');
	var $weatherLocation = $('#weatherLocation');
	var $shakeforLoHi = $('#shakeforLoHi');
	var $useCelsius = $('#useCelsius');
	var $useBoldFontHr = $('#useBoldFontHr');
	var $useBoldFontMin = $('#useBoldFontMin');

	if (localStorage.backgroundColor) {
		$backgroundColorPicker[0].value = localStorage.backgroundColor;
		$hrColorPicker[0].value = localStorage.hrColor;		
		$minColorPicker[0].value = localStorage.minColor;
		$wsdColorPicker[0].value = localStorage.wsdColor;
		$weatherFrequencySlider.val(localStorage.weatherFrequency);
		$useGPS.val("0");
		$useGPS.val(localStorage.useGPS);
		$weatherLocation.val(localStorage.weatherLocation);
		$shakeforLoHi.val("0");
		$shakeforLoHi.val(localStorage.shakeforLoHi);
		$useCelsius.val("0");
		$useCelsius.val(localStorage.useCelsius);
		$useBoldFontHr.val("0");
		$useBoldFontHr.val(localStorage.useBoldFontHr);
		$useBoldFontMin.val("0");
		$useBoldFontMin.val(localStorage.useBoldFontMin);		

		$useGPS[0].checked = false;
		if (localStorage.useGPS == "1")
			$useGPS[0].checked = true;
		
		$shakeforLoHi[0].checked = false;
		if (localStorage.shakeforLoHi == "1")
			$shakeforLoHi[0].checked = true;
		
		$useCelsius[0].checked = false;
		if (localStorage.useCelsius == "1")
			$useCelsius[0].checked = true;
		
		$useBoldFontHr[0].checked = false;
		if (localStorage.useBoldFontHr == "1")
			$useBoldFontHr[0].checked = true;

		$useBoldFontMin[0].checked = false;
		if (localStorage.useBoldFontMin == "1")
			$useBoldFontMin[0].checked = true;				
	}
}

function getAndStoreConfigData() {
	var $backgroundColorPicker = $('#backgroundColorPicker');
	var $hrColorPicker = $('#hrColorPicker');
	var $minColorPicker = $('#minColorPicker');
	var $wsdColorPicker = $('#wsdColorPicker');
	var $weatherFrequencySlider = $('#weatherFrequencySlider');
	var $useGPS = $('#useGPS');
	var $weatherLocation = $('#weatherLocation');
	var $shakeforLoHi = $('#shakeforLoHi');
	var $useCelsius = $('#useCelsius');
	var $useBoldFontHr = $('#useBoldFontHr');
	var $useBoldFontMin = $('#useBoldFontMin');		
	
	var useGPS = 0;
	var shake_for_LoHi = 0;
	var use_Celsius = 0;
	var displayDigitalTime = 0;
	var useBoldFontHr = 0;
	var useBoldFontMin = 0;

	if ($useGPS[0].checked)
		useGPS = 1;
	
	if ($shakeforLoHi[0].checked)
		shake_for_LoHi = 1;

	if ($useCelsius[0].checked)
		use_Celsius = 1;
	
	if ($useBoldFontHr[0].checked)
		useBoldFontHr = 1;

	if ($useBoldFontMin[0].checked)
		useBoldFontMin = 1;	

	var weatherLocationVal = '';
	if ($weatherLocation.val().length == 5)
		weatherLocationVal = $weatherLocation.val() + ' US';
	else
		weatherLocationVal = $weatherLocation.val();
	
	var options = {
		backgroundColor: $backgroundColorPicker.val(),
		hrColor: $hrColorPicker.val(),		
		minColor: $minColorPicker.val(),
		wsdColor: $wsdColorPicker.val(),
		weatherFrequency: $weatherFrequencySlider.val(),
		useGPS: useGPS,
		weatherLocation: weatherLocationVal,
		shakeforLoHi: shake_for_LoHi,
		useCelsius: use_Celsius,
		useBoldFontHr: useBoldFontHr,
		useBoldFontMin: useBoldFontMin,			
		displayDigitalTime: displayDigitalTime
	};

	localStorage.backgroundColor = options.backgroundColor;
	localStorage.hrColor = options.hrColor;
	localStorage.minColor = options.minColor;
	localStorage.wsdColor = options.wsdColor;
	localStorage.weatherFrequency = options.weatherFrequency;
	localStorage.useGPS = options.useGPS;
	localStorage.weatherLocation = options.weatherLocation;
	localStorage.shakeforLoHi = options.shakeforLoHi;
	localStorage.useCelsius = options.useCelsius;
	localStorage.useBoldFontHr = options.useBoldFontHr;
	localStorage.useBoldFontMin = options.useBoldFontMin;		
	localStorage.displayDigitalTime = options.displayDigitalTime;

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
