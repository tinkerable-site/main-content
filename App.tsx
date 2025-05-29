import TestMDX from "./src/testmdx.mdx";
import { StatefulComponent } from "./src/StatefulComponent";
import { SandboxRouter, withAsyncComponent, Path } from "@tinkerable/internal/v1";
import { Routes, Route, Link } from "react-router";
import { Button, HStack } from "@chakra-ui/react";
import * as React from "react";

export const Demo = () => {
  return (
    <HStack>
      <Button>Click me</Button>
      <Button>Click me</Button>
    </HStack>
  );
};

export const App = (): React.JSX.Element => {
  //return <>AADFAFAF</>

  return (
    <SandboxRouter>
      <Routes>
        <Route index element={<Index />} />
        {/* Treat index.tsx as a special case to avoid circular imports */}
        <Route path="/index.tsx" element={<Index />} />
        <Route path="*" element={<Path />} />
      </Routes>
    </SandboxRouter>
  );

};

export function Index(): React.JSX.Element {
  const W = withAsyncComponent(
    // @ts-ignore
    module.dynamicImport("./src/Wrapper")
  );
  return (
    <>
      <Demo />
      <Link to="/src/pages/toc.mdx">TOC</Link>
      <W>ASDF</W>
      <h1>Hello woorld</h1>
      <StatefulComponent />

      <TestMDX />
    </>
  );
}
