'use strict';

const fs = require('fs');
const bitHeader = require('../lib/bit-headers');
const transformer = require('../lib/transform');
const readWrite = require('../lib/readWrite');
const expect = require('chai').expect;
const assert = require('assert');
const chaiFiles = require('chai-files');
const file = chaiFiles.file;
const dir = chaiFiles.dir;

describe('readWrite', function(){
  describe('transform', function(){
    it('should recognize a new file being created when the readWrite function is invoked.', done =>{
      readWrite();
      expect(file('newhouse.bmp')).to.exist;
      done();
    });
  });
});
