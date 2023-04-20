function dishes(receipe, ingredient) {
  let answer;

  for (const key in receipe) {
    if (!ingredient[key]) {
      console.log("not found")
      answer = 0
      break;
    }
    let count = Math.floor(ingredient[key] / receipe[key])
    if (!answer) {
      answer = count
    } else if (count < answer) {
      answer = count
    }
  }



  return answer

}


let answer = dishes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 });
let answer2 = dishes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});

console.log("answer is " + answer)
console.log("answer2 is " + answer2)
