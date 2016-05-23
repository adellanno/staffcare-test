$(document).ready(function() {

$('#amount_submit').prop('disabled', true);
$('.inputform').change(function() { // when form changes, run inspectAllInputFields function
   inspectAllInputFields();
});

$('#amount_submit').click(function() {
  saveXMLFiles()
  return false;
})

$.ajax({
    url: 'main_xml.xml',
    async: false,
    dataType: "xml",
    success: function(response) {
      data = response;
    }
});

});

var validationCheck = false;

function saveXMLFiles() {
  var count = 0;
  $('.inputform').each(function() {
    if (count == 0) { // save amount
      inputValidation(this.value)
      saveAmount(this.value);
      count++;
    } else {  // save charity name
      saveCharity(this.value);
    }
  });
  validationCheck = false;
}

function saveAmount(input) {
  if (validationCheck) $('.current_selection:eq(2)').text("£" + input);
}

function saveCharity(input) {
  if (validationCheck) $('.current_selection:eq(0)').text(input)
}

function inspectAllInputFields() {
  var count = 0;
  $('.inputform').each(function() {
    if ($(this).val() === '') {
     count++;
    }
    if (count == 0) {
      $('#amount_submit').prop('disabled', false);
    } else {
      $('#amount_submit').prop('disabled', true);
    }
  });
}

function inputValidation(input) {
  var value = parseInt(input, 10);
    if (/^\d*\.?\d{0,2}$/.test(input) === false) {
      alert("Invalid amount, please limit to two decimal places")
  } else if ( value < $(data).find('options').attr('minimum') ) {
      alert("Please enter £1 or more")
  } else if ( value > $(data).find('options').attr('maximum') ) {
      alert("Please enter £11666.67 or less")
  } else {
      validationCheck = true;
  }
}
