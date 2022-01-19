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
    border:1px solid grey;
    background-color:white;
    z-index:10;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.10);
`

const ImageContainer2 = styled.div`
    width:30%;
    height:90%;
    border:1px solid grey;
    position:relative;
    left:80px;
    z-index:1;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.10);
    
`

const ImageContainer3 = styled.div`
    width:30%;
    height:90%;
    border:1px solid grey;
    position:relative;
    right:80px;
    z-index:1;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.10);
`

const Img = styled.img`
    object-fit:cover;
    width:100%;
    height:100%;
`

export default function Carousel() {
    const image1 = "https://scontent-ort2-1.xx.fbcdn.net/v/t39.30808-6/s600x600/270215736_113927897823247_3239680051854262127_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=RMaUba6ZwS0AX9iwg6E&_nc_ht=scontent-ort2-1.xx&oh=00_AT8ILuJBaMDajHN4t-9msoq9DL7rOTWkKMUTKevGHu6lqQ&oe=61EC685A";

    const image2 = "https://scontent-ort2-1.xx.fbcdn.net/v/t39.30808-6/p526x296/271959482_120740210475349_5692309467597691298_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=mxClCOpp5qoAX9SkUrx&_nc_oc=AQmAQbKGxu2-Cl6KlCL0V7v65v-nR9uLARN_poxdCaDdxi5QqAdIl4bKZSJ8faDN15E&_nc_ht=scontent-ort2-1.xx&oh=00_AT9JQ3s2vAYrYMIEN0rO1Lcg-q2u3YSbYP-4uM81xzhcBg&oe=61ED3988";

    const image3 = "https://scontent-ort2-1.xx.fbcdn.net/v/t39.30808-6/p526x296/271448785_115319444350759_6226430681253819610_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=AolUNRdjwFwAX__GIwl&_nc_ht=scontent-ort2-1.xx&oh=00_AT-2uJN1JLjKKR-xqCXp9BKitVvz3S5uzov6n769Mo1_8w&oe=61ECED67";

    return(
        <Container>
            <InnerContainer>
                <ImageContainer2>
                    <Img src={image1} alt="build pic (unavailable)"></Img>
                </ImageContainer2>

                <ImageContainer>
                    <Img src={image2} alt="build pic (unavailable)"></Img>
                </ImageContainer>
                
                <ImageContainer3>
                    <Img src={image3} alt="build pic (unavailable)"></Img>
                </ImageContainer3>
            </InnerContainer>
        </Container>
    )
}