const firebaseApi = require('./firebaseApi');

firebaseApi.initialize();

$('#clear-suggestion').click(() => {
  $('#question').val('');
  $('#submitter-name').val('');
});

$('#submit-suggestion').click(() => {
  const text = $('#question').val();
  if (text.length > 0) {
    const submission = {
      timestamp: Date.now(),
      name: $('#submitter-name').val(),
      text: $('#question').val(),
    };
    firebaseApi.addSubmission(submission)
      .catch(err => alert(err.message))
      .then(alert('Submission accepted!'));
  } else {
    alert('Please enter some text into the suggestion field.');
  }
});
