import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width:100%;
    height:300px;
    margin-top:125px;
    display:flex;
    flex-flow:row wrap;
    justify-content:space-evenly;
    align-content:center;
    `

const ReviewBox = styled.div`
    width:22%;
    height:90%;
    border:1px solid black;
    border-radius:10px;
`

const StarContainer = styled.div`
    width:100%;
    height:10%;
    border:1px solid black;
    border-top-left-radius:10px;
    border-top-right-radius:10px;
`

export default function Reviews() {

    return(
        <Container>
            <ReviewBox>
                <StarContainer></StarContainer>
            </ReviewBox>
                
            <ReviewBox>
                <StarContainer></StarContainer>
            </ReviewBox>
                
            <ReviewBox>
                <StarContainer></StarContainer>
            </ReviewBox>
                
            <ReviewBox>
                <StarContainer></StarContainer>
            </ReviewBox>
        </Container>
    )
}