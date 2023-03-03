import { StrictMode } from "react";
import OctalogicAppProvider from "./components/OctalogicAppProvider";

export default function Root(props) {
  return (
    <StrictMode>
      <OctalogicAppProvider>
        <section>{props.name} is mounted!</section>
      </OctalogicAppProvider>
    </StrictMode>
  );
}
