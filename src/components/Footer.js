import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import styled from 'styled-components'
import mylogo from '../icons/mylogo.svg'

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 5rem;
  padding: 1rem 0;
`

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledIcon = styled.a`
  color: silver;
  font-size: 1.5rem;
  margin: 0.5rem;
`

const StyledImg = styled.img`
  height: 1.5rem;
  margin: 0;
`

function Footer() {
  return (
    <StyledFooter>
      <p>Page written by Marina Froes A. Costa</p>
      <IconContainer>
        <StyledIcon
          className="icon"
          href="https://github.com/MarinaFroes"
          target="_blank"
          rel="noopener noreferrer"
        >
          {<FaGithub />}
        </StyledIcon>
        <StyledIcon
          className="icon"
          href="https://www.linkedin.com/in/marina-froes-a-costa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {<FaLinkedin />}
        </StyledIcon>
        <StyledIcon
          className="icon"
          href="mailto:facosta.marina@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {<FaEnvelope />}
        </StyledIcon>
        <StyledIcon
          className="icon"
          href="https://marinafroes.github.io/Portfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledImg src={mylogo} alt="" />
        </StyledIcon>
      </IconContainer>
    </StyledFooter>
  )
}

export default Footer
