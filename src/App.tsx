import ConditionalRendering from "./components/ConditionalRendering/ConditionalRendering";
import AsyncSetState from "./components/AsyncSetState/AsyncSetState";
import BatchedStateUpdates from "./components/Batching/BatchedStateUpdates";
import ReactFragments from "./components/ReactFragments/ReactFragments";
import UseRefComponent from "./components/UseRef/UseRef";
import UseMemoExample from "./components/UseMemo/UseMemo";
import { WithoutUseMemo, WithUseMemo } from "./components/UseMemo/UserProfile";
import {
  WithoutUseCallback,
  WithUseCallback,
} from "./components/UseCallback/UseCallbackExample";
import ParentComponent from "./components/UseCallback/IncrementCounter";

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
      <hr />
      <UseMemoExample />
      <hr />
      <WithoutUseMemo />
      <hr />
      <WithUseMemo />
      <hr />
      <WithoutUseCallback count={0} />
      <hr />
      <WithUseCallback count={1} />
      <hr />
      <ParentComponent />
    </>
  );
}

export default App;
