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
