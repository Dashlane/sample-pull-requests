var languages = window.languages;
var popups = window.AwesomePopups;

window.contactUsFormSubmitted = function(isSuccess) {
  var successText = 'Thank you for contacting us!';
  var errorText = 'Sadly, we could not send the email.';

  if (languages.enabled() && languages.current === 'fr') {
    successText = 'Merci de nous avoir contacter!';
    errorText = 'Pardon. Impossible d’envoyer email.';
  }

  if (isSuccess) {
    popups.show({
      icon: 'icons/checkmark.png',
      text: successText
    });
  } else {
    popups.showError(errorText);
  }
};

window.surveyTaken = function() {
  popups.show({
    text: 'Thank you for taking our survey!'
  });
};
