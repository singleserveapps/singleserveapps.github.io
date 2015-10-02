function getConfigData() {
    var backgroundColorPicker = document.getElementById('backgroundColorPicker');
    var textColorPicker = document.getElementById('textColorPicker');
    var displayWeather = document.getElementById('displayWeather');
 
    var options = {
      'backgroundColor': backgroundColorPicker.value,
      'textColor': textColorPicker.value,
      'displayWeather': displayWeather.checked
    }

    // Save for next launch
    localStorage['backgroundColorPicker'] = options['backgroundColorPicker'];
    localStorage['textColorPicker'] = options['textColorPicker'];
    localStorage['displayWeather'] = options['displayWeather'];

    console.log('Got options: ' + JSON.stringify(options));
    return options;
};

 var submitButton = document.getElementById('submitButton');
  submitButton.addEventListener('click', function() {
    console.log('Submit');

    // Set the return URL depending on the runtime environment
    var return_to = getQueryParam('return_to', 'pebblejs://close#');
    document.location = return_to + encodeURIComponent(JSON.stringify(getConfigData()));
  });

  (function() {
    var backgroundColorPicker = document.getElementById('backgroundColorPicker');
    var textColorPicker = document.getElementById('textColorPicker');
    var displayWeather = document.getElementById('displayWeather');

    // Load any previously saved configuration, if available
    if(localStorage['displayWeather']) {

      displayWeather.checked = localStorage['displayWeather'];
      backgroundColorPicker.value = localStorage['backgroundColorPicker'];
      textColorPicker.value = localStorage['textColorPicker'];
    }
  })();

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
