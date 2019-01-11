exports.dialog = {
  'de_DE': [{
    type: 'ModalAlert',
    options: {
      markdowns: [
        '## Willkommen zum Level-Editor!',
        '',
        'So funktioniert\'s:',
        '',
        '  * Stelle mit Git-Befehlen die Ausganssituation her',
        '  * Leg den Startpunkt mit ```define start``` fest',
        '  * Gib eine Abfolge von Git-Befehlen ein, welche die (optimale) Lösung darstellen',
        '  * Leg den Ziel-Baum mit ```define goal``` fest. Damit markierst du den Endpunkt der Lösung',
        '  * Gib einen Hinweis mittels ```define hint``` an, wenn du willst',
        '  * Änder den Namen mittels ```define name```',
        '  * Wenn du magst, erstelle einen schönene Einführungsdialog mit ```edit dialog```',
        '  * Gib das Kommando ```finish``` ein um deinen Level als JSON auszugeben'
      ]
    }
  }]
};
