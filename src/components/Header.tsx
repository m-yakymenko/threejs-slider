import styled from "styled-components";
import { Button } from "../atoms/Button";
import { Checkbox } from "../atoms/Checkbox";
import { useCatstore } from "../store/store";

export const Header = () => {
  const {
    setShowMeshes,
    showMeshes,
    setCats,
    setShowFeDisplacementMap,
    showFeDisplacementMap,
  } = useCatstore();

  return (
    <Wrapper>
      <Button onClick={() => setShowMeshes(!showMeshes)}>Show meshes</Button>

      <Button onClick={() => setCats([])}>Update cats</Button>

      <Checkbox
        value={showFeDisplacementMap}
        onChange={(event) => setShowFeDisplacementMap(event.target.checked)}
      >
        FeDisplacementMap
      </Checkbox>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  height: 10vh;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
  flex-wrap: wrap;

  @media screen and (max-width: 600px) {
    & {
      gap: 0.5rem;
      padding: 1rem;
    }
  }
`;
