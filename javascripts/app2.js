
  var app = angular.module("sampleApp", ["firebase"]);

  app.controller("SampleCtrl", function($scope, $firebaseArray) {
    var ref = new Firebase("https://sizzling-fire-1319.firebaseio.com/Maskiner");
    // create a synchronized array

    $scope.machines = $firebaseArray(ref);
  });

  app.controller('RefreshCtrl', function($scope, $compile){
    $scope.refresh = function(textTocompile){
        $("#offerListArticles").append(
          $compile(textTocompile)($scope));
        $scope.$apply();
    }
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

  }});
