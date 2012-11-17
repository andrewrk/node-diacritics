var removeDiacritics = require('../').remove,
    assert = require('assert');

assert.strictEqual(removeDiacritics("Iлｔèｒｎåｔïｏｎɑｌíƶａｔï߀ԉ"), "internationalization");
assert.strictEqual(removeDiacritics("Båｃòл íｐѕùｍ ԁｏɭ߀ｒ ѕïｔ ａϻèｔ âùｔê ａԉᏧ߀üïｌɭê ƃëéｆ ｃｕｌρá ｆïｌèｔ ϻｉǥｎòｎ ｃｕρｉᏧａｔａｔ ｕｔ êлｉｍ ｔòлɢùê."), "bacon ipѕum dolor ѕit amet aute andouille beef culpa filet mignon cupidatat ut enim tongue.");
assert.strictEqual(removeDiacritics("ᴎᴑᴅᴇȷʂ"), "nodejs");

assert.strictEqual(removeDiacritics("hambúrguer"), "hamburguer");
