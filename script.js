function startAutomation() {
    var linkElement = document.querySelector('#https://isis.verw.uni-koeln.de/cgi/anmeldung.fcgi?Kursid=249832');
    var imgElement = linkElement.querySelector('img');
    var srcValue = imgElement.getAttribute('src');
  
    // Ergebnis in der Benutzeroberfläche anzeigen
    var resultDiv = document.querySelector('#result');
    resultDiv.innerHTML = 'Der SRC-Wert des Bildes ist: ' + srcValue;
  }
  