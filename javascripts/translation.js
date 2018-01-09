//Button showing and uodating values in the regulationArray
jQuery('.norwegian').on('click',function(event){

  //Navigasjonstekster
  $('#navItem1').html('Hjem');
  $('#navItem2').html('Areal og U-verdier');
  $('#navItem3').html('Fra energibehov');
  $('#navItem4').html('Normtall');

  //KategoriBildeKnapper øverst på siden
  $('#effectEnergyInfoAreaText').html('<span>Estimer effektbehov fra:<br /> -Areal<br />-U-verdier<br />-Temperatur<br /> -Luftmengde<br />-Lekkasjetall</span>');
  $('#effectEnergyInfoAreaDivText').html('Areal og U-verdier');
  $('#effectFromEnergyText').html('<span>Estimer effektbehov fra:<br /> Historisk energibehov</span>');
  $('#effectFromEnergyDivText').html('Fra energibehov');
  $('#effectEnergyInfoEmpiricalText').html('<span>Estimer energibehov fra:<br /> Normtall basert p&aring<br /> -Klimasone<br /> -Alder<br />-Byggtype<br />-Areal</span>');
  $('#effectEnergyInfoEmpiricalDivText').html('Normtall');
  $('#effectEnergyInfoRegulationText').html('<span>Estimer energibehov fra:<br /> -TEK10 eller TEK15<br /> -Klimasone<br /> -Bygningskategori<br /> -Areal</span>');
  $('#effectEnergyInfoRegulationDivText').html('Forskrifter');
  $('#energyCalculationText').html('<span>Bruk effektbehov for &aring:<br />-Velge varmepumpe<br />-Estimere energidekningsgrad<br />-Estimere SCOP<br />-Estimere besparelse</span>');
  $('#energyCalculationDivText').html('Energiberegning');
  $('#generateOfferText').html('<span>Generer et tilbud:<br />-Du bestemmer svartiden<br />-F&aring &oslashkt rabatt<br />-Bli mer selvstendig</span>');
  $('#generateOfferDivText').html('Generer tilbud');

  //Effektbehovstabell
  $('#effectCalcStandard').html('Velg standard');
  $('#effectCalcIndoortemp').html('Innend&oslashrs temperatur');
  $('#effectCalcDOT').html('DUT');
  $('#effectCalcColumnTitle1').html('Hva');
  $('#effectCalcColumnTitle2').html('Areal');
  $('#effectCalcColumnTitle3').html('U-verdi');
  $('#effectCalcColumnTitle4').html('T<span style="vertical-align: sub; font-size: 12px;">inne</span>');
  $('#effectCalcColumnTitle5').html('T<span style="vertical-align: sub; font-size: 12px;">ute</span>');
  $('#effectCalcColumnTitle6').html('SUM');
  $('#effectCalcRowTitle1').html('Fasade');
  $('#effectCalcRowTitle2').html('Gulv p&aring grunn');
  $('#effectCalcRowTitle3').html('Tak');
  $('#effectCalcRowTitle4').html('Vindu og d&oslashrer');
  $('#effectCalcRowTitle5').html('Gjenvinner');
  $('#effectCalcRowTitle6').html('Luft[m&sup3/h]');
  $('#effectCalcRowTitle7').html('T<span style="vertical-align: sub; font-size: 12px;">inne</span>');
  $('#effectCalcRowTitle8').html('T<span style="vertical-align: sub; font-size: 12px;">etter gjenvinner</span>');
  $('#effectCalcRowTitle9').html('Effektbehov');
  $('#effectCalcRowTitle10').html('Ventilasjon');
  $('#effectCalcRowTitle11').html('Volum');
  $('#effectCalcRowTitle12').html('Lekkasjetall');
  $('#effectCalcRowTitle13').html('Luftskifter/t');
  $('#effectCalcRowTitle14').html('Infiltrasjon');
  $('#effectCalcRowTitle15').html('SUM OPPVARMING');

  //Effekt fra energibehov
  $('#effectFromEnergyTextMunicipality').html('Kommune');
  $('#effectFromEnergyTextHeatingFrom').html('Varmebehov fra T<span style="vertical-align: sub; font-size: 12px;">ute</span>');
  $('#effectFromEnergyTextEnergy').html('Energibehov per &aringr');
  $('#effectFromEnergyTextResult').html('Estimert effektbehov ved DUT:');

  //Hstoriske normtalltabell
  $('#normtallBuildingYearText').html('Bygge&aringr');
  $('#normtallMunicipalityText').html('Kommune');
  $('#normtallBRAText').html('Oppvarmet areal');
  $('#normtallBuildingPeriodText').html('Bygge&aringr:');
  $('#normtallYearMeanText').html('&aringrsmiddeltemp:');
  $('#normtallEnergyNeedText1').html('Energibehov total');
  $('#normtallEnergyNeedText2').html('oppvarming og tappevann');
  $('#normtallColumnTitle1').html('Beskrivelse');
  $('#normtallColumnTitle2').html('Byggtype');
  $('#normtallColumnTitle3').html('Villa');
  $('#normtallColumnTitle4').html('Rekkehus');
  $('#normtallRowTitle1').html('1 etasje uten kjeller');
  $('#normtallRowTitle2').html('1 etasje med kjeller');
  $('#normtallRowTitle3').html('1 etasje med loft');
  $('#normtallRowTitle4').html('1 etasje med kjeller, innredet sokkel eller loft');
  $('#normtallRowTitle5').html('2 etasjer uten kjeller');
  $('#normtallRowTitle6').html('2 etasjer med kjeller');
  $('#normtallRowTitle7').html('2 etasjer med loft');
  $('#normtallRowTitle8').html('2 etasjer med kjeller, innredet sokkel eller loft');

  //Forskriftstabell
  $('#regulationBuildingStandardText').html('Byggestandard');
  $('#regulationMunicipalityText').html('Kommune');
  $('#regulationBuildingCategoryText').html('Bygningskategori');
  $('#regulationRowText1').html('Energiposter');
  $('#regulationRowText2').html('Romoppvarming');
  $('#regulationRowText3').html('Ventilasjonsvarme');
  $('#regulationRowText4').html('Varmtvann');
  $('#regulationRowText5').html('SUM OPPVARMING');
  $('#regulationRowText6').html('Vifter og pumper');
  $('#regulationRowText7').html('Belysning');
  $('#regulationRowText8').html('Teknisk utstyr');
  $('#regulationRowText9').html('Kj&oslashling ');
  $('#regulationRowText10').html('Energiramme');

  //Inputceller til energiberegning
  $('#requiredInformationText').html('N&oslashdvendig informasjon');
  $('#inputRowText1').html('Addresse eller prosjektnavn');
  $('#inputRowText2').html('Kommune');
  $('#inputRowText3').html('Bygningsstandard');
  $('#inputRowText4').html('Bygningskategori');
  $('#inputRowText5').html('Bygge&aringr');
  $('#inputRowText6').html('Oppvarmet areal (BRA)');
  $('#inputRowText7').html('Innend&oslashrs temperatur');
  $('#inputRowText8').html('Effektbehov ved DUT');
  $('#inputRowText9').html('Varmebehov fra T<span style="vertical-align: sub; font-size: 12px;">ute</span>');
  $('#inputRowText10').html('&Aringrsmiddeltemperatur');
  $('#inputRowText11').html('Dimensjonerende utetemperatur');
  $('#inputRowText12').html('Velg maskintype og antall');

  //Utskriftsområde
  $('#generateEffectCalculationText').html('Generer effekt- varighetsdiagram');
  $('#generateEffectCalculationButtonText').html('Generer diagram');
  $('#printLineText1').html('Energiberegning luft/luft varmepumpe');
  $('#printLineText2').html('Addresse / navn');
  $('#printLineText3').html('Bygningskategori');
  $('#printLineText4').html('Kommune');
  $('#printLineText5').html('Fylke');
  $('#printLineText6').html('&Aringrsmiddeltemperatur');
  $('#printLineText7').html('DUT');
  $('#printLineText8').html('Inndata');
  $('#printLineText9').html('Standard');
  $('#printLineText10').html('Bygge&aringr');
  $('#printLineText11').html('Areal');
  $('#printLineText12').html('Effektbehov ved DUT');
  $('#printLineText13').html('Innend&oslashrs temperatur');
  $('#printLineText14').html('Varmebehov fra T<span style="vertical-align: sub; font-size: 15px;">ute</span>');
  $('#printLineText15').html('Varmepumpe og driftsdata');
  $('#printLineText16').html('Varmepumpe');
  $('#printLineText17').html('Nominell effekt (+7 &ordmC)');
  $('#printLineText18').html('Varmebehov');
  $('#printLineText19').html('Energidekningsgrad');
  $('#printLineText20').html('Avgitt energi VP');
  $('#printLineText21').html('Tillegseffekt fra');
  $('#printLineText22').html('Tilf&oslashrt energi VP');
  $('#printLineText23').html('Tilleggseffekt ved DUT');
  $('#printLineText24').html('Besparing');
  $('#printLineText25').html('&Aringrsvarmefaktor');
  $('#printLineText26').html('Tilleggsenergi');
  $('#printLineText27').html('&Aringrsvarmefaktor <span style="vertical-align: sub; font-size: 15px;">*total</span>');
  $('#printLineText28').html('*inkluderer tilleggsenergi');
  $('#printLineText29').html('Effekt- varighetsdiagram');

  //grafbeskrivelse
  $('#legendLabelText1').html('Tilleggsenergi');
  $('#legendLabelText2').html('Avgitt energi VP');
  $('#legendLabelText3').html('Tilf&oslashrt energi VP');
});

