import FirstComponent from "./components/FirstComponent";

function App() {
  return (
    <div className="App bg-slate-700 h-[100vh] flex justify-center flex-col gap-3 items-center text-blue-300">
  
  <h2 className="text-[30px] font-bold">React Project </h2>
    <FirstComponent/>
    </div>
  );
}

export default App;
