# next-pdf-merge
> An npm module to merge PDFs based on pdfbox for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-pdf-merge
```

## usage
```js
import '@jswork/next-pdf-merge';

nx.pdfMerge({
  input: './__tests__/docs/*.pdf',
  output: './__tests__/output.pdf'
})
```

## resources
- https://pdfbox.apache.org/2.0/commandline.html#pdfmerger
- https://medium.com/@chetansachdev/solved-installing-node-pdfbox-in-osx-3af95f0285c2
- https://github.com/karuppiah7890/easy-pdf-merge

## license
Code released under [the MIT license](https://github.com/afeiship/next-pdf-merge/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-pdf-merge
[version-url]: https://npmjs.org/package/@jswork/next-pdf-merge

[license-image]: https://img.shields.io/npm/l/@jswork/next-pdf-merge
[license-url]: https://github.com/afeiship/next-pdf-merge/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-pdf-merge
[size-url]: https://github.com/afeiship/next-pdf-merge/blob/master/dist/next-pdf-merge.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-pdf-merge
[download-url]: https://www.npmjs.com/package/@jswork/next-pdf-merge
