import styled from "styled-components";
import { Button } from "../atoms/Button";
import { useCatstore } from "../store/store";

export const Header = () => {
  const { setShowMeshes, showMeshes, setCats } = useCatstore();

  return (
    <Wrapper>
      <Button onClick={() => setShowMeshes(!showMeshes)}>Show meshes</Button>

      <Button onClick={() => setCats([])}>Update cats</Button>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  height: 10vh;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 20px 10vw;
  gap: 30px;
`;
