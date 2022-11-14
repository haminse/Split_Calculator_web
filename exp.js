var arr = [1,2,3];
arr.forEach(function(i){
    i/6;
});

console.log(arr);


var new_arr = arr.map(
    (x) => {return(x/6).toFixed(2)}
);
console.log(new_arr);

