#!/usr/bin/node
/* ... */

class Rectangle {
    constructor(w, h) {
      if (typeof w === 'number' && typeof h === 'number' && w > 0 && h > 0) {
        this.width = w;
        this.height = h;
      } else {
        this.width = 0;
        this.height = 0;
      }
    }
  
    print() {
      if (this.width === 0 || this.height === 0) {
        return;
      }
  
      for (let i = 0; i < this.height; i++) {
        console.log('X'.repeat(this.width));
      }
    }
  }