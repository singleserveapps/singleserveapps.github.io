(function () {
    loadOptions();
    submitHandler();
})();

function submitHandler() {
    var $submitButton = $('#submitButton');

    $submitButton.on('click', function () {
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

    if (localStorage.backgroundColor) {
        $backgroundColorPicker[0].value = localStorage.backgroundColor;
        $hrColorPicker[0].value = localStorage.hrColor;
        $minColorPicker[0].value = localStorage.minColor;
        $wsdColorPicker[0].value = localStorage.wsdColor;
    }
}

function getAndStoreConfigData() {
    var $backgroundColorPicker = $('#backgroundColorPicker');
    var $hrColorPicker = $('#hrColorPicker');
    var $minColorPicker = $('#minColorPicker');
    var $wsdColorPicker = $('#wsdColorPicker');

    var options = {
        backgroundColor: $backgroundColorPicker.val(),
        hrColor: $hrColorPicker.val(),
        minColor: $minColorPicker.val(),
        wsdColor: $wsdColorPicker.val(),
    };

    localStorage.backgroundColor = options.backgroundColor;
    localStorage.hrColor = options.hrColor;
    localStorage.minColor = options.minColor;
    localStorage.wsdColor = options.wsdColor;

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
