// bubble Sort
function bubbleSort(arr){
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr.length ; j ++){
      if(arr[j] > arr[j+1]){
        let temp = arr[j];
        arr[j]= arr[j+1];
        arr[j+1] = temp;
      }
    }
  }

  console.log(arr);
}

bubbleSort([3,4,1,2,9]);

// Selection sort
function selectionSort(arr){
  for(var i = 0; i < arr.length ; i ++){
    let minIndex = i;
    for(var j = i+1; j < arr.length ; j ++){
      if(arr[j] < arr[minIndex]) minIndex = j;
    }
    const temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  console.log(arr);
}

selectionSort([3,4,1,2,9])

// Insertion Sort
function insertionSort(arr){
  for(var i = 1; i < arr.length ; i++){
    let key = arr[i];
    for(var j = i - 1; j >= 0; j--){
      console.log(`current key is ${key} and compares to ${arr[j]}(j is ${j})`);
      if(arr[j] > key){
        console.log(`${arr[j]} is bigger than ${key}, so push it to ${j+1}`)
        arr[j+1]= arr[j];
        console.log(`current array is ${arr}`);
      }else{
        console.log(`found the place to sit: ${j+1}`)
        break;
      }
      arr[j] = key;
    }
    console.log(arr);
  }
  
}

insertionSort([3,4,1,2,9,12, 5, 3,2]);



// Merge Sort
function mergeSort(arr){

  if(arr.length <= 1){
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right)
}

function merge(left, right){
  let result = [];
  let i = 0; j = 0;
  
  while(i < left.length && j < right.length){
    result.push(
      left[i] < right[j] ? left[i++] : right[j++]
    )
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([3,4,1,2,9]));

// Quick Sort
function quickSort(arr){
  console.log(`Quick sort function called : input array is ${arr}`)
  if(arr.length <= 1 ) {
    console.log(`single element array, return ${arr}`);
    return arr;
  }

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for(var i = 0;  i < arr.length - 1; i++){
    if(pivot < arr[i]){
      right.push(arr[i]);
      console.log(`${arr[i]} > ${pivot} -> current right : ${right}`)
    }else{
      left.push(arr[i]);
      console.log(`${arr[i]} < ${pivot} -> current left : ${left}`)
    }
  }

  return([...quickSort(left), pivot, ...quickSort(right)]);
}

console.log(quickSort([3,4,1,2,9, 5, 8]))


console.log(new Array([1,3,4,5].length).fill(0));
console.log(new Array(10).fill(0));

console.log(Math.floor( 159 / 1 ) % 10);

function radixSort(arr) {
  const a = [...arr];
  const max = Math.max(...a);
  let exp = 1;

  while (Math.floor(max / exp) > 0) {
    countingSort(a, exp);
    exp *= 10;
  }

  return a;
}

function countingSort(arr, exp) {
  console.log(`${exp}자리 수의 안전 정렬 수행`);
  const output = new Array(arr.length).fill(0);
  const count = new Array(10).fill(0);

  for (let i = 0; i < arr.length; i++) {
    const digit = Math.floor(arr[i] / exp) % 10;
    count[digit]++;
    console.log(`digit : ${digit}의 개수 : ${count[digit]}`);
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    const digit = Math.floor(arr[i] / exp) % 10;
    output[count[digit] - 1] = arr[i];
    count[digit]--;
    console.log(`${arr[i]}의 1의 자리 수인 ${digit}은 정렬된 결과 배열의 ${count[digit] + 1}에 들어가야 함`)
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = output[i];
  }
  console.log(arr);
}

console.log(radixSort([5,3,2,73,21,99,0,23,12]));
