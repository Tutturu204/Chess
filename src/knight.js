import React from "react";
import styled from "styled-components";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./Constants";


const KnightWrapper = styled.span`
  display: inline-block; // Maintain the width and height
  width: 100px; // Set the desired width
  height: 100px; // Set the desired height
  font-size: 100px; // Make the Unicode character fit within the desired dimensions
  line-height: 100px; // Align the character vertically
  text-align: center; // Center the character horizontally
  opacity: ${(props) => (props.isDragging ? 0.5 : 1)};
  font-weight: bold;
  cursor: move;
`;

export default function Knight(){

    const [{isDragging}, drag] = useDrag(() => ({
        type: ItemTypes.KNIGHT,
        collect: monitor => ({
          isDragging: !!monitor.isDragging(),
        }),
      }))
    return <KnightWrapper ref={drag} isDragging={isDragging}>♘</KnightWrapper>
}