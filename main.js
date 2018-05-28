// function Stack() {
//   this.stack = [];
//   this.push = function(num) {
//       this.stack.push(num);
//   };
//
//   this.pop = function () {
//       if(this.stack){
//         return this.stack.pop();
//       }
//
//   };
// }
//
//
// function Q() {
//     this.que = [];
//     this.push = function (num) {
//         this.que.push(num);
//     };
//     this.pop = function () {
//         if(this.que){
//             const shiftedElem = this.que.shift();
//             return shiftedElem;
//         }
//     };
// }
//************************************
let Stack = function () {
    this.num = null;
    this.size = 0;
};
let Node = function (data) {
    this.data = data;
    this.previous = null;
    this.next = null;
};
Stack.prototype.push = function (data) {
    let node = new Node(data);

    node.previous = this.num;
    this.num = node;
    this.size += 1;
    return this.num;
};
Stack.prototype.pop = function () {
    let popedData = this.num;
    this.num = this.num.previous;
    this.size -= 1;
    return popedData;
};
// ******************************************************
let Q = function () {
    this.first = null;
    this.size = 0;
};
Q.prototype.push = function (data) {
    let node = new Node(data);

    if (!this.first){
        this.first = node;
    } else {
        let i = this.first;
        while (i.next) {
            i = i.next;
        }
        i.next = node;
    }
    this.size += 1;
    return node;
};
Q.prototype.pop = function () {
    let popedElem = this.first;
    this.first = this.first.next;
    this.size -= 1;
    return popedElem;
};


