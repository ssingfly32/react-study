import {useState, useEffect} from "react";

function Hello() {
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);
  return <h1>Hello!</h1>;
}

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const handleTextVisible = () => setIsVisible(current => !current);
  return (
    <div>
      {isVisible ? <Hello /> : null}
      <button onClick={handleTextVisible}>{isVisible ? "hide" : "show"}</button>
    </div>
  );
}

export default App;