import React from 'react'
import styled from 'styled-components'
import { formatDate } from '../utils/helpers'

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: ${props => props.titleColor || "#ccedd5"};
  border-radius: 0.5rem 0.5rem 0 0;

  @media only screen and (max-width: 700px){
    flex-direction: column;
  }
`

const StyledDate = styled.p`
  font-size: 0.8rem;
  color: #535454;
`
const StyledText = styled.p`
  font-zise: 1.2rem;
  font-weight: bold;
`

function CardTitle({ titleColor, text, timestamp }) {
  return (
    <Title titleColor={titleColor} timestamp={timestamp}>
      <StyledText>{text}</StyledText>
      {timestamp && <StyledDate>Created on: {formatDate(timestamp)}</StyledDate>}
    </Title>
  )
}

export default CardTitle