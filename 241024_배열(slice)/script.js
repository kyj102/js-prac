const animals = ["ant", "bison", "camel", "duck", "elephant"];

// 1, ["ant", "bison", "camel", "duck", "elephant"]
// 1-1. undefined 사용
const slicedAnimals = animals.slice(undefined);
console.log(slicedAnimals);
// 1-2. 양수 사용
const slicedAnimals1 = animals.slice(0);
console.log(slicedAnimals1);
// 1-3. 음수사용
const slicedAnimals2 = animals.slice(-5);
console.log(slicedAnimals2);


// 2, ["duck", "elephant"]
// 2-1. 양수 사용
const slicedAnimals3 = animals.slice(3);
console.log(slicedAnimals3);
// 2-2. 음수 사용
const slicedAnimals4 = animals.slice(-2);
console.log(slicedAnimals4);


// 3, ["camel", "duck", "elephant"]
// 3-1. 양수 사용
const slicedAnimals5 = animals.slice(2);
console.log(slicedAnimals5);
// 3-2. 음수 사용
const slicedAnimals6 = animals.slice(-3);
console.log(slicedAnimals6);


// 4, ["camel", "duck"]
// 4-1. 양수 사용
const slicedAnimals7 = animals.slice(2,4);
console.log(slicedAnimals7);
// 4-2. 음수 사용
const slicedAnimals8 = animals.slice(-3, -1);
console.log(slicedAnimals8);


// 5, []
const slicedAnimals9 = animals.slice(1,1);
console.log(slicedAnimals9);


// 6, ["elephant"]
// 6-1. 양수 사용
const slicedAnimals10 = animals.slice(4);
console.log(slicedAnimals10);
// 6-2. 음수 사용
const slicedAnimals11 = animals.slice(-1);
console.log(slicedAnimals11);


// 7, ["ant"]
// 7-1.undefined 사용
const slicedAnimals12 = animals.slice(undefined, 1);
console.log(slicedAnimals12);
// 7-2. 양수 사용
const slicedAnimals13 = animals.slice(0,1);
console.log(slicedAnimals13);
// 7-3. 음수 사용
const slicedAnimals14 = animals.slice(-5, -4);
console.log(slicedAnimals14);