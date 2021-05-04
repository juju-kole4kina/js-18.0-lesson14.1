'use strict';

function DomElement(selector, height, width, bg, fontSize) {
   this.selector = selector;
   this.height = height;
   this.width = width;
   this.bg = bg;
   this.fontSize = fontSize;
}

DomElement.prototype.newElem = function () {
   let elem;
   if (this.selector[0] === '.') {
      elem = document.createElement('div');
      elem.className = this.selector.slice(1);
   }
   if (this.selector[0] === '#') {
      elem.document.createElement('p');
      elem.id = this.selector.slice(1);
   }
   elem.style.cssText = `height: ${this.height}px;
  width: ${this.width}px;
  background: ${this.bg};
  font-size: ${this.fontSize};`;
   return elem;
};

let elemDiv = new DomElement('.block', 100, 200, 'green', 12);
let elemP = new DomElement('#one', 150, 400, 'red', 12);

document.body.appendChild(elemDiv.newElem());
document.body.appendChild(elemP.newElem());