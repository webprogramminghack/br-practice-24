import ConditionalRendering from "./components/ConditionalRendering/ConditionalRendering";
import AsyncSetState from "./components/AsyncSetState/AsyncSetState";
import BatchedStateUpdates from "./components/Batching/BatchedStateUpdates";
import ReactFragments from "./components/ReactFragments/ReactFragments";
import UseRefComponent from "./components/UseRef/UseRef";

function App() {
  return (
    <>
      <ConditionalRendering />
      <hr />
      <AsyncSetState />
      <hr />
      <BatchedStateUpdates />
      <hr />
      <ReactFragments />
      <hr />
      <UseRefComponent />
    </>
  );
}

export default App;
