import React, { useState } from "react";
import Reviews from "./Reviews";

interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ label, isActive, onClick }) => (
  <div
    className={`cursor-pointer  py-2 px-4 ${isActive ? "bg-green-300" : ""}`}
    onClick={onClick}
  >
    {label}
  </div>
);

interface TabPanelProps {
  isActive: boolean;
  children: React.ReactNode;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, isActive }) => (
  <div className={`py-4 ${isActive ? "block" : "hidden"}`}>{children}</div>
);

const TabComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("description");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="py-12 0">
      <div className="flex border-b border-gray-300">
        <Tab
          label="Description"
          isActive={activeTab === "description"}
          onClick={() => handleTabClick("description")}
        />
        <Tab
          label="Reviews"
          isActive={activeTab === "reviews"}
          onClick={() => handleTabClick("reviews")}
        />
      </div>
      <TabPanel isActive={activeTab === "description"}>
        <div className="mb-4">
          <h2 className="mb-2 text-lg font-semibold">Introduction</h2>
          <p className="mb-4 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries but also the on leap into electronic
            typesetting, remaining essentially unchanged. It wasn’t popularised
            in the 1960s with the release of Letraset sheets containing Lorem
            Ipsum passages, andei more recently with desktop publishing software
            like Aldus PageMaker including versions of Lorem Ipsum to make a
            type specimen book.
          </p>
          <h2 className="mb-2 text-lg font-semibold">Features :</h2>
          <ul className="pl-6 list-disc">
            <li className="mb-2">Organic fruits directly from the farm</li>
            <li className="mb-2">Freshly harvested and pesticide-free</li>
            <li className="mb-2">Various seasonal fruits available</li>
            <li className="mb-2">Perfect for a healthy lifestyle</li>
          </ul>
        </div>
      </TabPanel>
      <TabPanel isActive={activeTab === "reviews"}>
        <Reviews />
      </TabPanel>
    </div>
  );
};

export default TabComponent;
