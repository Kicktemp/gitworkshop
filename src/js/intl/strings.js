exports.strings = {
  ///////////////////////////////////////////////////////////////////////////
  'finish-dialog-finished': {
    '__desc__': 'One of the lines in the next level dialog',
    'en_US': 'Wow! You finished the last level, great!',
    'de_DE': 'Wow! Du hast den letzten Level gelöst, super!'
  },
  ///////////////////////////////////////////////////////////////////////////
  'finish-dialog-next': {
    '__desc__': 'One of the lines in the next level dialog',
    'en_US': 'Would you like to move on to *"{nextLevel}"*, the next level?',
    'de_DE': 'Möchtest du mit *"{nextLevel}"* weitermachen, dem nächsten Level?'
  },
  ///////////////////////////////////////////////////////////////////////////
  'finish-dialog-win': {
    '__desc__': 'One of the lines in the next level dialog',
    'en_US': 'Awesome! You matched or exceeded our solution.',
    'de_DE': 'Wahnsinn! Du warst so gut wie unsere Lösung, oder sogar besser.'
  },
  ///////////////////////////////////////////////////////////////////////////
  'finish-dialog-lose': {
    '__desc__': 'When the user entered more commands than our best, encourage them to do better',
    'en_US': 'See if you can whittle it down to {best} :D',
    'de_DE': 'Schau mal ob du es in {best} Schritten hinbekommst :D'

  },
  ///////////////////////////////////////////////////////////////////////////
  'hg-prune-tree': {
    '__desc__': 'warning when pruning tree',
    'en_US': 'Warning! Mercurial does aggressive garbage collection and thus needs to prune your tree',
    'de_DE': 'Achtung! Mercurial macht aggressive Garbage Collection und muss daher deinen Baum reduzieren'
  },
  ///////////////////////////////////////////////////////////////////////////
  'hg-a-option': {
    '__desc__': 'warning for when using -A option',
    'en_US': 'The -A option is not needed for this app, just commit away!',
    'de_DE': 'Die Option -A wird in dieser Anwendung nicht benötigt, committe einfach!'
  },
  ///////////////////////////////////////////////////////////////////////////
  'hg-error-no-status': {
    '__desc__': 'One of the errors for hg',
    'en_US': 'There is no status command for this app, since there is no staging of files. Try hg summary instead',
    'de_DE': 'Es gibt keinen Befehl status in dieser Anwendung, da es kein Staging von Dateien gibt. Probier stattdessen hg summary'
  },
  ///////////////////////////////////////////////////////////////////////////
  'hg-error-need-option': {
    '__desc__': 'One of the errors for hg',
    'en_US': 'I need the option {option} for that command!',
    'de_DE': 'Ich benötige die Option {option} für diesen Befehl!'
  },
  ///////////////////////////////////////////////////////////////////////////
  'hg-error-log-no-follow': {
    '__desc__': 'hg log without -f (--follow)',
    'en_US': 'hg log without -f is currently not supported, use -f',
    'de_DE': 'hg log ohne -f wird aktuell nicht unterstützt, benutze bitte -f'
  },
  ///////////////////////////////////////////////////////////////////////////
  'git-status-detached': {
    '__desc__': 'One of the lines for git status output',
    'en_US': 'Detached head!',
    'de_DE': 'Detached head!'
  },
  ///////////////////////////////////////////////////////////////////////////
  'git-status-onbranch': {
    '__desc__': 'One of the lines for git status output',
    'en_US': 'On branch {branch}',
    'de_DE': 'Auf Branch {branch}'
  },
  ///////////////////////////////////////////////////////////////////////////
  'git-status-readytocommit': {
    '__desc__': 'One of the lines for git status output',
    'en_US': 'Ready to commit! (as always in this demo)',
    'de_DE': 'Fertig zum committen! (Wie immer in dieser Demo)'
  },
  ///////////////////////////////////////////////////////////////////////////
  'git-dummy-msg': {
    '__desc__': 'The dummy commit message for all commits. Feel free to put in a ' +
      'shoutout to your school / city / whatever!',
    'en_US': 'Quick commit. Go Bears!',
    'de_DE': 'Schneller Commit. Eff-Zeh!'
  },
  'git-error-origin-fetch-uptodate': {
    '__desc__': 'One of the error messages for git',
    'en_US': 'Already up to date!',
    'de_DE': 'Bereits aktuell!'
  },
  'git-error-origin-fetch-no-ff': {
    '__desc__': 'One of the error messages for git',
    'en_US': 'Your origin branch is out of sync with the remote branch and fetch cannot be performed',
    'de_DE': 'Dein origin Branch ist nicht auf dem Stand des Remote Branch und fetch kann nicht ausgeführt werden'
  },
  'git-error-origin-push-no-ff': {
    '__desc__': 'One of the error messages for git',
    'en_US': 'The remote repository has diverged from your local repository, so uploading your changes is not a simple fast forward (and thus your push was rejected). Please pull down the new changes in the remote repository, incorporate them into this branch, and try again. You can do so with git pull or git pull --rebase',
    'de_DE': 'Das entfernte Repository weicht von deinem lokalen Repository ab, daher können deine Änderungen nicht mit einem einfachen fast forward hochgeladen werden (und daher ist dein push abgelehnt worden). Bitte pull erst die neuen Änderungen in das lokale Repository, integriere sie in den Branch und versuch es nochmal. Das kannst du mit git pull oder git pull --rebase machen'
  },
  'git-error-remote-branch': {
    '__desc__': 'One of the error messages for git',
    'en_US': 'You cannot execute that command on a remote branch',
    'de_DE': 'Du kannst diesen Befehl nicht auf einem Remote Branch ausführen'
  },
  'git-error-origin-required': {
    '__desc__': 'One of the error messages for git',
    'en_US': 'An origin is required for that command',
    'de_DE': 'Für diesen Befehl wird origin benötigt'
  },
  'git-error-origin-exists': {
    '__desc__': 'One of the error messages for git',
    'en_US': 'An origin already exists! You cannot make a new one',
    'de_DE': 'origin existiert bereits! Du kannst es nicht nochmal anlegen'
  },
  ///////////////////////////////////////////////////////////////////////////
  'git-error-branch': {
    '__desc__': 'One of the error messages for git',
    'en_US': 'You can\'t delete the master branch, the branch you are on, or things that ' +
      'aren\'t branches',
    'de_DE': 'Du kannst nicht den Branch master, den Branch auf dem du gerade arbeitest oder Refs, die keine Branches sind, löschen'
  },
  ///////////////////////////////////////////////////////////////////////////
  'git-merge-msg': {
    '__desc__': 'The commit message for a merge commit',
    'en_US': 'Merge {target} into {current}',
    'de_DE': 'Mergen von {target} in {current}'
  },
  ///////////////////////////////////////////////////////////////////////////
  'git-error-rebase-none': {
    '__desc__': 'One of the error messages for git',
    'en_US': 'No commits to rebase! Everything is a merge commit or changes already applied',
    'de_DE': 'Keine Commits für Rebase gefunden! Alle Commits sind Merge Commits oder beinhalten nur schon vorhandene Änderungen'
  },
  ///////////////////////////////////////////////////////////////////////////
  'git-result-nothing': {
    '__desc__': 'The message that explains the result of a git command',
    'en_US': 'Nothing to do...',
    'de_DE': 'Nichts zu tun ...'
  },
  ///////////////////////////////////////////////////////////////////////////
  'git-result-fastforward': {
    '__desc__': 'The message that explains the result of a git command',
    'en_US': 'Fast forwarding...',
    'de_DE': 'Fast forward...'
  },
  ///////////////////////////////////////////////////////////////////////////
  'git-result-uptodate': {
    '__desc__': 'The message that explains the result of a git command',
    'en_US': 'Branch already up-to-date',
    'de_DE': 'Branch ist bereits aktuell'
  },
  ///////////////////////////////////////////////////////////////////////////
  'git-error-exist': {
    '__desc__': 'One of the error messages for git',
    'en_US': 'The ref {ref} does not exist or is unknown',
    'de_DE': 'Die Ref {ref} existiert nicht oder ist unbekannt'
  },
  ///////////////////////////////////////////////////////////////////////////
  'git-error-relative-ref': {
    '__desc__': 'One of the error messages for git',
    'en_US': 'Commit {commit} does not have a {match}',
    'de_DE': 'Commit {commit} hat kein {match}'
  },
  ///////////////////////////////////////////////////////////////////////////
  'git-warning-detached': {
    '__desc__': 'One of the warning messages for git',
    'en_US': 'Warning!! Detached HEAD state',
    'de_DE': 'Achtung! Detached HEAD Zustand'
  },
  ///////////////////////////////////////////////////////////////////////////
  'git-warning-add': {
    '__desc__': 'One of the warning messages for git',
    'en_US': 'No need to add files in this demo',
    'de_DE': 'In dieser Demo müssen keine Dateien hinzugefügt werden'
  },
  ///////////////////////////////////////////////////////////////////////////
  'git-error-options': {
    '__desc__': 'One of the error messages for git',
    'en_US': 'Those options you specified are incompatible or incorrect',
    'de_DE': 'Die angegebenen Optionen sind inkompatibel oder falsch'
  },
  ///////////////////////////////////////////////////////////////////////////
  'git-error-already-exists': {
    '__desc__': 'One of the error messages for git',
    'en_US': 'The commit {commit} already exists in your changes set, aborting!',
    'de_DE': 'Der Commit {commit} existiert bereit, Abbruch!'
  },
  ///////////////////////////////////////////////////////////////////////////
  'git-error-reset-detached': {
    '__desc__': 'One of the error messages for git',
    'en_US': 'Can\'t reset in detached head! Use checkout if you want to move',
    'de_DE': 'Kann im Detached Head Zustand kein reset ausführen! Bitte checkout zum Bewegen benutzen'
  },
  ///////////////////////////////////////////////////////////////////////////
  'git-warning-hard': {
    '__desc__': 'One of the warning messages for git',
    'en_US': 'The default behavior for resets on LearnGitBranching is a --hard, so feel free to omit ' +
      'that option if you get tired of typing it out in our lessons. Just remember that the default ' +
      'behavior on actual Git is --mixed.',
    'de_DE': 'Das Standardverhalten in dieser Demo ist --hard, du kannst die Option auch weglassen!'
  },
  ///////////////////////////////////////////////////////////////////////////
  'git-error-staging': {
    '__desc__': 'One of the error messages for git',
    'en_US': 'There is no concept of adding / staging files, so that option or ' +
      'command is invalid!',
    'de_DE': 'In dieser Demo gibt es kein Hinzufügen / Vormerken von Dateien, dieser Befehl ist daher ungültig!'
  },
  ///////////////////////////////////////////////////////////////////////////
  'git-revert-msg': {
    '__desc__': 'Message for reverting git command',
    'en_US': 'Reverting {oldCommit}: {oldMsg}',
    'de_DE': 'Reverte {oldCommit}: {oldMsg}'
  },
  ///////////////////////////////////////////////////////////////////////////
  'git-error-args-many': {
    '__desc__': 'One of the error messages for git',
    'en_US': 'I expect at most {upper} argument(s) for {what}',
    'de_DE': 'Ich benötige maximal {upper} Argument(e) für {what}'
  },
  ///////////////////////////////////////////////////////////////////////////
  'git-error-args-few': {
    '__desc__': 'One of the error messages for git',
    'en_US': 'I expect at least {lower} argument(s) for {what}',
    'de_DE': 'Ich benötige mindestens {lower} Argument(e) für {what}'
  },
  ///////////////////////////////////////////////////////////////////////////
  'git-error-no-general-args': {
    '__desc__': 'One of the error messages for git',
    'en_US': 'That command accepts no general arguments',
    'de_DE': 'Dieser Befehl akzeptiert keine allgemeinen Argumente'
  },
  ///////////////////////////////////////////////////////////////////////////
  'copy-tree-string': {
    '__desc__': 'The prompt to copy the tree when sharing',
    'en_US': 'Copy the tree string below',
    'de_DE': 'Kopiere die folgende Baum-Zeichenkette'
  },
  ///////////////////////////////////////////////////////////////////////////
  'learn-git-branching': {
    '__desc__': 'The title of the app, with spaces',
    'en_US': 'Git Workshop Joomla!Day',
    'de_DE': 'Git Workshop Joomla!Day'
  },
  ///////////////////////////////////////////////////////////////////////////
  'select-a-level': {
    '__desc__': 'The prompt to select a level on the drop down view',
    'en_US': 'Select a level',
    'de_DE': 'Level auswählen'
  },
  ///////////////////////////////////////////////////////////////////////////
  'main-levels-tab': {
    '__desc__': 'The name of main levels tab on the drop down view',
    'en_US': 'Main',
    'de_DE': 'Haupt'
  },
  ///////////////////////////////////////////////////////////////////////////
  'remote-levels-tab': {
    '__desc__': 'The name of remote levels tab on the drop down view',
    'en_US': 'Remote',
    'de_DE': 'Remote'
  },
  ///////////////////////////////////////////////////////////////////////////
  'branch-name-short': {
    '__desc__': 'When branch names get too long, we need to truncate them. This is the warning for that',
    'en_US': 'Sorry, we need to keep branch names short for the visuals. Your branch name was truncated to 9 characters, resulting in "{branch}"',
    'de_DE': 'Tut mir leid, aber aus Gründen der Darstellung müssen wir die Branch-Namen kurz halten. Dein Branch-Name wurde auf 9 Zeichen gekürzt und heißt daher jetzt "{branch}"'
  },
  ///////////////////////////////////////////////////////////////////////////
  'bad-branch-name': {
    '__desc__': 'When the user enters a branch name thats not ok',
    'en_US': 'That branch name "{branch}" is not allowed!',
    'de_DE': 'Der Branch-Name "{branch}" ist nicht erlaubt!'
  },
  ///////////////////////////////////////////////////////////////////////////
  'bad-tag-name': {
    '__desc__': 'When the user enters a tag name thats not ok',
    'en_US': 'That tag name "{tag}" is not allowed!',
    'de_DE': 'Der Tag-Name "{tag}" ist nicht erlaubt!'
  },
  ///////////////////////////////////////////////////////////////////////////
  'option-not-supported': {
    '__desc__': 'When the user specifies an option that is not supported by our demo',
    'en_US': 'The option "{option}" is not supported!',
    'de_DE': 'Die Option "{option}" wird nicht unterstützt!'
  },
  ///////////////////////////////////////////////////////////////////////////
  'git-usage-command': {
    '__desc__': 'The line that shows how to format a git command',
    'en_US': 'git <command> [<args>]',
    'de_DE': 'git <Befehl> [<Argumente>]'
  },
  ///////////////////////////////////////////////////////////////////////////
  'git-supported-commands': {
    '__desc__': 'In the git help command, the header above the supported commands',
    'en_US': 'Supported commands:',
    'de_DE': 'Unterstützte Befehle:'
  },
  ///////////////////////////////////////////////////////////////////////////
  'git-usage': {
    '__desc__': 'In the dummy git output, the header before showing all the commands',
    'en_US': 'Usage:',
    'de_DE': 'Benutzung:'
  },
  ///////////////////////////////////////////////////////////////////////////
  'git-version': {
    '__desc__': 'The git version dummy output, kind of silly. PCOTTLE is my unix name but feel free to put yours instead',
    'en_US': 'Git Version PCOTTLE.1.0',
    'de_DE': 'Git Version PCOTTLE.1.0.jbr'
  },
  ///////////////////////////////////////////////////////////////////////////
  'flip-tree-command': {
    '__desc__': 'when the tree is being flipped',
    'en_US': 'Flipping tree...',
    'de_DE': 'Flipping tree...'
  },
  ///////////////////////////////////////////////////////////////////////////
  'refresh-tree-command': {
    '__desc__': 'when the tree is visually refreshed',
    'en_US': 'Refreshing tree...',
    'de_DE': 'Aktualisiere Baum ...'
  },
  ///////////////////////////////////////////////////////////////////////////
  'locale-command': {
    '__desc__': 'when the locale is set to something',
    'en_US': 'Locale set to {locale}',
    'de_DE': 'Locale auf {locale} gesetzt'
  },
  ///////////////////////////////////////////////////////////////////////////
  'locale-reset-command': {
    '__desc__': 'when the locale is reset',
    'en_US': 'Locale reset to default, which is {locale}',
    'de_DE': 'Locale auf Standard zurückgesetzt, also {locale}'
  },
  ///////////////////////////////////////////////////////////////////////////
  'show-command': {
    '__desc__': 'command output title from "show"',
    'en_US': 'Please use one of the following commands for more info:',
    'de_DE': 'Bitte benutze einen der folgenden Befehle um mehr Informationen zu bekommen:'
  },
  ///////////////////////////////////////////////////////////////////////////
  'show-all-commands': {
    '__desc__': 'command output title from "show commands"',
    'en_US': 'Here is a list of all the commmands available:',
    'de_DE': 'Hier ist eine Liste aller verfügbarer Befehle:'
  },
  ///////////////////////////////////////////////////////////////////////////
  'cd-command': {
    '__desc__': 'dummy command output for the command in the key',
    'en_US': 'Directory changed to "/directories/dont/matter/in/this/demo"',
    'de_DE': 'Verzeichnis gewechselt zu "/verzeichnisse/sind/in/dieser/demo/latte"'
  },
  ///////////////////////////////////////////////////////////////////////////
  'ls-command': {
    '__desc__': 'Dummy command output for the command in the key',
    'en_US': 'DontWorryAboutFilesInThisDemo.txt',
    'de_DE': 'VergissDateienInDieserDemo.txt'
  },
  'mobile-alert': {
    '__desc__': 'When someone comes to the site on a mobile device, they can not input commands so this is a nasty alert to tell them',
    'en_US': 'LGB can\'t receive input on mobile, visit on desktop! it\'s worth it :D',
    'de_DE': 'LGB ist nicht mit mobilen Endgeräten kompatibel, nutz es vom Desktop! Es lohnt sich :D'
  },
  ///////////////////////////////////////////////////////////////////////////
  'share-tree': {
    '__desc__': 'When you export a tree, we want you to share the tree with friends',
    'en_US': 'Share this tree with friends! They can load it with "import tree"',
    'de_DE': 'Teile diesen git-Baum mit Freunden! Sie können ihn mit "import tree" laden'
  },
  ///////////////////////////////////////////////////////////////////////////
  'paste-json': {
    '__desc__': 'When you are importing a level or tree',
    'en_US': 'Paste a JSON blob below!',
    'de_DE': 'Füg einen JSON-Blob unten ein!'
  },
  ///////////////////////////////////////////////////////////////////////////
  'solved-map-reset': {
    '__desc__': 'When you reset the solved map to clear your solved history, in case someone else wants to use your browser',
    'en_US': 'Solved map was reset, you are starting from a clean slate!',
    'de_DE': 'Gelöste Karte wurde zurückgesetzt, du fängst mit einem leeren Blatt an!'
  },
  ///////////////////////////////////////////////////////////////////////////
  'level-cant-exit': {
    '__desc__': 'When the user tries to exit a level when they are not in one',
    'en_US': 'You are not in a level! You are in a sandbox, start a level with "levels"',
    'de_DE': 'Du bist nicht in einem Level! Du bist im Sandkasten-Modus, starte einen Level mit "levels"'
  },
  ///////////////////////////////////////////////////////////////////////////
  'level-no-id': {
    '__desc__': 'When you say an id but that level doesn\'t exist',
    'en_US': 'A level for that id "{id}" was not found! Opening up a level selection view',
    'de_DE': 'Konnte keinen Level mit der ID "{id}" finden! Öffne einen Level-Auswahldialog'
  },
  ///////////////////////////////////////////////////////////////////////////
  'undo-stack-empty': {
    '__desc__': 'The undo command can only undo back until the last time the level was reset or the beginning of the level',
    'en_US': 'The undo stack is empty!',
    'de_DE': 'Die Undo-Liste ist leer!'
  },
  ///////////////////////////////////////////////////////////////////////////
  'already-solved': {
    '__desc__': 'When you play in a level that is already solved',
    'en_US': 'You have already solved this level, try other levels with "levels" or go back to sandbox with "sandbox"',
    'de_DE': 'Du hast diesen Level bereits gelöst, probier einen anderen Level mit "levels" aus oder geh in den Sandkasten-Modus mit "sandbox"'
  },
  ///////////////////////////////////////////////////////////////////////////
  'solved-level': {
    '__desc__': 'When you solved a level',
    'en_US': 'Solved!!\n:D',
    'de_DE': 'Gelöst!\n:D'
  },
  ///////////////////////////////////////////////////////////////////////////
  'command-disabled': {
    '__desc__': 'When you try a command that is disabled',
    'en_US': 'That git command is disabled for this level!',
    'de_DE': 'Dieser git-Befehl ist für diesen Level deaktiviert!'
  },
  ///////////////////////////////////////////////////////////////////////////
  'share-json': {
    '__desc__': 'when you have made the level, prompt to share this',
    'en_US': 'Here is the JSON for this level! Share it with someone or send it to me on Github',
    'de_DE': 'Hier ist das JSON für diesen Level! Teil es mit jemandem or schick es mir über Github'
  },
  ///////////////////////////////////////////////////////////////////////////
  'want-start-dialog': {
    '__desc__': 'prompt to add a start dialog',
    'en_US': 'You have not specified a start dialog, would you like to add one?',
    'de_DE': 'Du hast noch keinen Einführungs-Dialog geschrieben, willst du einen hinzufügen?'
  },
  ///////////////////////////////////////////////////////////////////////////
  'want-hint': {
    '__desc__': 'prompt to add a hint',
    'en_US': 'You have not specified a hint, would you like to add one?',
    'de_DE': 'Du hast noch keinen Hinweis geschrieben, magst du einen hinzufügen?'
  },
  ///////////////////////////////////////////////////////////////////////////
  'prompt-hint': {
    '__desc__': 'prompt for hint',
    'en_US': 'Enter the hint for this level, or leave this blank if you do not want to include one',
    'de_DE': 'Gib den Hinweis für diesen Level an, oder lass es leer wenn du keinen hinzufügen willst'
  },
  ///////////////////////////////////////////////////////////////////////////
  'prompt-name': {
    '__desc__': 'prompt for level name',
    'en_US': 'Enter the name for the level',
    'de_DE': 'Gib den Namen für diesen Level an'
  },
  ///////////////////////////////////////////////////////////////////////////
  'solution-empty': {
    '__desc__': 'If you define a solution without any commands, aka a level that is solved without doing anything',
    'en_US': 'Your solution is empty!! Something is amiss',
    'de_DE': 'Deine Auflösung ist leer! Hier fehlt etwas'
  },
  ///////////////////////////////////////////////////////////////////////////
  'define-start-warning': {
    '__desc__': 'When you define the start point again, it overwrites the solution and goal so we add a warning',
    'en_US': 'Defining start point... solution and goal will be overwritten if they were defined earlier',
    'de_DE': 'Lege Start fest ... Auflösung und Ziel werden gelößcht, falls sie schon festgelegt worden waren'
  },
  ///////////////////////////////////////////////////////////////////////////
  'help-vague-level': {
    '__desc__': 'When you are in a level and you say help, its vague and you need to specify',
    'en_US': 'You are in a level, so multiple forms of help are available. Please select either "help level" to learn more about this lesson, "help general" for using Learn GitBranching, or "objective" to learn about how to solve the level.',
    'de_DE': 'Du befindest dich in einem Level, daher gibt es verschiedene Hilfen. Gib "help level" ein um mehr úber diesen Level zu erfahren, "help general" um zu sehen wie Learn Git Branching bedient wird, oder "objective" um das Ziel dieses Levels zu erfahren.'
  },
  ///////////////////////////////////////////////////////////////////////////
  'help-vague-builder': {
    '__desc__': 'When you are in a level builder, the help command is vague so you need to specify what you mean',
    'en_US': 'You are in a level builder, so multiple forms of help are available. Please select either "help general" or "help builder"',
    'de_DE': 'Du befindest dich im Level-Editor, daher gibt es verschiedene Hilfen. Gib bitte "help general" oder "help builder" ein'
  },
  ///////////////////////////////////////////////////////////////////////////
  'show-goal-button': {
    '__desc__': 'button label to show goal',
    'en_US': 'Show Goal',
    'de_DE': 'Schauen Ziel'
  },
  ///////////////////////////////////////////////////////////////////////////
  'hide-goal-button': {
    '__desc__': 'button label to hide goal',
    'en_US': 'Hide Goal',
    'de_DE': 'Verstecken Ziel'
  },
  ///////////////////////////////////////////////////////////////////////////
  'objective-button': {
    '__desc__': 'button label to show objective',
    'en_US': 'Instructions',
    'de_DE': 'Ziel'
  },
  ///////////////////////////////////////////////////////////////////////////
  'git-demonstration-title': {
    '__desc__': 'title of git demonstration window',
    'en_US': 'Git Demonstration',
    'de_DE': 'Git Demonstration'
  },
  ///////////////////////////////////////////////////////////////////////////
  'goal-to-reach': {
    '__desc__': 'title of window that shoes the goal tree to reach',
    'en_US': 'Goal To Reach',
    'de_DE': 'Ziel'
  },
  ///////////////////////////////////////////////////////////////////////////
  'goal-only-master': {
    '__desc__': 'the helper message for the window that shows the goal tree when the goal will only be compared using the master branch',
    'en_US': '<span class="fwber">Note:</span> Only the master branch will be checked in this level. The other branches are simply for reference (shown as dashed labels below). As always, you can hide this dialog with "hide goal"',
    'de_DE': '<span class="fwber">Hinweis:</span> In diesem Level wird nur der Branch master geprüft. Die anderen Branches dienen nur als Vergleichsbasis (als gestrichelte Bezeichner dargestellt). Wie immer kannst du diese Meldung mit "hide goal" ausblenden'
  },
  ///////////////////////////////////////////////////////////////////////////
  'hide-goal': {
    '__desc__': 'the helper message for the window that shows the goal tree',
    'en_US': 'You can hide this window with "hide goal"',
    'de_DE': 'Du kannst diese Meldung mit "hide goal" ausblenden'
  },
  ///////////////////////////////////////////////////////////////////////////
  'hide-start': {
    '__desc__': 'The helper message for the window that shows the start tree for a level',
    'en_US': 'You can hide this window with "hide start"',
      'de_DE': 'Du kannst diese Meldung mit "hide start" ausblenden'
  },
  ///////////////////////////////////////////////////////////////////////////
  'level-builder': {
    '__desc__': 'The name for the environment where you build levels',
    'en_US': 'Level Builder',
    'de_DE': 'Level-Editor'
  },
  ///////////////////////////////////////////////////////////////////////////
  'no-start-dialog': {
    '__desc__': 'when the user tries to open a start dialog for a level that does not have one',
    'en_US': 'There is no start dialog to show for this level!',
    'de_DE': 'Es gibt keinen Einführungs-Dialog für diesen Level!'
  },
  ///////////////////////////////////////////////////////////////////////////
  'no-hint': {
    '__desc__': 'when no hint is available for a level',
    'en_US': "Hmm, there doesn't seem to be a hint for this level :-/",
    'de_DE': "Hm, es gibt anscheinend keinen Hinweis für diesen Level :-/"
  },
  ///////////////////////////////////////////////////////////////////////////
  'error-untranslated-key': {
    '__desc__': 'This error happens when we are trying to translate a specific key and the locale version is mission',
    'en_US': 'The translation for {key} does not exist yet :( Please hop on github and offer up a translation!',
    'de_DE': 'Die Übersetzung für {key} existiert noch nicht :( Falls du eine hast, bitte teil sie mit auf Github mit!'
  },
  ///////////////////////////////////////////////////////////////////////////
  'error-untranslated': {
    '__desc__': 'The general error when we encounter a dialog that is not translated',
    'en_US': 'This dialog or text is not yet translated in your locale :( Hop on github to aid in translation!',
    'de_DE': 'Dieser Dialog oder Text ist noch nicht in deine Sprache übersetzt. :( Schau auf Github vorbei um bei der Übersetzung zu helfen!'
  }
};
