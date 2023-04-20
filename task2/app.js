function dishes(receipe, ingredient) {
  let answer;
  Object.keys(receipe).forEach((key) => {
    if (!ingredient[key]) {
      answer = 0
      return false
    }
    console.log("gelme" , ingredient[key])
    let count =  Math.floor (  ingredient[key] / receipe[key ] ) 
    if (!answer) {
      answer = count
    } else if (count < answer) {
      answer = count
    }


  })

  return answer

}


let answer = dishes({ flourr: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 });

console.log("answer is " + answer)
