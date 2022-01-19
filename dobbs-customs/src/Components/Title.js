import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: rgb(128,128,128,95%);
    display:flex;
    flex-flow:row wrap;
    justify-content:center;
    align:top;
    width:100%;
    height:75px;
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    z-index:100;
`

const InnerContainer = styled.div`
    background-color:white;
    width:50%;
    height:75%;
    border-bottom-left-radius:20px;
    border-bottom-right-radius:20px;
`

const H1 = styled.h1`
    color:black;
    text-align:center;
    font-size: 50px;
    letter-spacing:0.5rem;
    font-family: serif;
`

export default function Title() {
    return(
        <Container>
            <InnerContainer>
                <H1>Dobbs Customs</H1>
            </InnerContainer>
        </Container>
    )}