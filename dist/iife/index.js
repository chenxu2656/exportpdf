var exportpdf = (function () {
    'use strict';

    var exportPdf = function (element, scaleX, scaleY, originX, originY) {
        var _a, _b, _c;
        if (scaleX === void 0) { scaleX = 1; }
        if (scaleY === void 0) { scaleY = 1; }
        if (originX === void 0) { originX = 0.5; }
        if (originY === void 0) { originY = 0.1; }
        console.log(originX);
        var ele = element;
        var printELe = ele;
        // const iframeWidth = ele.style.width
        // create iframe to 
        var iframe = document.createElement('IFRAME');
        iframe.setAttribute('id', "printIframe");
        var doc;
        iframe.setAttribute('style', "position:absolute;width:0px;height:800px;padding:0px;margin:0px;");
        document.body.appendChild(iframe);
        var styleOuter = document.createElement("style");
        var styleTemplete = "\n    @media print{\n      header nav, footer, video, audio, object, embed {\n        display: none;\n      }\n      body, div, img,dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, table, th, td {margin:0; padding:0;}  \n      body{\n        transform: scale(".concat(+scaleX, ",").concat(+scaleY, ");\n        -ms-transform: scale(").concat(+scaleX, ",").concat(+scaleY, ");\n        -moz-transform: scale(").concat(+scaleX, ",").concat(+scaleY, ");\n        -webkit-transform: scale(").concat(+scaleX, ",").concat(+scaleY, ");\n        -o-transform: scale(").concat(+scaleX, ",").concat(+scaleY, ");\n        transform-origin: ").concat(+originX * 100, "% ").concat(+originY * 100, "%;\n        -webkit-transform-origin: ").concat(+originX * 100, "% ").concat(+originY * 100, "%;\n        -ms-transform-origin: ").concat(+originX * 100, "% ").concat(+originY * 100, "%;\n        -moz-transform-origin: ").concat(+originX * 100, "% ").concat(+originY * 100, "%;\n        -o-transform-origin: ").concat(+originX * 100, "% ").concat(+originY * 100, "%;\n      }\n    }\n    ");
        //@ts-ignore
        if (styleOuter === null || styleOuter === void 0 ? void 0 : styleOuter.styleSheet) {
            //@ts-ignore
            styleOuter.styleSheet.cssText = styleTemplete;
        }
        else {
            styleOuter.innerHTML = styleTemplete;
        }
        iframe.contentWindow.onbeforeprint = (function () {
            console.log('start');
        });
        iframe.contentWindow.onafterprint = (function () {
            document.body.removeChild(iframe);
        });
        doc = (_a = iframe.contentWindow) === null || _a === void 0 ? void 0 : _a.document.documentElement;
        var virtualDom = document.createElement('div');
        virtualDom.innerHTML = printELe === null || printELe === void 0 ? void 0 : printELe.innerHTML;
        virtualDom.style.height = '100px';
        doc.getElementsByTagName('head')[0].appendChild(styleOuter);
        doc.getElementsByTagName('body')[0].appendChild(virtualDom);
        // ie
        (_b = iframe.contentWindow) === null || _b === void 0 ? void 0 : _b.focus();
        (_c = iframe.contentWindow) === null || _c === void 0 ? void 0 : _c.print();
    };

    return exportPdf;

})();
