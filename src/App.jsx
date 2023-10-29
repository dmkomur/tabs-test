import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { TabsBar } from "./components/TabsBar";
import { tabsArray } from "./dataExemple";

function App() {
  const [tabs, setTabs] = useState([]);

  // иммитируем получение данных
  useEffect(() => {
    setTabs(tabsArray);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<TabsBar tabsArr={tabs} />} />
    </Routes>
  );
}

export default App;
