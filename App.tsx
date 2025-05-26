import TestMDX from './src/testmdx.mdx';
import {StatefulComponent} from './src/StatefulComponent';
import {Path, withAsyncComponent} from '@tinkerable/internal/v1';
import { Routes, Route, Link } from "react-router";
import { Button, HStack } from "@chakra-ui/react"
import * as React from 'react'

export const Demo = () => {
  return (
    <HStack>
      <Button>Click me</Button>
      <Button>Click me</Button>
    </HStack>
  )
}

export const getComponents = () => {
  const components = {
    em(properties) {
      return <i style={{fontWeight: "bold", color: "red", ...(properties.style ?? {})}} {...properties} />
    }
  }
  return components;
}

export const App = (): React.JSX.Element => {

  return (
    <Routes>
      <Route index element={<Index />} />
      <Route path="about" element={<div>About Page <Link to="/">Back</Link></div>} />
      <Route path="contact" element={<div>Contact Page</div>} />
      <Route path="p/*" element={<Path />} />
    </Routes>);
}

export function Index(): React.JSX.Element {
  const W = withAsyncComponent(
    // @ts-ignore
    module.dynamicImport('./src/Wrapper')
  );
  return <>
    <Demo />
    <Link to="about">About</Link>
    <W>ASDF</W>
    <h1>Hello woorld</h1>
    <StatefulComponent />

    <TestMDX />
  </>
}
