// Define the structure for a single tab
interface TabItem {
  id: string; // Unique identifier for each tab
  label: string; // Display label for the tab
}

// Define the props for the TabBar component
interface TabBarProps {
  tabs: TabItem[]; // Array of tabs to display
  activeTab: string; // Currently active tab id
  setActiveTab: (tabId: string) => void; // Function to set the active tab
}

const TabBar: React.FC<TabBarProps> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="w-full  bg-black p-[2.79px]  bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 rounded-md justify-start items-start inline-flex font-['Qanelas Soft']">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`grow cursor-pointer shrink basis-0 p-[6.97px] flex-col justify-start items-start gap-[6.97px] inline-flex ${
            activeTab === tab.id
              ? "bg-gradient-to-l from-white to-indigo-50 shadow shadow-white"
              : ""
          }`}
        >
          <div
            className={`self-stretch text-center ${
              activeTab === tab.id ? "text-gray-950" : "text-neutral-400"
            } text-sm font-bold`}
          >
            {tab.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TabBar;
