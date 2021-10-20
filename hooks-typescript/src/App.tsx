import React , { useState } from 'react';
import './App.css';
import Counter from './Counter';
import CounterReducer from './CounterReducer';
import CounterTitle from './CounterTitle';
import GitHubLogo from "./GitHubLogo";
import Title from "./Title";

const EXAMPLES = {
  Counter,
  CounterTitle,
  CounterReducer
};

type Examples = keyof typeof EXAMPLES;

const EXAMPLE_NAMES = Object.keys(EXAMPLES) as Examples[];

const App = () => {
  const [example, setExample] = useState<Examples>("Counter");

  const ExampleComponent = EXAMPLES[example];

  const exampleButtons = EXAMPLE_NAMES.map( name => (
    <button
      key={name}
      onClick={() => setExample(name)}
      className={name === example ? "active" : ""}
    >
      &lt;
      {name} /&gt;
    </button>
  ));

  return (
    <>
      <Title />
      <GitHubLogo />
      <div className="container">
        <div className="app">
          {exampleButtons}
          <div className="separator" />
          <ExampleComponent />
        </div>
      </div>
    </>
  )
}

export default App;