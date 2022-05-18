import React from 'react';
import styled from 'styled-components'

const Component1 = styled.div`
font-family: galanogrotesque-m;
`;

const Component2 = styled.div`
font-family: galanogrotesque-r;
`;

const Component3 = styled.div`
font-family: galanogrotesque-s;
`;

function App() {
  return (
    <>
      <Component1>
        Hello
      </Component1>
      <Component2>
        Hello
      </Component2>
      <Component3>
        Hello
      </Component3>
    </>

  );
}

export default App;
