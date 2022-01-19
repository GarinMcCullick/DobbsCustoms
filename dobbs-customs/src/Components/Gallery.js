import React from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
    font-size:48px;
    margin-bottom:25px;
    letter-spacing:0.4rem;
`

const Container = styled.div`
    width:100%;
    height:900px;
    display:flex;
    flex-flow:column nowrap;
    justify-content:center;
    align-items:center;
    margin-top:75px;
`

const InnerContainer = styled.div`
    width:95%;
    height:95%;
    background-color:lightgrey;
    display:flex;
    flex-flow:row wrap;
    justify-content:space-evenly;
    align-items:start;
    border-radius:25px;
    z-index:1;
    box-shadow: 0 19px 38px rgba(0,0,0,0.10), 0 15px 12px rgba(0,0,0,0.20);
`

const ImgContainers = styled.div`
    width:400px;
    height:350px;
    border:1px solid black;
    background-color:white;
    margin-top:25px;
    z-index:2;
`

export default function Gallery() {

    return(
        <>
        
        <Container>
            <H1>Past Builds</H1>
            <InnerContainer>
                <ImgContainers>
                
                </ImgContainers>

                <ImgContainers>
                
                </ImgContainers>

                <ImgContainers>
                
                </ImgContainers>

                <ImgContainers>
                
                </ImgContainers>

                <ImgContainers>
                
                </ImgContainers>

                <ImgContainers>
                
                </ImgContainers>

                <ImgContainers>
                
                </ImgContainers>

                <ImgContainers>
                
                </ImgContainers>
            </InnerContainer>
        </Container>
        </>
    )
}