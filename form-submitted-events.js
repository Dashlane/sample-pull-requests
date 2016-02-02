var languages = window.languages;
var popups = window.AwesomePopups;

window.contactUsFormSubmitted = function(isSuccess) {
  if (isSuccess) {
    popups.show({
      icon: 'icons/checkmark.png',
      text: languages.translate('contact-us-success')
    });
  } else {
    popups.showError(languages.translate('contact-us-failed'));
  }
};

window.surveyTaken = function() {
  popups.show({
    text: 'Thank you for taking our survey!'
  });
};