//Button showing and uodating values in the regulationArray
jQuery('.english').on('click',function(event){

  //Navigasjonstekster
  $('#navItem1').html('Home');
  $('#navItem2').html('Area and U-values');
  $('#navItem3').html('From energy consumption');
  $('#navItem4').html('Empirical data');

  //KategoriBildeKnapper øverst på siden
  $('#effectEnergyInfoAreaText').html('<span>Estimate effect from:<br /> -Area<br />-U-values<br />-Temperatures<br /> -Ventilation<br />-Infiltration</span>');
  $('#effectEnergyInfoAreaDivText').html('Area and U-values');
  $('#effectFromEnergyText').html('<span>Estimate effect from:<br /> Historical energy consumption</span>');
  $('#effectFromEnergyDivText').html('From energy consumption');
  $('#effectEnergyInfoEmpiricalText').html('<span>Estimate energy consumption<br /> based on:<br /> -Climate<br /> -Age<br />-Building type<br />-Area</span>');
  $('#effectEnergyInfoEmpiricalDivText').html('Empirical data');
  $('#effectEnergyInfoRegulationText').html('<span>Estimate energy consumption from:<br /> -TEK10 or TEK15<br /> -Climate<br /> -Building category<br /> -Area</span>');
  $('#effectEnergyInfoRegulationDivText').html('Regulations');
  $('#energyCalculationText').html('<span>Use effect to:<br />-Choose heat pump<br />-Estimate energy coverage<br />-Estimate SCOP<br />-Estimate savings</span>');
  $('#energyCalculationDivText').html('Energy calculation');
  $('#generateOfferText').html('<span>Generate offer:<br />-You decide the response time<br />-Get increased discount<br />-Become more independent</span>');
  $('#generateOfferDivText').html('Generate offer');

  //Effektbehovstabell
  $('#effectCalcStandard').html('Choose standard');
  $('#effectCalcIndoortemp').html('Indoor temperature');
  $('#effectCalcDOT').html('DOT');
  $('#effectCalcColumnTitle1').html('What');
  $('#effectCalcColumnTitle2').html('Area');
  $('#effectCalcColumnTitle3').html('U-vale');
  $('#effectCalcColumnTitle4').html('T<span style="vertical-align: sub; font-size: 12px;">indoor</span>');
  $('#effectCalcColumnTitle5').html('T<span style="vertical-align: sub; font-size: 12px;">outdoor</span>');
  $('#effectCalcColumnTitle6').html('Effect');
  $('#effectCalcRowTitle1').html('Facade');
  $('#effectCalcRowTitle2').html('Floor on ground');
  $('#effectCalcRowTitle3').html('Ceiling');
  $('#effectCalcRowTitle4').html('Windows and doors');
  $('#effectCalcRowTitle5').html('Thermal wheel');
  $('#effectCalcRowTitle6').html('Air[m&sup3/h]');
  $('#effectCalcRowTitle7').html('T<span style="vertical-align: sub; font-size: 12px;">indoor</span>');
  $('#effectCalcRowTitle8').html('T<span style="vertical-align: sub; font-size: 12px;">after thermal wheel</span>');
  $('#effectCalcRowTitle9').html('Effect');
  $('#effectCalcRowTitle10').html('Ventilation');
  $('#effectCalcRowTitle11').html('Volume');
  $('#effectCalcRowTitle12').html('Infiltration number');
  $('#effectCalcRowTitle13').html('Airchanges/h');
  $('#effectCalcRowTitle14').html('Infiltration');
  $('#effectCalcRowTitle15').html('HEATING EFFECT');

  //Effekt fra energibehov
  $('#effectFromEnergyTextMunicipality').html('Municipality');
  $('#effectFromEnergyTextHeatingFrom').html('Heating from T<span style="vertical-align: sub; font-size: 12px;">outdoor</span>');
  $('#effectFromEnergyTextEnergy').html('Yearly energy consumption');
  $('#effectFromEnergyTextResult').html('Estimated effect at DOT:');

  //Hstoriske normtalltabell
  $('#normtallBuildingYearText').html('Building year');
  $('#normtallMunicipalityText').html('Municipality');
  $('#normtallBRAText').html('Heated area');
  $('#normtallBuildingPeriodText').html('Building year');
  $('#normtallYearMeanText').html('Year mean temperature');
  $('#normtallEnergyNeedText1').html('Total energy consumption');
  $('#normtallEnergyNeedText2').html('heating and hot water');
  $('#normtallColumnTitle1').html('Description');
  $('#normtallColumnTitle2').html('Building type');
  $('#normtallColumnTitle3').html('Villa');
  $('#normtallColumnTitle4').html('Town house');
  $('#normtallRowTitle1').html('1 floor no basement');
  $('#normtallRowTitle2').html('1 floor with basement');
  $('#normtallRowTitle3').html('1 floor with attic');
  $('#normtallRowTitle4').html('1 with basement, heated basement or attic');
  $('#normtallRowTitle5').html('2 floors no basement');
  $('#normtallRowTitle6').html('2 floors with basement');
  $('#normtallRowTitle7').html('2 floors with attic');
  $('#normtallRowTitle8').html('2 floors with basement, heated basement or attic');

  //Forskriftstabell
  $('#regulationBuildingStandardText').html('Building standard');
  $('#regulationMunicipalityText').html('Municipality');
  $('#regulationBuildingCategoryText').html('Building Category');
  $('#regulationRowText1').html('Energy item');
  $('#regulationRowText2').html('Room heating');
  $('#regulationRowText3').html('Ventilation heating');
  $('#regulationRowText4').html('Hot water');
  $('#regulationRowText5').html('Heating');
  $('#regulationRowText6').html('Fans and pumps');
  $('#regulationRowText7').html('Lights');
  $('#regulationRowText8').html('Technical equipment');
  $('#regulationRowText9').html('Cooling ');
  $('#regulationRowText10').html('Energy budget');

  //Inputceller til energiberegning
  $('#requiredInformationText').html('Required information');
  $('#inputRowText1').html('Enter address or name');
  $('#inputRowText2').html('Enter municipality');
  $('#inputRowText3').html('Enter standard ');
  $('#inputRowText4').html('Enter building category');
  $('#inputRowText5').html('Enter building year');
  $('#inputRowText6').html('Enter building BRA');
  $('#inputRowText7').html('Indoor temperature');
  $('#inputRowText8').html('Enter effect need');
  $('#inputRowText9').html('Heating from T<span style="vertical-align: sub; font-size: 12px;">outdoor</span>');
  $('#inputRowText10').html('Year mean temperature');
  $('#inputRowText11').html('Dimensioning outdoor temperature');
  $('#inputRowText12').html('Select Machine and number');

  //Utskriftsområde
  $('#generateEffectCalculationText').html('Generate Effect Duration Chart');
  $('#generateEffectCalculationButtonText').html('Generate Chart');
  $('#printLineText1').html('Energy calculation air/air heat pump');
  $('#printLineText2').html('Address / name');
  $('#printLineText3').html('Building category');
  $('#printLineText4').html('Municipality');
  $('#printLineText5').html('County');
  $('#printLineText6').html('Year mean temperature');
  $('#printLineText7').html('DOT');
  $('#printLineText8').html('Input');
  $('#printLineText9').html('Standard');
  $('#printLineText10').html('Building year');
  $('#printLineText11').html('Area');
  $('#printLineText12').html('Needed effect at DOT');
  $('#printLineText13').html('Indoor temperature');
  $('#printLineText14').html('Heating from T<span style="vertical-align: sub; font-size: 15px;">outdoor</span>');
  $('#printLineText15').html('Heat pump data');
  $('#printLineText16').html('Heat pump');
  $('#printLineText17').html('Nominal effect (+7 &ordmC)');
  $('#printLineText18').html('Energy consumption');
  $('#printLineText19').html('Energy coverage');
  $('#printLineText20').html('Energy delivered HP');
  $('#printLineText21').html('Auxiliary effect from');
  $('#printLineText22').html('Consumed energy HP');
  $('#printLineText23').html('Auxiliary effect at DOT');
  $('#printLineText24').html('Savings');
  $('#printLineText25').html('SCOP');
  $('#printLineText26').html('Auxiliary energy');
  $('#printLineText27').html('SCOP<span style="vertical-align: sub; font-size: 15px;">*total</span>');
  $('#printLineText28').html('includes auxiliary energy');
  $('#printLineText29').html('Effect- duration curve');

  //grafbeskrivelse
  $('#legendLabelText1').html('Auxiliary energy');
  $('#legendLabelText2').html('Energy delivered HP');
  $('#legendLabelText3').html('Consumed energy HP');

});
