var popups = window.AwesomePopups;

window.contactUsFormSubmitted = function(isSuccess) {
  if (isSuccess) {
    popups.show({
      icon: 'icons/checkmark.png',
      text: 'Thank you for contacting us!'
    });
  } else {
    popups.showError('Sadly, we could not send the email.');
  }
};

window.surveyTaken = function() {
  popups.show({
    text: 'Thank you for taking our survey!'
  });
};
