import { SortMemo } from "./sortMemo";
import { Sort } from "./sort";
import { useState } from "react";

const defaultScale = 65536

function App() {
  const [activeExperiment, setActiveExperiment] = useState();
  const [scale, setScale] = useState(defaultScale);
  const [state, setState] = useState(0);

  const switchActiveExperiment = (key) => {
    if (activeExperiment === key) {
      setState(state + 1);
    } else {
      setActiveExperiment(key);
    }
  }

  const reset = () => {
    setScale(defaultScale);
    setActiveExperiment(undefined);
  }

  const experiments = {
    'sort with memo': <SortMemo state={state} scale={scale} />,
    'sort without memo': <Sort state={state} scale={scale} />,
  }

  return (
    <>
      <div><button onClick={reset}>Reset</button></div>
      <button onClick={() => setScale(scale * 2)}>scale++</button>
      scale: <input type="number" value={scale} onChange={(e) => setScale(parseInt(e.target.value))} />
      <button onClick={() => setScale(scale / 2)}>scale--</button>
      {Object.keys(experiments).map((key) => (
        <div>
          <button key={key} onClick={() => switchActiveExperiment(key)}>{key}</button>
        </div>
      ))}
      {experiments[activeExperiment]}
    </>
  );
}

export default App;
