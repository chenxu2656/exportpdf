const exportPdf = (
    element: HTMLElement,
    scaleX: number = 1,
    scaleY: number = 1,
    originX:  number = 0.5,
    originY:  number = 0.1
    )=>{
    console.log(originX);
    
    const ele = element
    const printELe = ele;
    // const iframeWidth = ele.style.width
    // create iframe to 
    const iframe = document.createElement('IFRAME') as HTMLIFrameElement;
    iframe.setAttribute('id', "printIframe")
    let doc: HTMLElement|undefined;
    iframe.setAttribute('style', `position:absolute;width:0px;height:800px;padding:0px;margin:0px;`);
    document.body.appendChild(iframe);
    const styleOuter = document.createElement("style") as HTMLStyleElement;
    const styleTemplete: string = `
    @media print{
      header nav, footer, video, audio, object, embed {
        display: none;
      }
      body, div, img,dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, table, th, td {margin:0; padding:0;}  
      body{
        transform: scale(${+scaleX},${+scaleY});
        -ms-transform: scale(${+scaleX},${+scaleY});
        -moz-transform: scale(${+scaleX},${+scaleY});
        -webkit-transform: scale(${+scaleX},${+scaleY});
        -o-transform: scale(${+scaleX},${+scaleY});
        transform-origin: ${+originX * 100}% ${+originY * 100}%;
        -webkit-transform-origin: ${+originX * 100}% ${+originY * 100}%;
        -ms-transform-origin: ${+originX * 100}% ${+originY * 100}%;
        -moz-transform-origin: ${+originX * 100}% ${+originY * 100}%;
        -o-transform-origin: ${+originX * 100}% ${+originY * 100}%;
      }
    }
    `
    //@ts-ignore
    if (styleOuter?.styleSheet) {
      //@ts-ignore
      styleOuter.styleSheet.cssText = styleTemplete;
    } else {
      styleOuter.innerHTML = styleTemplete;
    }
    iframe.contentWindow!.onbeforeprint = (() => {
      console.log('start');
    })
    iframe.contentWindow!.onafterprint = (() => {
      document.body.removeChild(iframe)
    })
    doc = iframe.contentWindow?.document.documentElement;
    let virtualDom = document.createElement('div')
    virtualDom.innerHTML = printELe?.innerHTML
    virtualDom.style.height = '100px'
    doc!.getElementsByTagName('head')[0].appendChild(styleOuter)
    doc!.getElementsByTagName('body')[0].appendChild(virtualDom)
    // ie
    iframe.contentWindow?.focus();
    iframe.contentWindow?.print();

  }
export default exportPdf