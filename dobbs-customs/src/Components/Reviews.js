import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

const Container = styled.div`
  @media only screen and (min-width: 1200px) {
    width: 100% ;
    height: 475px;
    margin-top: 125px;
    background-color: #b28228;
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    width: calc(100% + 100px)
    height: 475px;
    margin-top: 125px;
    background-color: #b28228;
    overflow-x:hidden;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    width: calc(100% + 100px)
    height: 475px;
    margin-top: 125px;
    background-color: #b28228;
    overflow-x:hidden;
  }
  @media only screen and (min-width: 600px) and (max-width: 767px) {
    width: calc(100% + 100px)
    height: 475px;
    margin-top: 125px;
    background-color: #b28228;
    overflow-x:hidden;
  }
  @media only screen and (max-width: 600px) {
    width: calc(100% + 100px)
    height: 475px;
    margin-top: 125px;
    background-color: #b28228;
    overflow-x:hidden;
    }
    }
  }
`;

const DriftContainer = styled.div`
  @media only screen and (min-width: 1200px) {
    width: auto;
    height: 475px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    background-color: #b28228;
    overflow-y: hidden;

    &:hover {
      animation-play-state: paused;
      cursor: auto;
    }
    transform: translateX(99%);
    animation: drift 20s linear infinite;

    @keyframes drift {
      to {
        transform: translateX(-99%);
      }
    }
  }

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    width: 2000px;
    height: 475px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    background-color: #b28228;
    overflow-y: hidden;

    &:hover {
      animation-play-state: paused;
    }
    transform: translateX(55%);
    animation: drift 20s linear infinite;

    @keyframes drift {
      to {
        transform: translateX(-100%);
      }
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    width: 2000px;
    height: 475px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    background-color: #b28228;
    overflow-y: hidden;

    &:hover {
      animation-play-state: paused;
      cursor: auto;
    }
    transform: translateX(55%);
    animation: drift 20s linear infinite;

    @keyframes drift {
      to {
        transform: translateX(-100%);
      }
    }
  }

  @media only screen and (min-width: 600px) and (max-width: 767px) {
    width: 2000px;
    height: 475px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    background-color: #b28228;
    overflow-y: hidden;

    &:hover {
      animation-play-state: paused;
      cursor: auto;
    }
    transform: translateX(55%);
    animation: drift 20s linear infinite;

    @keyframes drift {
      to {
        transform: translateX(-100%);
      }
    }
  }

  @media only screen and (max-width: 600px) {
    width: 2000px;
    height: 475px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    background-color: #b28228;
    overflow-y: hidden;

    &:hover {
      animation-play-state: paused;
      cursor: auto;
    }
    transform: translateX(20%);
    animation: drift 20s linear infinite;

    @keyframes drift {
      to {
        transform: translateX(-100%);
      }
    }
  }
`;

const ReviewBox = styled.div`
  @media only screen and (min-width: 1200px) {
    width: 400px;
    height: 90%;
    border-radius: 10px;
    background-color: #3b3b3b;
    margin-left:1rem;
    padding: 1rem;
    white-space: normal;
  }
  @media only screen and (min-width: 992px) and (max-width:1199px) {
    width: 400px;
    height: 90%;
    border-radius: 10px;
    background-color: #3b3b3b;
    padding: 1rem;
    margin-left:1rem;
    white-space: normal;
  }
  @media only screen and (min-width: 768px) and (max-width:991px) {
    width: 400px;
    height: 90%;
    border-radius: 10px;
    background-color: #3b3b3b;
    padding: 1rem;
    margin-left:1rem;
    white-space: normal;
  }
  @media only screen and (min-width: 600px) and (max-width:768px) {
    width: 350px;
    height: 85%;
    border-radius: 10px;
    background-color: #3b3b3b;
    padding: 1rem;
    margin-left:1rem;
    white-space: normal;
  }
  @media only screen and (max-width: 600px) {
    width: 350px;
    height: 85%;
    border-radius: 10px;
    background-color: #3b3b3b;
    padding: 1rem;
    margin-left:1rem;
    white-space: normal;
  }
  
  }
`;

const StarContainer = styled.div`
  @media only screen and (min-width: 1200px) {
    width: 100%;
    height: 10%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  @media only screen and (min-width: 992px) {
    width: 100%;
    height: 10%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  @media only screen and (min-width: 768px) {
    width: 100%;
    height: 10%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  @media only screen and (min-width: 600px) {
    width: 100%;
    height: 10%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 10%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;

const Testimony = styled.div`
  @media only screen and (min-width: 1200px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: top;
    align-items: center;
  }
  @media only screen and (min-width: 992px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: top;
    align-items: center;
  }
  @media only screen and (min-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: top;
    align-items: center;
  }
  @media only screen and (min-width: 600px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: top;
    align-items: center;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: top;
    align-items: center;
  }
`;

const Img = styled.img`
  @media only screen and (min-width: 1200px) {
    width: 75px;
    height: 75px;
    border-radius: 50px;
  }
  @media only screen and (min-width: 992px) {
    width: 75px;
    height: 75px;
    border-radius: 50px;
  }
  @media only screen and (min-width: 768px) {
    width: 75px;
    height: 75px;
    border-radius: 50px;
  }
  @media only screen and (min-width: 600px) {
    width: 75px;
    height: 75px;
    border-radius: 50px;
  }
  @media only screen and (max-width: 600px) {
    width: 75px;
    height: 75px;
    border-radius: 50px;
  }
