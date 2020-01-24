# next-pdf-merge
> An npm module to merge PDFs based on pdfbox for next.

## installation
```bash
npm install -S @feizheng/next-pdf-merge
```

## usage
```js
import '@feizheng/next-pdf-merge';

nx.pdfMerge({
  input: './__tests__/docs/*.pdf',
  output: './__tests__/output.pdf'
})
```

## resources
- https://pdfbox.apache.org/2.0/commandline.html#pdfmerger
- https://medium.com/@chetansachdev/solved-installing-node-pdfbox-in-osx-3af95f0285c2
- https://github.com/karuppiah7890/easy-pdf-merge
