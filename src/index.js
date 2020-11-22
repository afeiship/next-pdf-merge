(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var exec = require('child_process').exec;
  var path = require('path');
  var DEFAULT_OPTIONS = {
    input: '*.pdf',
    output: 'combined.pdf'
  };

  nx.pdfMerge = function (inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    return new Promise(function (resolve, reject) {
      var clis = [
        'java -jar',
        path.join(__dirname, 'pdfbox-app-2.0.18.jar'),
        'PDFMerger',
        options.input,
        options.output
      ].join(' ');

      return exec(clis, function (err) {
        if (err) return reject(err);
        resolve();
      });
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.pdfMerge;
  }
})();
