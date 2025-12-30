import { useState } from 'react';
import { TabsContext } from './TabsContext';

/* =====================
   PARENT COMPONENT
===================== */
function Tabs({ defaultIndex = 0, children }) {
  const [activeTabIndex, setActiveTabIndex] = useState(defaultIndex);

  return (
    <TabsContext.Provider
      value={{ activeTabIndex, setActiveTabIndex }}
    >
      <div className="tabs">
        {children}
      </div>
    </TabsContext.Provider>
  );
}

/* =====================
   CHILD: Tabs.List
===================== */
Tabs.List = function TabsList({ children }) {
  return <div className="tabs-list">{children}</div>;
};

/* =====================
   CHILD: Tabs.Tab
===================== */
import { useContext } from 'react';

Tabs.Tab = function Tab({ index, children }) {
  const { activeTabIndex, setActiveTabIndex } =
    useContext(TabsContext);

  const isActive = index === activeTabIndex;

  return (
    <button
      className={isActive ? 'tab active' : 'tab'}
      onClick={() => setActiveTabIndex(index)}
    >
      {children}
    </button>
  );
};

Tabs.Panel = function Panel({ index, children }) {
  const { activeTabIndex } =
    useContext(TabsContext);

  if (index !== activeTabIndex) return null;

  return (
    <div className="tab-panel">
      {children}
    </div>
  );
};

export default Tabs;
