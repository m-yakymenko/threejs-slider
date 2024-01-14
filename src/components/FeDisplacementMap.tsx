import sphere_wide_1 from "../assets/sphere_wide_1.png";

export const FeDisplacementMap = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      id="svg-root"
      width="381"
      height="166"
      z-index="-1"
      style={{ position: "absolute" }}
    >
      <title id="test-title">filters-dispMap-BE-16</title>
      <desc id="test-desc">
        Test which verifies the basic facilities of feDisplacementMap.
      </desc>
      <defs>
        <filter
          id="SphereMapTest"
          filterUnits="objectBoundingBox"
          x="-0.45"
          y="-1.15"
          width="1.6"
          height="3.5"
        >
          <feImage id="mapa" result="Map" xlinkHref={sphere_wide_1}></feImage>
          <feDisplacementMap
            id="despMap"
            in="SourceGraphic"
            in2="map"
            scale="200"
            xChannelSelector="R"
            yChannelSelector="G"
          ></feDisplacementMap>
        </filter>
      </defs>
    </svg>
  );
};
