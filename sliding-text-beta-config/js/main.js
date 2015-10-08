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
	var $bckgrdClr = $('#bckgrdClr');
	var $txtClr = $('#txtClr');
	var $wthrFreq = $('#wthrFreq');
	var $useCelsius = $('#useCelsius');
	var $oPrefix = $('#oPrefix');
	var $iClrs = $('#iClrs');
	var $wthrDtAlign = $('#wthrDtAlign');
	var $hrMinAlign = $('#hrMinAlign');

	if (localStorage.bckgrdClr) {
		$bckgrdClr[0].value = localStorage.bckgrdClr;
		$txtClr[0].value = localStorage.txtClr;
		$wthrFreq.val(localStorage.weatherFrequency);
		$wthrDtAlign.val("1");
		$wthrDtAlign.val(localStorage.wthrDtAlign);
		$hrMinAlign.val("0");
		$hrMinAlign.val(localStorage.hrMinAlign);

		$useCelsius[0].checked = false;
		if (localStorage.useCelsius == "1")
			$useCelsius[0].checked = true;
			
		$oPrefix[0].checked = false;
		if (localStorage.oPrefix == "1")
			$oPrefix[0].checked = true;
		
		$iClrs[0].checked = false;
		if (localStorage.iClrs == "1")
			$iClrs[0].checked = true;

	}
}

function getAndStoreConfigData() {
	var $bckgrdClr = $('#bckgrdClr');
	var $txtClr = $('#txtClr');
	var $wthrFreq = $('#wthrFreq');
	var $useCelsius = $('#useCelsius');
    	var $oPrefix = $('#oPrefix');
    	var $iClrs = $('#iClrs');
    	var $wthrDtAlign = $('#wthrDtAlign');
	var $hrMinAlign = $('#hrMinAlign');
        
        var use_Celsius = 0;
        var display_Prefix = 0;
        var invert_Colors = 0;
	
        if ($useCelsius[0].checked)
            use_Celsius = 1;
	
	if ($oPrefix[0].checked)
	    display_Prefix = 1;
	
        if ($iClrs[0].checked)
            invert_Colors = 1;

	var options = {
		bckgrdClr: $bckgrdClr.val(),
		txtClr: $txtClr.val(),
		weatherFrequency: $wthrFreq.val(),
		useCelsius: use_Celsius,
        	oPrefix: display_Prefix,
        	iClrs: invert_Colors,
        	wthrDtAlign: $wthrDtAlign.val(),
        	hrMinAlign: $hrMinAlign.val()
	};

	localStorage.bckgrdClr = options.bckgrdClr;
	localStorage.txtClr = options.txtClr;
	localStorage.wthrFreq = options.wthrFreq;
	localStorage.useCelsius = options.useCelsius;
	localStorage.oPrefix = options.oPrefix;
	localStorage.iClrs = options.iClrs;
	localStorage.wthrDtAlign = options.wthrDtAlign;
	localStorage.hrMinAlign = options.hrMinAlign;

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
