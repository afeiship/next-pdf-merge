(function () {
  require('../src');

  const del = require('del');
  const fs = require('fs');

  describe('api.basic test', () => {
    beforeAll(() => {
      console.log('before');
      del('__tests__/output.pdf');
    });

    test('nx.pdfMerge should create an ouput file', function (done) {
      nx.pdfMerge({
        input: './__tests__/docs/*.pdf',
        output: './__tests__/output.pdf'
      }).then((res) => {
        done();
        expect(fs.existsSync('./__tests__/output.pdf')).toBe(true);
      });
    });
  });
})();
