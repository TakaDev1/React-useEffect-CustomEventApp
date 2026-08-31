import HandleCustomEvent from "./components/HandleCustomEvent";

function App() {
  const handleCustomEvent = (event: Event) => {
    console.log("custom-eventを受信しました");
  };

  const dispatchCustomEvent = () => {
    window.dispatchEvent(new Event("custom-event"));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <HandleCustomEvent handler={handleCustomEvent} />

      <button onClick={dispatchCustomEvent} className="border px-4 py-2 rounded">
        イベント発火
      </button>
    </div>
  );
}

export default App;
