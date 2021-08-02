import React from 'react';
import styled from "styled-components";
import {useAuth0} from "@auth0/auth0-react";
import { v4 as uuidv4 } from 'uuid';

function InLibrary(props) {
    const {user} = useAuth0();
    const {picture} = user;
    const data = [
        picture,
        picture,
        picture,
        picture,
        picture,
        picture,
        picture,
        picture,
        picture,
        picture,
        picture,
        picture,
        picture,
        picture,
        picture,
      ];
    return (
        <Container>
            <h4>Library</h4>
            <Image>
            <Button>Add A Title</Button>
        {data.map((image) => (
          <img src={image} alt="topTenImage" key={uuidv4()} />
        ))}
      </Image>
        </Container>
    );
}

const Container = styled.div`
border: 1px solid gainsboro;

  text-align: center;
  border-radius: 10px;
  
  img {
    max-width: 6vw;
    max-height: 100%;
    border-radius: 20px;
  }
  h4{
      padding: 5px;
  }
`
const Image = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2px;
  margin-left: 13px;
`;
const Button = styled.button`
    max-width: 6vw;
    max-height: 100%;
    border-radius: 20px;
`
export default InLibrary;