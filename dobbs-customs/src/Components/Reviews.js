import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

const Container = styled.div`
  width: 100%;
  height: 450px;
  margin-top: 125px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-content: center;
  background-color: #b28228;
`;

const ReviewBox = styled.div`
  width: 22%;
  height: 90%;
  border-radius: 10px;
  background-color: #3b3b3b;

  padding: 1rem;
`;

const StarContainer = styled.div`
  width: 100%;
  height: 10%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const Testimony = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: top;
  align-items: center;
`;

const Img = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 50px;
`;

const H3 = styled.h3`
  color: white;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  font-size: 24px;
`;

const P = styled.p`
  color: white;
  font-size: 20px;
  line-height: 2rem;
`;

export default function Reviews() {
  return (
    <Container>
      <ReviewBox>
        <StarContainer>
          <AiFillStar size="25px" color="gold" style={{ margin: "0.25rem" }} />
          <AiFillStar size="25px" color="gold" style={{ margin: "0.25rem" }} />
          <AiFillStar size="25px" color="gold" style={{ margin: "0.25rem" }} />
          <AiFillStar size="25px" color="gold" style={{ margin: "0.25rem" }} />
          <AiFillStar size="25px" color="gold" style={{ margin: "0.25rem" }} />
        </StarContainer>
        <Testimony>
          <Img src="/pictures/review1.jpg"></Img>
          <H3>Landon Wilson</H3>
          <P>
            "Great customer service. Fast turnaround on my order and the quality
            is great! Highly recommend getting one of these pistons. They make a
            great desk piece for sure"
          </P>
        </Testimony>
      </ReviewBox>

      <ReviewBox>
        <StarContainer>
          <AiFillStar size="25px" color="gold" style={{ margin: "0.25rem" }} />
          <AiFillStar size="25px" color="gold" style={{ margin: "0.25rem" }} />
          <AiFillStar size="25px" color="gold" style={{ margin: "0.25rem" }} />
          <AiFillStar size="25px" color="gold" style={{ margin: "0.25rem" }} />
          <AiFillStar size="25px" color="gold" style={{ margin: "0.25rem" }} />
        </StarContainer>
        <Testimony>
          <Img src="/pictures/review2.jpg"></Img>
          <H3>Luke Bergey</H3>
          <P>
            "Love the work done! Ordered a set of the pistons with a spent shell
            cigar and love them. Not only are they great products with
            incredible attention to detail but also extraordinary customer
            service! Got my order to me in less than a week even knowing I did
            not need them for two. Prioritized, underpromised, and
            overdelivered. Very satisfied!"
          </P>
        </Testimony>
      </ReviewBox>

      <ReviewBox>
        <StarContainer>
          <AiFillStar size="25px" color="gold" style={{ margin: "0.25rem" }} />
          <AiFillStar size="25px" color="gold" style={{ margin: "0.25rem" }} />
          <AiFillStar size="25px" color="gold" style={{ margin: "0.25rem" }} />
          <AiFillStar size="25px" color="gold" style={{ margin: "0.25rem" }} />
          <AiFillStar size="25px" color="gold" style={{ margin: "0.25rem" }} />
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
          <AiFillStar size="25px" color="gold" style={{ margin: "0.25rem" }} />
          <AiFillStar size="25px" color="gold" style={{ margin: "0.25rem" }} />
          <AiFillStar size="25px" color="gold" style={{ margin: "0.25rem" }} />
          <AiFillStar size="25px" color="gold" style={{ margin: "0.25rem" }} />
          <AiFillStar size="25px" color="gold" style={{ margin: "0.25rem" }} />
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
    </Container>
  );
}
