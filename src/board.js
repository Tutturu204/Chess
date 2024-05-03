import React from 'react'
import BoardSquare from './boardSquare'
import Knight from './knight'
import styled from 'styled-components'
import { canMoveKnight, moveKnight } from './game'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'




const SquareContainer = styled.div
`
    width: 12.5%;
    height: 12.5%;
`

function handleSquareClick(toX, toY) {
    if (canMoveKnight(toX, toY)){
        moveKnight(toX, toY)
    }
  }


function renderPiece(x, y, [knightX, knightY]) {
    if (x === knightX && y === knightY) {
      return <Knight />
    }
}
function render_square(i, knightPosition){
    
    //x = column position
    //y = row position

    const x = i % 8
    const y = Math.floor(i / 8)
        
    return (
            <SquareContainer key={i} onClick={() => handleSquareClick(x, y)}>
                <BoardSquare x={x} y={y}>{renderPiece(x, y, knightPosition)}</BoardSquare>
            </SquareContainer>
        )
}

export default function Board({knightPosition}) {
    const squares = []
    for (let i = 0; i < 64; i++) {
      squares.push(render_square(i, knightPosition))}
    return (
        <DndProvider backend={HTML5Backend}>
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexWrap: 'wrap'
                }}
            >
                {squares}
            </div>
        </DndProvider>
    )
    
  
  
}