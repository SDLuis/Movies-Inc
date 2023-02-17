import { useState } from "react"

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen w-full flex flex-col items-center bg-[#121212] text-[#f2f2f2]">
      <div className="w-[1000px] flex flex-col items-center py-10">
      <p className="text-2xl font-sans font-medium">Movies Inc</p>
      </div>
    </div>
  );
}

export default App;
