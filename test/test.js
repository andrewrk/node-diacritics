var removeDiacritics = require('../').remove,
    assert = require('assert');

assert.strictEqual(removeDiacritics("Iлｔèｒｎåｔïｏｎɑｌíƶａｔï߀ԉ"), "iлternationalizatioԉ");
assert.strictEqual(removeDiacritics("Båｃòл íｐѕùｍ ԁｏɭ߀ｒ ѕïｔ ａϻèｔ âùｔê ａԉᏧ߀üïｌɭê ƃëéｆ ｃｕｌρá ｆïｌèｔ ϻｉǥｎòｎ ｃｕρｉᏧａｔａｔ ｕｔ êлｉｍ ｔòлɢùê."), "bacoл ipѕum ԁoɭor ѕit amet aute aԉdouilɭe beef culpa filet mignon cupidatat ut eлim toлgue.");
