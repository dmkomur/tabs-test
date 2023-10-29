import { useState, useEffect, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { TabsBar } from "./components/TabsBar";
import { tabsArray } from "./dataExemple";
const DummyChart = lazy(() => import("./components/DummyChart"));
const DummyList = lazy(() => import("./components/DummyList"));
const DummyTable = lazy(() => import("./components/DummyTable"));

function App() {
  const [tabs, setTabs] = useState([]);

  // simulate receiving data
  useEffect(() => {
    setTabs(tabsArray.sort((a, b) => a.order - b.order));
  }, []);

  // routes are written to demonstrate lazy loading. It's better to use one route with |:dynamic parameter

  return (
    <Routes>
      <Route path="/" element={<TabsBar tabsArr={tabs} />}>
        <Route path="tabs/dummyChart" element={<DummyChart tabsArr={tabs} />} />
        <Route path="tabs/dummyList" element={<DummyList tabsArr={tabs} />} />
        <Route path="tabs/dummyTable" element={<DummyTable tabsArr={tabs} />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
