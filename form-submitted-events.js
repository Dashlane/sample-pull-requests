var languages = window.languages;
var popups = window.AwesomePopups;

window.contactUsFormSubmitted = function(isSuccess) {
  if (isSuccess) {
    var text = 'Thank you for contacting us!'
    if (languages.enabled() && languages.current === 'fr') {
      // text = 'Merci de nous écrire!'
      text = 'Merci de nous avoir contacter!'
    }
    popups.show({
      icon: 'icons/checkmark.png',
      text: text
    });
  } else {
    if (languages.enabled() && languages.current === 'fr') {
      popups.showError('Pardon. Impossible d’envoyer email.');
    } else {
      popups.showError('Sadly, we could not send the email.');
    }
  }
};

window.surveyTaken = function() {
  popups.show({
    text: 'Thank you for taking our survey!'
  });
};
