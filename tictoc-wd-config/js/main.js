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
	var $useGPS = $('#useGPS');
	var $weatherLocation = $('#weatherLocation');
	var $shakeforLoHi = $('#shakeforLoHi');
	var $useCelsius = $('#useCelsius');
	var $displayDate = $('#displayDate');
	var $displayMonth = $('#displayMonth');
	var $displayDigitalTime = $('#displayDigitalTime');
	var $displayDots369 = $('#displayDots369');
	var $weatherDateDTimeReadability = $('#weatherDateDTimeReadability');
	var $vibrateBT = $('#vibrateBT');
	var $useThinHands = $('#useThinHands');
	var $displayBattery = $('#displayBattery');

	if (localStorage.backgroundColor) {
		$backgroundColorPicker[0].value = localStorage.backgroundColor;
		$textColorPicker[0].value = localStorage.textColor;
		$weatherFrequencySlider.val(localStorage.weatherFrequency);
		$useGPS.val("0");
		$useGPS.val(localStorage.useGPS);
		$weatherLocation.val(localStorage.weatherLocation);
		$shakeforLoHi.val("0");
		$shakeforLoHi.val(localStorage.shakeforLoHi);
		$useCelsius.val("0");
		$useCelsius.val(localStorage.useCelsius);
		$displayDate.val("0");
		$displayDate.val(localStorage.displayDate);
		$displayMonth.val("0");
		$displayMonth.val(localStorage.displayMonth);
		$displayDigitalTime.val("0");
		$displayDigitalTime.val(localStorage.displayDigitalTime);
		$displayDots369.val("0");
		$displayDots369.val(localStorage.displayDots369);
		$weatherDateDTimeReadability.val("0");
		$weatherDateDTimeReadability.val(localStorage.weatherDateDTimeReadability);
		$vibrateBT.val("0");
		$vibrateBT.val(localStorage.vibrateBT);
		$useThinHands.val("0");
		$useThinHands.val(localStorage.useThinHands);
		$displayBattery.val("0");
		$displayBattery.val(localStorage.displayBattery);

		$useGPS[0].checked = false;
		if (localStorage.useGPS == "1")
			$useGPS[0].checked = true;
		
		$shakeforLoHi[0].checked = false;
		if (localStorage.shakeforLoHi == "1")
			$shakeforLoHi[0].checked = true;
		
		$useCelsius[0].checked = false;
		if (localStorage.useCelsius == "1")
			$useCelsius[0].checked = true;
		
		$displayDate[0].checked = false;
		if (localStorage.displayDate == "1")
			$displayDate[0].checked = true;
		
		$displayMonth[0].checked = false;
		if (localStorage.displayMonth == "1")
			$displayMonth[0].checked = true;
		
		$displayDigitalTime[0].checked = false;
		if (localStorage.displayDigitalTime == "1")
			$displayDigitalTime[0].checked = true;
		
		$displayDots369[0].checked = false;
		if (localStorage.displayDots369 == "1")
			$displayDots369[0].checked = true;
	
		$weatherDateDTimeReadability[0].checked = false;
		if (localStorage.weatherDateDTimeReadability == "1")
			$weatherDateDTimeReadability[0].checked = true;			
			
		$vibrateBT[0].checked = false;
		if (localStorage.vibrateBT == "1")
			$vibrateBT[0].checked = true;
		
		$useThinHands[0].checked = false;
		if (localStorage.useThinHands == "1")
			$useThinHands[0].checked = true;
		
		$displayBattery[0].checked = false;
		if (localStorage.displayBattery == "1")
			$displayBattery[0].checked = true;
	}
}

function getAndStoreConfigData() {
	var $backgroundColorPicker = $('#backgroundColorPicker');
	var $textColorPicker = $('#textColorPicker');
	var $weatherFrequencySlider = $('#weatherFrequencySlider');
	var $useGPS = $('#useGPS');
	var $weatherLocation = $('#weatherLocation');
	var $shakeforLoHi = $('#shakeforLoHi');
	var $useCelsius = $('#useCelsius');
	var $displayDate = $('#displayDate');
	var $displayMonth = $('#displayMonth');
	var $displayDigitalTime = $('#displayDigitalTime');
	var $displayDots369 = $('#displayDots369');
	var $weatherDateDTimeReadability = $('#weatherDateDTimeReadability');
	var $vibrateBT = $('#vibrateBT');
	var $useThinHands = $('#useThinHands');
	var $displayBattery = $('#displayBattery');	
	
	var useGPS = 0;
	var shake_for_LoHi = 0;
	var use_Celsius = 0;
	var invert_Colors = 0;
	var displayDate = 0;
	var displayMonth = 0;
	var displayDigitalTime = 0;
	var displayDots369 = 0;
	var weatherdatedtime_readability = 0;
	var vibrateBT = 0;
	var useThinHands = 0;
	var displayBattery = 0;		

	if ($useGPS[0].checked)
		useGPS = 1;
	
	if ($shakeforLoHi[0].checked)
		shake_for_LoHi = 1;

	if ($useCelsius[0].checked)
		use_Celsius = 1;
	
	if ($displayDate[0].checked)
		displayDate = 1;
	
	if ($displayMonth[0].checked)
		displayMonth = 1;

	if ($displayDigitalTime[0].checked)
		displayDigitalTime = 1;
	
	if ($displayDots369[0].checked)
		displayDots369 = 1;

	if ($weatherDateDTimeReadability[0].checked)
		weatherdatedtime_readability = 1;
	
	if ($vibrateBT[0].checked)
		vibrateBT = 1;

	if ($useThinHands[0].checked)
		useThinHands = 1;

	if ($displayBattery[0].checked)
		displayBattery = 1;
	
	var options = {
		backgroundColor: $backgroundColorPicker.val(),
		textColor: $textColorPicker.val(),
		weatherFrequency: $weatherFrequencySlider.val(),
		useGPS: useGPS,
		weatherLocation: $weatherLocation.val(),
		shakeforLoHi: shake_for_LoHi,
		useCelsius: use_Celsius,
		displayDate: displayDate,
		displayMonth: displayMonth,
		displayDigitalTime: displayDigitalTime,
		displayDots369: displayDots369,		
		weatherDateDTimeReadability: weatherdatedtime_readability,
		vibrateBT: vibrateBT,
		useThinHands: useThinHands,
		displayBattery: displayBattery		
	};

	localStorage.backgroundColor = options.backgroundColor;
	localStorage.textColor = options.textColor;
	localStorage.weatherFrequency = options.weatherFrequency;
	localStorage.useGPS = options.useGPS;
	localStorage.weatherLocation = options.weatherLocation;
	localStorage.shakeforLoHi = options.shakeforLoHi;
	localStorage.useCelsius = options.useCelsius;
	localStorage.displayDate = options.displayDate;
	localStorage.displayMonth = options.displayMonth;
	localStorage.displayDigitalTime = options.displayDigitalTime;
	localStorage.displayDots369 = options.displayDots369;
	localStorage.weatherDateDTimeReadability = options.weatherDateDTimeReadability;
	localStorage.vibrateBT = options.vibrateBT;
	localStorage.useThinHands = options.useThinHands;
	localStorage.displayBattery = options.displayBattery;	

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
