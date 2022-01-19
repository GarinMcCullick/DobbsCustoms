import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    max-width:100%;
    max-height:600px;
    width:100%;
    height:600px;
    display:flex;
    flex-flow:row wrap;
    justify-content: center;
    align-content:center;
`

const InnerContainer = styled.div`
    width:95%;
    height:90%;
    display: flex;
    flex-flow:row nowrap;
    justify-content:center;
    align-items:center;
    position:relative;
`

const ImageContainer = styled.div`
    width:30%;
    height:100%;
    border:1px solid black;
    background-color:white;
    z-index:10;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.10);
`

const ImageContainer2 = styled.div`
    width:30%;
    height:90%;
    border:1px solid black;
    position:relative;
    left:80px;
    z-index:1;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.10);
`

const ImageContainer3 = styled.div`
    width:30%;
    height:90%;
    border:1px solid black;
    position:relative;
    right:80px;
    z-index:1;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.10);
`

export default function Carousel() {

    return(
        <Container>
            <InnerContainer>
                <ImageContainer2>

                </ImageContainer2>

                <ImageContainer>

                </ImageContainer>
                
                <ImageContainer3>

                </ImageContainer3>
            </InnerContainer>
        </Container>
    )
}