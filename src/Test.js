import styled from "styled-components";
import React, { useState, useRef } from "react";

const Test = (props) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  const decCount = () => {
    setCount(count - 1);
    countRef.current.value = count;
  };
  const incCount = () => {
    setCount(count + 1);
  };

  return (
    <Container>
      <p ref={countRef}></p>
      <Btn onClick={decCount}>Decrement</Btn>
      <Btn onClick={incCount}>Increment</Btn>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
`;

const Btn = styled.button``;

export default Test;
