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
    border:1px solid grey;
    background-color:white;
    margin-top:25px;
    z-index:2;
`

const Img = styled.img`
    object-fit:cover;
    width:100%;
    height:100%;
`

export default function Gallery() {

    const image1 = "https://scontent-ort2-1.xx.fbcdn.net/v/t39.30808-6/s600x600/270215736_113927897823247_3239680051854262127_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=RMaUba6ZwS0AX9iwg6E&_nc_ht=scontent-ort2-1.xx&oh=00_AT8ILuJBaMDajHN4t-9msoq9DL7rOTWkKMUTKevGHu6lqQ&oe=61EC685A"

    return(
        <>
        
        <Container>
            <H1>Past Builds</H1>
            <InnerContainer>
                <ImgContainers>
                    <Img src={image1} alt="build pic (unavailable)"></Img>
                </ImgContainers>

                <ImgContainers>
                <Img src={image1} alt="build pic (unavailable)"></Img>
                </ImgContainers>

                <ImgContainers>
                <Img src={image1} alt="build pic (unavailable)"></Img>
                </ImgContainers>

                <ImgContainers>
                <Img src={image1} alt="build pic (unavailable)"></Img>
                </ImgContainers>

                <ImgContainers>
                <Img src={image1} alt="build pic (unavailable)"></Img>
                </ImgContainers>

                <ImgContainers>
                <Img src={image1} alt="build pic (unavailable)"></Img>
                </ImgContainers>

                <ImgContainers>
                <Img src={image1} alt="build pic (unavailable)"></Img>
                </ImgContainers>

                <ImgContainers>
                <Img src={image1} alt="build pic (unavailable)"></Img>
                </ImgContainers>
            </InnerContainer>
        </Container>
        </>
    )
}