import {useState, useCallback, useEffect} from "react";

export const StatefulComponent = () => {
  const [state, setState] = useState(0);
  const inc = useCallback(() => {
    setState(i => i + 1)
  }, [setState]);
  const dec = useCallback(() => {
    setState(i => i - 1)
  }, [setState]);
    useEffect(() => {
        console.log("constructor called");
        return () => console.log("destructor called");
      }, []);
  return (<>
    <input type="text" /><br />
    {state} counter <br />
    <button onClick={inc} >+</button>
    <button onClick={dec} >-</button>
  </>)

}
