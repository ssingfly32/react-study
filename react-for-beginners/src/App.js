import {useState, useEffect} from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  
  // 리액트가 지켜볼 dependency가 없어서 최초 렌더링 됐을 때만 특정 작업 수행 (component mount)
  useEffect(() => {
    console.log("I run only once.");
  }, []);
  
  // 특정 prop, state가 바뀔 때
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);

  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  
  // dependency는 배열이기 때문에 여러 개 감시 가능. 둘 중 하나라도 업데이트 될 때마다 특정 작업 수행
  useEffect(() => {
    console.log("I run when keyword & counter change");
  }, [keyword, counter]);

  return (
    <div>
       <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