`;

const H3 = styled.h3`
  @media only screen and (min-width: 1200px) {
    color: white;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    font-size: 24px;
  }
  @media only screen and (min-width: 992px) {
    color: white;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    font-size: 24px;
  }
  @media only screen and (min-width: 768px) {
    color: white;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    font-size: 24px;
  }
  @media only screen and (min-width: 600px) {
    color: white;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    font-size: 24px;
  }
  @media only screen and (max-width: 600px) {
    color: white;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    font-size: 24px;
  }
`;

const P = styled.p`
  @media only screen and (min-width: 1200px) {
    color: white;
    font-size: 20px;
    line-height: 2rem;
  }
  @media only screen and (min-width: 992px) {
    color: white;
    font-size: 20px;
    line-height: 2rem;
  }
  @media only screen and (min-width: 768px) {
    color: white;
    font-size: 20px;
    line-height: 2rem;
  }
  @media only screen and (min-width: 600px) {
    color: white;
    font-size: 16px;
    line-height: 2rem;
  }
  @media only screen and (max-width: 600px) {
    color: white;
    font-size: 14px;
    line-height: 2rem;
  }
`;

export default function Reviews() {
  return (
    <Container>
      <DriftContainer>
        <ReviewBox>
          <StarContainer>
            <AiFillStar
              size="25px"
              color="gold"
              style={{ margin: "0.25rem" }}
            />
            <AiFillStar
              size="25px"
              color="gold"
              style={{ margin: "0.25rem" }}
            />
            <AiFillStar
              size="25px"
              color="gold"
              style={{ margin: "0.25rem" }}
            />
            <AiFillStar
              size="25px"
              color="gold"
              style={{ margin: "0.25rem" }}
            />
            <AiFillStar
              size="25px"
              color="gold"
              style={{ margin: "0.25rem" }}
            />
          </StarContainer>
          <Testimony>
            <Img src="/pictures/review1.jpg"></Img>
            <H3>Landon Wilson</H3>
            <P>
              "Great customer service. Fast turnaround on my order and the
              quality is great! Highly recommend getting one of these pistons.
              They make a great desk piece for sure"
            </P>
          </Testimony>
        </ReviewBox>

        <ReviewBox>
          <StarContainer>
            <AiFillStar
              size="25px"
              color="gold"
              style={{ margin: "0.25rem" }}
            />
            <AiFillStar
              size="25px"
              color="gold"
              style={{ margin: "0.25rem" }}
            />
            <AiFillStar
              size="25px"
              color="gold"
              style={{ margin: "0.25rem" }}
            />
            <AiFillStar
              size="25px"
              color="gold"
              style={{ margin: "0.25rem" }}
            />
            <AiFillStar
              size="25px"
              color="gold"
              style={{ margin: "0.25rem" }}
            />
          </StarContainer>
          <Testimony>
            <Img src="/pictures/review2.jpg"></Img>
            <H3>Luke Bergey</H3>
            <P>
              "Love the work done! Ordered a set of the pistons with a spent
              shell cigar and love them. Not only are they great products with
              incredible attention to detail but also extraordinary customer
              service! Got my order to me in less than a week even knowing I did
              not need them for two. Prioritized, underpromised, and
              overdelivered. Very satisfied!"
            </P>
          </Testimony>
        </ReviewBox>

        <ReviewBox>
          <StarContainer>
            <AiFillStar
              size="25px"
              color="gold"
              style={{ margin: "0.25rem" }}
            />
            <AiFillStar
              size="25px"
              color="gold"
              style={{ margin: "0.25rem" }}
            />
            <AiFillStar
              size="25px"
              color="gold"
              style={{ margin: "0.25rem" }}
            />
            <AiFillStar
              size="25px"
              color="gold"
              style={{ margin: "0.25rem" }}
            />
            <AiFillStar
              size="25px"
              color="gold"
              style={{ margin: "0.25rem" }}
            />
          </StarContainer>
          <Testimony>
            <Img src="/pictures/review3.jpg"></Img>
            <H3>Paul Hinkley</H3>
            <P>
              "Great gift idea for any gearhead!! EXCELLENT communication,
              EXCELLENT customer service. 10/10 Business conducted 100% as it
              should I WILL be doing business again"
            </P>
          </Testimony>
        </ReviewBox>

        <ReviewBox>
          <StarContainer>
            <AiFillStar
              size="25px"
              color="gold"
              style={{ margin: "0.25rem" }}
            />
            <AiFillStar
              size="25px"
              color="gold"
              style={{ margin: "0.25rem" }}
            />
            <AiFillStar
              size="25px"
              color="gold"
              style={{ margin: "0.25rem" }}
            />
            <AiFillStar
              size="25px"
              color="gold"
              style={{ margin: "0.25rem" }}
            />
            <AiFillStar
              size="25px"
              color="gold"
              style={{ margin: "0.25rem" }}
            />
          </StarContainer>
          <Testimony>
            <Img src="/pictures/review4.jpg"></Img>
            <H3>Jonathan Blair</H3>
            <P>
              "10/10 would highly recommend, great products and amazing customer
              service"
            </P>
          </Testimony>
        </ReviewBox>
      </DriftContainer>
    </Container>
  );
}
