function dishes(receipe, ingredient) {
  let answer;

  for (const key in receipe) {
    if (!ingredient[key]) {
      console.log("bura yoxladim")
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

console.log("answer is " + answer)
