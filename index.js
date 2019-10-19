const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(gameArray) {
  let val = gameArray.find(gameObj => gameObj.result === "W");
  if (val !== undefined) {
    return val.year
  } else {
    return undefined
  }
}
