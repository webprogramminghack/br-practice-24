import React, {
  type ChangeEvent,
  useEffect,
  useState,
  useCallback,
} from "react";

type ChildProps = {
  fetchData: () => void;
};

const ChildComponent: React.FC<ChildProps> = ({ fetchData }) => {
  useEffect(() => {
    console.log("fetchData function changed, executing useEffect.");
    fetchData();
  }, [fetchData]);
  return <div>Child Component</div>;
};

type Props = {
  count?: number;
};

export const WithoutUseCallback: React.FC<Props> = ({ count = 0 }) => {
  const [text, setText] = useState("");

  const fetchData = () => {
    console.log("Fetching data without useCallback(), count is :", count);
  };

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <div>
      <input type="text" value={text} onChange={onChangeText} />
      <ChildComponent fetchData={fetchData} />
    </div>
  );
};

export const WithUseCallback: React.FC<Props> = ({ count = 0 }) => {
  const [text, setText] = useState("");

  const fetchData = useCallback(() => {
    console.log("Fetching data with useCallback(), count is :", count);
  }, [count]);

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChangeText} />
      <ChildComponent fetchData={fetchData} />
    </div>
  );
};
