import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="140" cy="125" r="120" />
    <rect x="0" y="273" rx="4" ry="4" width="280" height="30" />
    <rect x="0" y="315" rx="10" ry="10" width="280" height="87" />
    <rect x="125" y="415" rx="30" ry="30" width="153" height="46" />
    <rect x="3" y="425" rx="4" ry="4" width="91" height="27" />
  </ContentLoader>
);

export default Skeleton;
