import React from "react";
import styled from 'styled-components';
import { Container, Wrapper } from "./style";

const S1 = () => {
    return (
        <StyledWrapper>
            <Container >
                <Title>
                    <h4>
                        Solution Here
                    </h4>
                    <p>Answer below this.</p>
                </Title>
                <AnswerDiv>
                    <FlexItem class="grid-item">1st</FlexItem>
                    <FlexItem class="grid-item">2nd</FlexItem>
                    <FlexItem class="grid-item">3rd</FlexItem>
                    <FlexItem class="grid-item">4th</FlexItem>


                </AnswerDiv>
            </Container>
        </StyledWrapper>
    )
}

export default S1

const StyledWrapper = styled(Wrapper)`
background:#F6F7F9;
`

const Title = styled.div`
h4{
    font-size: 32px;
font-family: Lexend Medium;
font-style: normal;
font-weight: 500;
line-height: 40px;
letter-spacing: -0.4px;
    span{
        background:#FAE090;
    }
}
p{
    font-size: 18px;
font-family: Lexend Regular;
font-style: normal;
font-weight: 400;
line-height: 28px;
}
`
const QuestionsDiv = styled.div`
ul{
    display:flex;
    flex-direction:column;
}
li{
    font-size:20px;
}
`
const AnswerDiv = styled.div`
display:grid;
gap:1rem;
 @media (max-width:480px){
 grid-template-columns: auto auto ;

 };
  @media (min-width: 481px) and (max-width: 767px){
 grid-template-columns: auto auto auto ;

 };
  
  @media (min-width: 767px) and (max-width: 1280px){
 grid-template-columns: auto auto auto auto ;

 };
  @media (min-width: 1281px){
    grid-template-columns: auto auto auto auto;
  };





`

const FlexItem = styled.div`
padding:80px;
background:#FFFFFF;
border: 1px solid #000000;
border-radius: 20px;
text-align: center;
`