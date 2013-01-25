var removeDiacritics = require('../').remove,
    assert = require('assert');

assert.strictEqual(removeDiacritics("Iлｔèｒｎåｔïｏｎɑｌíƶａｔï߀ԉ"),
    "Internationalizati0n");
assert.strictEqual(removeDiacritics("Båｃòл íｐѕùｍ ԁｏɭ߀ｒ ѕïｔ ａϻèｔ âùｔê ａԉᏧ߀üïｌɭê ƃëéｆ ｃｕｌρá ｆïｌèｔ ϻｉǥｎòｎ ｃｕρｉᏧａｔａｔ ｕｔ êлｉｍ ｔòлɢùê."),
    "Bacon ipѕum dol0r ѕit aMet aute and0uille beef culpa filet Mignon cupidatat ut enim tonGue.");
assert.strictEqual(removeDiacritics("ᴎᴑᴅᴇȷʂ"), "NoDEJs");

assert.strictEqual(removeDiacritics("hambúrguer"), "hamburguer");
assert.strictEqual(removeDiacritics("hŒllœ"), "hOElloe");
