function duplicates(arr) {
    let foo_arr = [];
    for(let i = 0;i < arr.length;i++){
        if(arr.indexOf(arr[i]) != i){
            foo_arr.push(arr[i]);
        }
    } 
    let bar = [];
    for(let i = 0; i < foo_arr.length; i++){
        if(bar.indexOf(foo_arr[i]) == -1){
            bar.push(foo_arr[i]);
        }
    }
    return bar;
}
console.log(duplicates([1,2,2,2,2,2]));