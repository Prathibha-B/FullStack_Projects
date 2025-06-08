
function App(props) {
    const currDate = new Date();
  return (
    <div>
    <h1>Prathibha Boyapalli</h1>
    <h2>The time now is {currDate.toLocaleTimeString()} And the date is {currDate.toLocaleDateString()}.</h2>
    </div>
  );
}

export default App;
