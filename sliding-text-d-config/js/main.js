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
	var $displayPrefix = $('#displayPrefix');
	var $dateAlignment = $('#dateAlignment');
	var $hourMinutesAlignment = $('#hourMinutesAlignment');

	if (localStorage.backgroundColor) {
		$backgroundColorPicker[0].value = localStorage.backgroundColor;
		$textColorPicker[0].value = localStorage.textColor;
		$dateAlignment.val("1");
		$dateAlignment.val(localStorage.dateAlignment);
		$hourMinutesAlignment.val("0");
		$hourMinutesAlignment.val(localStorage.hourMinutesAlignment);

		$displayPrefix[0].checked = false;
		if (localStorage.displayPrefix == "1")
			$displayPrefix[0].checked = true;
	}
}

function getAndStoreConfigData() {
	var $backgroundColorPicker = $('#backgroundColorPicker');
	var $textColorPicker = $('#textColorPicker');
    var $displayPrefix = $('#displayPrefix');
	var $dateAlignment = $('#dateAlignment');
	var $hourMinutesAlignment = $('#hourMinutesAlignment');

	var display_Prefix = 0;
    var invert_Colors = 0;
	
	if ($displayPrefix[0].checked)
	    display_Prefix = 1;

	var options = {
		backgroundColor: $backgroundColorPicker.val(),
		textColor: $textColorPicker.val(),
        displayPrefix: display_Prefix,
        dateAlignment: $dateAlignment.val(),
        hourMinutesAlignment: $hourMinutesAlignment.val()
	};

	localStorage.backgroundColor = options.backgroundColor;
	localStorage.textColor = options.textColor;
	localStorage.displayPrefix = options.displayPrefix;
	localStorage.dateAlignment = options.dateAlignment;
	localStorage.hourMinutesAlignment = options.hourMinutesAlignment;

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
