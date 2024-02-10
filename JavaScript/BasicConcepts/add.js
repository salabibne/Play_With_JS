const array_eam = [1,23,2]
array_eam.push(4,5);
console.log(array_eam);
// OutPut : [ 1, 23, 2, 4, 5 ]

const array_new = [7,8,9]
const array_modify = array_new.concat(4,5,6);
console.log(array_new); 
// orginal array --> [7,8,9]
console.log(array_modify);
// modified array--> [ 7, 8, 9, 4, 5, 6 ]