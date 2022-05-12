### 介绍
--- 
把dom节点导出成pdf。 目前比较流行的方案是利用html2canvas,jspdf. 但是导出之后是图片格式的，无法复制，且文件较大、不清晰。 所以直接利用js 调用 window.print 去实现导出。

**缺点**： 无法静默导出

**Demo**: http://qiniu-btfblog-bucket.xccit.cn/demo/exportpdf.mov

### 安装
```bash
npm i export-dom2pdf
```

### 使用

``` javascript
import exportPdf from 'export-dom2pdf'

exportPdf(
    element: HTMLElement,   // dom 
    scaleX: number = 1,     // 水平缩放比例，0-1 ，Number. default=1
    scaleY: number = 1,     // 垂直缩放比例，0-1 ，Number. default=1
    originX:  number = 0.5, // 水平缩放原点， 0-1 ， Number. default=0.5
    originY:  number = 0.1  // 垂直缩放原点， 01- ， Number. default=0.1
)
```

