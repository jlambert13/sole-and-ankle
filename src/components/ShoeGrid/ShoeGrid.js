import React from "react";
import styled from "styled-components/macro";

import SHOES from "../../data";
import ShoeCard from "../ShoeCard";

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShowWrapper key={shoe.slug}>
          <ShoeCard {...shoe} />
        </ShowWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 36px;
`;

const ShowWrapper = styled.div`
  min-width: 275px;
  max-width: 340px;
  flex: 1;
`;

export default ShoeGrid;
