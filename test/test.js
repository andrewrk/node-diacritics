var removeDiacritics = require('../').remove,
    assert = require('assert');

assert.strictEqual(removeDiacritics("Iлｔèｒｎåｔïｏｎɑｌíƶａｔï߀ԉ"), "iлternationalizati߀ԉ");
