import React from 'react'
import styled from 'styled-components'

const UserDiv = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 2px solid #e6e6e6;
`

const StyledImg = styled.img`
  border-radius: 50%;
  padding: 0 20px;
  width: 50%;
  flex-grow: 1;
`

function UserInfo({ avatarURL, userName }) {
  return (
    <UserDiv>
      <StyledImg
        src={avatarURL}
        alt={`Avatar of ${userName}`}
      />
    </UserDiv>
  )
}

export default UserInfo