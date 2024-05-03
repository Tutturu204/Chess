import React from 'react'
import styled from 'styled-components'

const SquareContainer = styled.div
`
    background-color: ${props => props.fill};
    color: ${props => (props.stroke)};
    width: 100%;  
    height: 100%;
`


export default function Square({black, children}) {
    const fill = black ? 'black' : 'white'
    const stroke = black ? 'white' : 'black'
    return (
        <SquareContainer fill={fill} stroke={stroke}>
            {children}
        </SquareContainer>
    )
}