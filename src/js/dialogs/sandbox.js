exports.dialog = {
  'de_DE': [{
    type: 'ModalAlert',
    options: {
      markdowns: [
        '## Willkommen beim Git Workshop Joomla!Day',
        '',
        'Der Sinn dieser Anwendung ist, die umfangreichen und komplexen Zusammenhänge der Prozesse, die bei der Arbeit mit Git ablaufen, zu verdeutlichen. Ich hoffe du hast Spaß dabei und lernst vielleicht sogar etwas!',
        '',
        '# Demo!',
        '',
        'Falls du die Demonstration noch nicht gesehen hast, schau sie dir hier an:',
        '',
        '[https://gitworkshop.kicktemp.com/?demo](https://gitworkshop.kicktemp.com/?demo)',
        '',
        'Genervt von diesem Fenster? Häng `?NODEMO` an die URL um es los zu werden, so wie hier:',
        '',
        '[https://gitworkshop.kicktemp.com/?NODEMO](?NODEMO)'
      ]
    }
  }, {
    type: 'ModalAlert',
    options: {
      markdowns: [
        '## Git-Kommandos',
        '',
        'Dir steht eine große Zahl von Git-Befehlen im Sandkasten-Modus zur Verfügung. Unter anderem',
        '',
        ' * commit',
        ' * branch',
        ' * checkout',
        ' * cherry-pick',
        ' * reset',
        ' * revert',
        ' * rebase',
        ' * merge'
      ]
    }
  }, {
    type: 'ModalAlert',
    options: {
      markdowns: [
        '## Teilen macht Spaß!',
        '',
        'Teile diese Git-Bäume mit deinen Freunden mittels `export tree` und `import tree`.',
        '',
        'Hast du Wissenswertes zu Git zu vermitteln? Versuch einen Level mit `build level` zu bauen oder probier den Level eines Freundes mit `import level` aus.',
        '',
        'Um alle Kommandos zu sehen, gib `show commands` ein. Darunter gibt\'s kleine Schätze wie `undo` und `reset`.',
        '',
        'Für\'s Erste lass uns mit `levels` anfangen ...'
      ]
    }
  }]
};
