//export function observe(receive) {
//   const randPos = () => Math.floor(Math.random() * 8)
//   setInterval(() => receive([randPos(), randPos()]), 500)
// }

//event driving programming
//Observer Pattern


let knightPosition = [0, 0]
let observer = null


//change the state of the observer
function emitChange() {
  observer(knightPosition)
}

//set up the observer and call the function initially
export function observe(o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.')
  }

  observer = o
  emitChange()
}

//each time there is a change in the knightPosition -> trigger emitChange() that change the state
export function moveKnight(toX, toY) {
  knightPosition = [toX, toY]
  emitChange()
}


export function canMoveKnight(toX, toY){
    const [x, y] = knightPosition
    const dx = toX - x
    const dy = toY - y

  return (
    (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    (Math.abs(dx) === 1 && Math.abs(dy) === 2)
  )
}
