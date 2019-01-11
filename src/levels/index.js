// Each level is part of a "sequence;" levels within
// a sequence proceed in the order listed here
exports.levelSequences = {
    intro: [
        require('./intro/commits').level,
    ]
};

// there are also cute names and such for sequences
var sequenceInfo = exports.sequenceInfo = {
    intro: {
        displayName: {
            'de_DE': 'Einführung'
        },
        about: {
            'de_DE': 'Eine gut abgestimmte Einführung in die wichtigsten Git-Befehle'
        }
    }
};

exports.getTabForSequence = function(sequenceName) {
    var info = sequenceInfo[sequenceName];
    return (info.tab) ?
        info.tab :
        'main';
};
