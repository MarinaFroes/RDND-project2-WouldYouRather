import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
  display: flex;
  border-bottom: 2px solid #e8e9eb;
  padding-left: 20px;
  background-color: ${props => props.titleColor || "#ccedd5"};
`

function CardTitle({ titleColor, text }) {
  return (
    <Title titleColor={titleColor}>
      <p>{text}</p>
    </Title>
  )
}

export default CardTitle