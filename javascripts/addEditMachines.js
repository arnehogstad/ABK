//Button adding/editing machines to/in database
jQuery('.addEditMachine').on('click', function(event) {
jQuery('#addEditMachine').toggle('show');
jQuery('#machineAddWindow').toggle('show');
var myDataRef = new Firebase('https://sizzling-fire-1319.firebaseio.com');
var machineRef = myDataRef.child("Maskiner");
var n= 1;
machineRef.orderByChild("effectNom").on("child_added", function(snapshot) {
  if (n==1){
    $('#machineslist').html(('<br><strong class="green"> Machinelist </strong></br>'));
  }
  $('#machineslist').append($('<br>' + n + ' :' + snapshot.key() + '  Pnom :' + snapshot.val().effectNom + '  COP :' + snapshot.val().copMax + '</br>'));        n++;
});
});

//Button showing and hiding inputs relevant to machine,also hides buttons
jQuery('.hideMachineAddWindow').on('click', function(event) {
jQuery('#machineAddWindow').toggle('show');
jQuery('#addEditMachine').toggle('show');
});

//Button submitting new macihne
jQuery('.submitMachine').on('click', function(event) {
if ($('#nameInput').val() != "" &&
  $('#priceInput').val() != "" &&
  $('#copMaxInput').val() != "" &&
  $('#copMinInput').val() != "" &&
  $('#copPartialInput').val() != "" &&
  $('#effectMinInput').val() != "" &&
  $('#effectNomInput').val() != "") {
  var i = 0;
  var myDataRef = new Firebase('https://sizzling-fire-1319.firebaseio.com');
  var machineRef = myDataRef.child("Maskiner");
  var name = $('#nameInput').val();
  var price = parseFloat($('#priceInput').val());
  var copMax =  parseFloat($('#copMaxInput').val());
  var copMin =  parseFloat($('#copMinInput').val());
  var copPartial =  parseFloat($('#copPartialInput').val());
  var effectMin =  parseFloat($('#effectMinInput').val());
  var effectNom =  parseFloat($('#effectNomInput').val());
  machineRef.child(name).set({name: name, price: price, copMax: copMax, copMin: copMin, copPartial: copPartial, effectMin: effectMin, effectNom: effectNom});

    //adding counter to see if the text below shouhld be replaced, e.g. by removing something from databse
  var eventCounter = 0;
  machineRef.on('child_added', function(snapshot) {
      $('#messagesDiv').html('You succsessfully added:');
      displayMachineKeyValues(name, effectNom, copMax);
      eventCounter = 1;
  });

  machineRef.on('child_removed', function(oldChildSnapshot) {
    $('#messagesDiv').html('You succsessfully removed:' + oldChildSnapshot.key() )
    displayMachineKeyValues(oldChildSnapshot.key(), oldChildSnapshot.val().effectNom, oldChildSnapshot.val().copMax )

  });

    //Attach an asynchronous callback to read the data at our posts reference
    machineRef.on("value", function(snapshot) {
      $('#machineslist').html('');

          var n= 1;
          machineRef.orderByChild("effectNom").on("child_added", function(snapshot) {
            $('#machineslist').append($('<br> Machine' + n + ' :' + snapshot.key() + '  Pnom :' + snapshot.val().effectNom + '  COP :' + snapshot.val().copMax + '</br>'));
            n++;
          });

        });
        jQuery('#addEditMachine').toggle('show');
        jQuery('#machineAddWindow').toggle('show');
    }else {
    alert("please add all information");
    }
});
//TODO delete these or replace with json based upload////////////////////////////

//----------------------Places------------------------------------
//Button adding/editing Places to/in database
jQuery('.addEditPlace').on('click', function(event) {
    jQuery('#addEditPlace').toggle('show');
    jQuery('#placeAddWindow').toggle('show');
    });

//Button showing and hiding inputs relevant to place,also hides buttons
jQuery('.hidePlaceAddWindow').on('click', function(event) {
    jQuery('#placeAddWindow').toggle('show');
    jQuery('#addEditPlace').toggle('show');
});
//Button showing and hiding inputs relevant to place,also hides buttons
jQuery('.submitPlace').on('click', function(event) {
  jQuery('#addEditPlace').toggle('show');
  jQuery('#placeAddWindow').toggle('show');
});
