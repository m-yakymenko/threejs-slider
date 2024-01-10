import { MovingText } from "./MovingText";

export const TextLayout = ({ showMeshes }: { showMeshes: boolean }) => {
  return (
    <>
      <MovingText
        showMeshes={showMeshes}
        shiftY={-0.5}
        text="I love"
        spliceFrom={0}
      />
      <MovingText
        showMeshes={showMeshes}
        shiftY={0.7}
        text="           Cats"
        spliceFrom={0}
      />
      <MovingText
        showMeshes={showMeshes}
        shiftY={1.75}
        text="___________"
        spliceFrom={0}
        withLight
      />
      <MovingText
        showMeshes={showMeshes}
        shiftY={2}
        text="Front-end"
        spliceFrom={15}
      />
    </>
  );
};
