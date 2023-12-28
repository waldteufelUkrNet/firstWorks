/* made by waldteufel@ukr.net */

var sizeInfoWindow1 = document.createElement("div");  //чорне поле
sizeInfoWindow1.style.cssText = "width: 213px; \
                          height: 72px; \
                          background-color: black; \
                          color: white; \
                          font-size: 12px; \
                          text-align: left; \
                          padding: 9px 3px; \
                          line-height: 7px; \
                          border-radius: 6px; \
                          position: fixed; \
                          left: 3px; \
                          bottom: 3px; \
                          z-index: 100; \
                        ";
document.body.appendChild(sizeInfoWindow1);

var sizeInfo = document.createElement("p");           //точка зламу
sizeInfo.textContent = "точка зламу:";
sizeInfoWindow1.appendChild(sizeInfo);

var bootstrapClass = document.createElement("p");     //клас Bootstrap
bootstrapClass.textContent = "клас Bootstrap:";
sizeInfoWindow1.appendChild(bootstrapClass);

var currentSize = document.createElement("p");        //поточна ширина
currentSize.textContent = "поточна ширина:";
sizeInfoWindow1.appendChild(currentSize);

var sizeInfoValue = document.createElement("p");      //точка зламу (поле для значення)
sizeInfoValue.style.cssText = "width: 100px; \
                          height: 20px; \
                          line-height: 18px; \
                          border: 1px solid red; \
                          background-color: red; \
                          text-align: left; \
                          padding: 0 4px; \
                          border-radius: 2px; \
                          position: absolute; \
                          left: 110px; \
                          top: 3px; \
                          z-index: 100; \
                        ";
sizeInfoWindow1.appendChild(sizeInfoValue);

var bootstrapClassValue = document.createElement("p");  //клас Bootstrap (поле для значення)
bootstrapClassValue.style.cssText = "width: 100px; \
                          height: 20px; \
                          line-height: 18px; \
                          border: 1px solid red; \
                          background-color: red; \
                          text-align: left; \
                          padding: 0 4px; \
                          border-radius: 2px; \
                          position: absolute; \
                          left: 110px; \
                          top: 26px; \
                          z-index: 100; \
                        ";
sizeInfoWindow1.appendChild(bootstrapClassValue);

var currentSizeValue = document.createElement("p");     //поточна ширина (поле для значення)
currentSizeValue.style.cssText = "width: 100px; \
                          height: 20px; \
                          line-height: 18px; \
                          border: 1px solid red; \
                          background-color: red; \
                          text-align: left; \
                          letter-spacing: 2px; \
                          padding: 0 4px; \
                          border-radius: 2px; \
                          position: absolute; \
                          left: 110px; \
                          top: 49px; \
                          z-index: 100; \
                        ";
sizeInfoWindow1.appendChild(currentSizeValue);

function sizeWindowsHelper() {
  
  var delta = -17;

  currentSizeValue.textContent = document.body.offsetWidth - delta + " px";

  if (document.body.offsetWidth < 320 + delta) {
    sizeInfoValue.textContent = " менше 320 px";
    bootstrapClassValue.textContent = " col-*";
  }

  if (320 + delta < document.body.offsetWidth && document.body.offsetWidth < 575 + delta) {
    sizeInfoValue.textContent = "320 px і більше";
    bootstrapClassValue.textContent = " col-*";
  }

  if (576 + delta <= document.body.offsetWidth && document.body.offsetWidth < 767 + delta) {
    sizeInfoValue.textContent = "576 px і більше";
    bootstrapClassValue.textContent = " col-sm-*";
  }

  if (768 + delta <= document.body.offsetWidth && document.body.offsetWidth < 991 + delta) {
    sizeInfoValue.textContent = "768 px і більше";
    bootstrapClassValue.textContent = " col-md-*";
  }

  if (992 + delta <= document.body.offsetWidth && document.body.offsetWidth < 1199 + delta) {
    sizeInfoValue.textContent = "992 px і більше";
    bootstrapClassValue.textContent = " col-lg-*";
  }

  if (1200 + delta <= document.body.offsetWidth && document.body.offsetWidth < 1919 + delta) {
    sizeInfoValue.textContent = "1200 px і більше";
    bootstrapClassValue.textContent = " col-xl-*";
  }

  if (1920 + delta <= document.body.offsetWidth) {
    sizeInfoValue.textContent = "1920 px і більше";
    bootstrapClassValue.textContent = " col-xl-*";
  }

}

setInterval(sizeWindowsHelper, 100);