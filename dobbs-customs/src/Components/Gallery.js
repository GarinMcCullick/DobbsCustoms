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
    border:1px solid black;
    display:flex;
    flex-flow:row wrap;
    justify-content:space-evenly;
    align-items:start;
`

const ImgContainers = styled.div`
    width:400px;
    height:350px;
    border:1px solid black;
    margin-top:25px;
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