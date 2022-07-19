const arr = [];
for(let i=0; i<=10; i++) {
    arr[i] = {'id' : i};
    arr[i] = {'title' : 'Car' + i};
}
console.log(arr);
export const cars = arr;