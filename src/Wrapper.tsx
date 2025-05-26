import * as React from "react";

export default function Wrapper({children}): React.JSX.Element {
  return <div style={{border: "1px solid red"}}>{children}</div>;
}
