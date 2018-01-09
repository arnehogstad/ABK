$(document).ready(function() {

var globalHentet = [];
var globalTilbudsNnrArray = [];
var globalTilbudsArray = [];
  var formatNumberWithThousandSpace = function (energyValue) {
    var millions = "";
    var hundredThousands = "";
    var tenThousands ="";
    if(energyValue >= 1000000){
      var millions = Math.floor(energyValue/1000000);
      energyValue = energyValue - millions*1000000;
      if(energyValue < 100000){
        hundredThousands = 0;
        if(energyValue < 10000){
          tenThousands = 0;
        }
      }
    }

    if (energyValue >= 1000){
    var thousands = Math.floor(energyValue/1000);
    var hundreds = Math.floor((energyValue - thousands*1000)/100);
    var tens =  Math.floor((energyValue - thousands*1000 - hundreds*100)/10);
    var ones = Math.ceil(energyValue - thousands*1000 - hundreds*100 - tens*10);
    if (ones == 10) {ones = 9;}
    return millions + ' ' + hundredThousands + tenThousands + thousands + ' ' + hundreds + tens + ones
    } else {
    return energyValue;
    }
  };



jQuery('.navButton8').on('click',function(event){
  globalHentet = [];
  $("#myOfferSection").html("");
   globalTilbudsNnrArray = [];
   globalTilbudsArray = [];
  var kunde = $("#userID").val();
  var myDataRef = new Firebase('https://sizzling-fire-1319.firebaseio.com/tilbud/tilbudsliste');
  var n = 100;
  myDataRef.orderByChild("pos").on("child_added", function(snapshot) {
    var tilbudsnummer = snapshot.key();
    interMedObject = snapshot.exportVal();
    if( interMedObject.kundeID == kunde ){
    globalTilbudsArray.push(interMedObject);
    globalTilbudsNnrArray.push(tilbudsnummer);
  $("#myOfferSection").append(
    '</div>'+
    '<div class="tilbudsOverskrift">'+
      '</span><span class="tilbudsOverskrift tilbudsOverskrift1" id="tilbudsnummerDivIdentifier'+ n +'">'+ tilbudsnummer + '</span>'+
      '<span class="tilbudsOverskrift tilbudsOverskriftDato"> Dato: </span><span class="tilbudsOverskrift tilbudsOverskriftDatoVerdi">'+ interMedObject.dato + '</span>'+
      '<span class="tilbudsOverskrift tilbudsOverskriftSum"> Tilbudssum: </span><span class="tilbudsOverskrift tilbudsOverskriftSumVerdi"> kr.'+ formatNumberWithThousandSpace(interMedObject.omsetning) + ',-</span>'+
      '<span class="tilbudsOverskrift tilbudsOverskriftNavn"> Tilbudsnavn: </span><span class="tilbudsOverskrift tilbudsOverskriftNavnVerdi">'+ interMedObject.tilbudsnavn + '</span>'+
      '<span class="tilbudsOverskriftKnapp myofferButtonShow" id='+ n +'><Button type="button" class="generalButton2" >Vis</Button></span>'+
      '<span class="tilbudsOverskriftKnapp myofferButtonPrint" id='+ n +'><Button type="button" class="generalButton2" > Print</Button></span>'+
      '</div>'+
    '<div class="tilbudsNummerVisning" id="tilbudsnummerDiv' + n +'" hidden>'+
    '</div>')
    n = n + 1 ;
    }
  });
});


  $('#myOfferSection').on("click", "span.myofferButtonShow", function(event){
    var kunde = $("#userID").val();
    var plassering = 'tilbudsnummerDiv' + this.id;
    var hentTilbudsnrID = 'tilbudsnummerDivIdentifier' + this.id;
    var insertBoolean = "ja";
    var lengde = 0;
    for (m=0; m < globalHentet.length; m++){
      if(globalHentet[m] == hentTilbudsnrID ){
        insertBoolean = "nei";
        if( $(document.getElementById ( this.id )).text() == "Skjul" ){
                $(document.getElementById ( plassering )).slideUp();
                $(document.getElementById ( this.id )).html('<Button type="button" class="generalButton2" >Vis</Button>');
        }else{
        //$(document.getElementById ( plassering )).show();
        $(document.getElementById ( this.id )).html('<Button type="button" class="generalButton2" >Skjul</Button>');
        $(document.getElementById ( plassering )).slideDown();
          }
        }
    }
    if (insertBoolean == "ja"){
        $(document.getElementById ( this.id )).html('<Button type="button" class="generalButton2" >Skjul</Button>');
      globalHentet.push(hentTilbudsnrID);
    var kunde = $("#userID").val();

    for (n = 0; n < globalTilbudsNnrArray.length ;n++ ) {
      if (globalTilbudsNnrArray[n] == $(document.getElementById ( hentTilbudsnrID )).text()){
        interMedObject = globalTilbudsArray[n];
        for (var key in interMedObject['antall']){
          lengde = lengde+1;
          }


        $(document.getElementById ( plassering )).append(
          '</br>'+
            '<p class="inputP">'+
              '<p class="inputR1" style="font-weight:bold; background-color: rgba(192,192,192,0.5);">Artikkelnr</p>'+
              '<p class="inputR22" style="font-weight:bold; background-color: rgba(192,192,192,0.5);">Artikkelnavn</p>'+
              '<p class="inputR3" style="font-weight:bold; background-color: rgba(192,192,192,0.5);">Bruttopris</p>'+
              '<p class="inputR4" style="font-weight:bold; background-color: rgba(192,192,192,0.5);">Rab.I</p>'+
              '<p class="inputR5" style="font-weight:bold; background-color: rgba(192,192,192,0.5);">Antall</p>'+
              '<p class="inputR6" style="font-weight:bold; background-color: rgba(192,192,192,0.5);">Nettopris</p>'+
              '<p class="fillerRight" style="font-weight:bold; background-color: rgba(192,192,192,0.5);"></p>'+
            '</p>'
          )
              for (i = 0; i < lengde ; i++){
                $(document.getElementById ( plassering )).append(
                  '<p class="inputP">'+
                    '<p class="inputR1">'+ interMedObject.artikkel[i] +'</p>'+
                    '<p class="inputR22">'+ interMedObject.navn[i] +'</p>'+
                    '<p class="inputR3">'+ formatNumberWithThousandSpace(interMedObject.stykkpris[i])+'</p>'+
                    '<p class="inputR4">'+ interMedObject.rabatt  + '</p>'+
                    '<p class="inputR5">'+ interMedObject.antall[i] +'</p>'+
                    '<p class="inputR6">'+formatNumberWithThousandSpace(interMedObject.stykkpris[i] * interMedObject.antall[i] * (100 - interMedObject.rabatt)/100) +'</p>'+
                    '<p class="fillerRight"></p>'+
                  '</p>')
                  if ( i == lengde - 1) {
                    $(document.getElementById ( plassering )).append(
                    '</br>'+
                      '<p class="inputP">'+
                        '<p class="inputR1" style="font-weight:bold; "></p>'+
                        '<p class="inputR2" style="font-weight:bold; "></p>'+
                        '<p class="inputR3" style="font-weight:bold; "></p>'+
                        '<p class="inputR4" style="font-weight:bold; "></p>'+
                        '<p class="inputR55" style="font-weight:bold; text-align:left ; border-top: 1px solid lightgray; ">Sum tilbud</p>'+
                        '<p class="inputR6" style="font-weight:bold; text-align:right;  border-top: 1px solid lightgray; " >'+ formatNumberWithThousandSpace(interMedObject.sum) +'</p>'+
                        '<p class="fillerRight" style="font-weight:bold; "></p>'+
                      '</p>'+
                      '<p class="inputP">'+
                        '<p class="inputR1" style="font-weight:bold; "></p>'+
                        '<p class="inputR2" style="font-weight:bold; "></p>'+
                        '<p class="inputR3" style="font-weight:bold; "></p>'+
                        '<p class="inputR4" style="font-weight:bold; "></p>'+
                        '<p class="inputR55" style="font-weight:bold;  text-align:left; ">mva</p>'+
                        '<p class="inputR6" style="font-weight:bold; text-align:right;" >'+ formatNumberWithThousandSpace(interMedObject.mva) +'</p>'+
                        '<p class="fillerRight" style="font-weight:bold; "></p>'+
                      '</p>'+
                      '<p class="inputP">'+
                        '<p class="inputR1" style="font-weight:bold; "></p>'+
                        '<p class="inputR2" style="font-weight:bold; "></p>'+
                        '<p class="inputR3" style="font-weight:bold; "></p>'+
                        '<p class="inputR4" style="font-weight:bold; "></p>'+
                        '<p class="inputR55" style="font-weight:bold;  text-align:left; ">S&aeligravgift</p>'+
                        '<p class="inputR6" style="font-weight:bold; text-align:right; " >'+ formatNumberWithThousandSpace(interMedObject.avgift) +'</p>'+
                        '<p class="fillerRight" style="font-weight:bold; "></p>'+
                      '</p>'+
                      '<p class="inputP">'+
                        '<p class="inputR1" style="font-weight:bold; "></p>'+
                        '<p class="inputR2" style="font-weight:bold; "></p>'+
                        '<p class="inputR3" style="font-weight:bold; "></p>'+
                        '<p class="inputR4" style="font-weight:bold; "></p>'+
                        '<p class="inputR55" style="font-weight:bold;  text-align:left; ">Total</p>'+
                        '<p class="inputR6" style="font-weight:bold; text-align:right;" >'+ formatNumberWithThousandSpace(interMedObject.omsetning) +'</p>'+
                        '<p class="fillerRight" style="font-weight:bold; "></p>'+
                      '</p>'
                    )
                  }
              }
          }
    }
    $(document.getElementById ( plassering )).slideDown("slow");
  }});


});
