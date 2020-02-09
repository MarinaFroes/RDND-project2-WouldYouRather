import React from 'react'
import styled from 'styled-components'
import { formatDate } from '../utils/helpers'

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #e8e9eb;
  padding: 0 20px;
  background-color: ${props => props.titleColor || "#ccedd5"};
`

const Date = styled.p`
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
      {timestamp && <Date>Created on: {formatDate(timestamp)}</Date>}
    </Title>
  )
}

export default CardTitle