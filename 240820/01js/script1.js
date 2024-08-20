let numSet1 = new Set();
numSet1.add("one").add("two");
console.log(numSet1);


let numSet2 = new Set([1, 2, 3]);
console.log(numSet2);   // Set(3) {1, 2, 3}

let numSet3 = new Set([1, 2, 1, 3, 1, 5]);
console.log(numSet3);    // Set(4) {1, 2, 3, 5}


const langauages = new Set(["JS", "TS", "HTML", "CSS"]);

for(let langauage of langauages.values()) {
  console.log(langauage)
} 