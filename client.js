// Füge einen Event-Listener zum Button hinzu
document.getElementById('myButton').addEventListener('click', () => {
    // Sende eine HTTP-GET-Anfrage an den Server, wenn der Button geklickt wird
    fetch('./button-click')
      .then(response => {
        if (response.ok) {
          console.log('GET-Anfrage erfolgreich gesendet');
        } else {
          console.error('Fehler bei der GET-Anfrage');
        }
      })
      .catch(error => {
        console.error('Fehler:', error);
      });
  });
  