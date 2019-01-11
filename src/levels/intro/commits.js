exports.level = {
    "name": {
        "de_DE": "Einführung in Git Commits"
    },
    "goalTreeString": "{\"branches\":{\"master\":{\"target\":\"C3\",\"id\":\"master\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"}}",
    "solutionCommand": "git commit;git commit",
    "startTree": "{\"branches\":{\"master\":{\"target\":\"C1\",\"id\":\"master\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"}}",
    "hint": {
        "de_DE": "Gib einfach zweimal 'git commit' ein um den Level abzuschließen"
    },
    "disabledMap": {
        "git revert": true
    },
    "startDialog": {
        "de_DE": {
            "childViews": [
                {
                    "type": "ModalAlert",
                    "options": {
                        "markdowns": [
                            "## Git Commits",
                            "Ein Commit in ein Git-Repository speichert einen Abbildung aller Dateien in deinem Projektverzeichnis. Es ist wie ein riesiges Kopieren und Einfügen, nur besser.",
                            "",
                            "Allerdings will Git die Commits so schlank wie möglich halten, also kopiert es nicht einfach stur das ganze Verzeichnis jedes Mal wenn du committest. Es kann (wenn möglich) Commits als Menge von Änderungen zusammenpacken, von einer Version des Repositorys zur nächsten.",
                            "",
                            "Außerdem führt Git ein Protokoll darüber welche Commits wann gemacht wurden, und welcher auf welchen folgt. Deshalb werden die Commits hier mit ihrem Vorgänger über sich gezeigt -- wir verwenden Pfeile zur Darstellung der Beziehung. Dieses Protokoll zu haben ist eine tolle Sache für jeden, der an einem Projekt arbeitet.",
                            "",
                            "Das war jetzt eine Menge Neues, aber vorerst kannst du dir Commits einfach als Abbildungen des Projekts vorstellen. Commits sind sehr ressourcenschonend, und zwischen ihnen wechseln geht superschnell!"
                        ]
                    }
                },
                {
                    "type": "GitDemonstrationView",
                    "options": {
                        "beforeMarkdowns": [
                            "Mal sehen wie das in der Praxis ist. Rechts sehen wir ein (kleines) Git-Repository. Es gibt akutell zwei Commits -- den initialen, `C0`, und den danach, `C1`, der irgendwelche Änderungen enthält.",
                            "",
                            "Klick die Schaltfläche unten um einen neuen Commit zu erzeugen:"
                        ],
                        "afterMarkdowns": [
                            "Fertig. Klasse! Wir haben gerade Änderungen gemacht und als Commit im Repository gespeichert. Der Commit, den wir gerade gemacht haben, hat den Vorgänger `C1`; der verweist wiederum auf den Commit, auf dem er basiert: `C0`."
                        ],
                        "command": "git commit",
                        "beforeCommand": ""
                    }
                },
                {
                    "type": "ModalAlert",
                    "options": {
                        "markdowns": [
                            "Probier das committen gleich mal aus! Mach zwei Commits um den Level abzuschließen."
                        ]
                    }
                }
            ]
        }
    }
};
