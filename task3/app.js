const { log } = console

function convert(text) {
  let newText = ""
  for (let i = 0; i < text.length; i++) {
    let foo = text[i]
    foo = foo.toUpperCase()
    // foo = foo.repeat(i + 1) 
    for(let k =1; k<i+1;k++){
      foo += text[i]
    }


    foo += "-"

    newText += foo

  }
  return newText.substring(0, newText.length - 1)
}

let result = convert("dkjb")

log(result)