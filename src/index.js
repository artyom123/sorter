class Sorter {
  constructor() {
    this.arr = [];
    this.compare = null;
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    let num = 0,
        k = 0,
        arrTime = [],
        sorty = this.compare || ((i,j)=>i-j);
    
    indices.sort((x,y)=>x-y);
    indices.forEach(key=>arrTime.push(this.arr[key]));
    arrTime.sort(sorty);
    indices.forEach(key1=>this.arr[key1] = arrTime[k++]);
  }

  setComparator(compareFunction) {
    this.compare = compareFunction;
  }
}

module.exports = Sorter;