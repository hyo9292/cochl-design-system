// CochlDesignSystem.jsx
// Main component file for Cochl Design System
// Save this file to: src/components/CochlDesignSystem.jsx

import { useState } from 'react';
import { Search, Home, Layers, Palette, Plus, ChevronUp, ChevronRight, Bell, ExternalLink, ArrowRight } from 'lucide-react';

const navigationData = [
  { category: "Disclosure", items: ["Navigation", "Tabs"], expanded: true },
  { category: "Feedback", items: ["Alert", "Progress", "Skeleton"], expanded: false },
  { category: "Overlay", items: ["Menu", "Tooltip", "Modal"], expanded: false },
  { category: "Data Display", items: ["Card", "Chip", "Table", "Calendar"], expanded: false },
  { category: "Form", items: ["Checkbox", "Button", "Input Field", "Number Input", "Dropdown", "Popover", "Radio"], expanded: false },
  { category: "Analytics", items: ["Heatmap", "Timeseries", "PieChart", "Barchart"], expanded: false },
];

const componentCards = {
  Disclosure: [
    { name: "Tabs", desc: "Component for categorizing items in Cochl web products", preview: "tabs" },
    { name: "Navigation bar", desc: "Menu types for navigation in Cochl web products", preview: "nav" },
  ],
  Feedback: [
    { name: "Alert", desc: "Alert modals for Cochl web products", preview: "alert" },
    { name: "Progress", desc: "Loading styles for Cochl web products", preview: "progress" },
    { name: "Skeleton", desc: "Preview of components before they finish loading", preview: "skeleton" },
  ],
  Overlay: [
    { name: "Menu", desc: "Menu modals for Cochl web products", preview: "menu" },
    { name: "Tooltip", desc: "Component to help explain items briefly", preview: "tooltip" },
    { name: "Modal", desc: "Modal for deletion, creation, and other processes", preview: "modal" },
  ],
  "Data Display": [
    { name: "Card", desc: "Wrapper component for sections in a Cochl web product", preview: "card" },
    { name: "Chip", desc: "Design component used in selection of items", preview: "chip" },
    { name: "Table", desc: "Table made up of table header and table bodies", preview: "table" },
    { name: "Date picker", desc: "Date pickers can display past, present, or future dates", preview: "datepicker" },
  ],
  Form: [
    { name: "Checkbox", desc: "Component for selecting options", preview: "checkbox" },
    { name: "Button", desc: "Button styles across Cochl web products", preview: "button" },
    { name: "Input Field", desc: "Component for text input", preview: "input" },
    { name: "Drop down", desc: "Selection component for different types of data", preview: "dropdown" },
    { name: "Popover", desc: "Components like tooltips and dropdown menus", preview: "popover" },
    { name: "Radio", desc: "Component for selecting one item", preview: "radio" },
  ],
  Analytics: [
    { name: "Heatmap", desc: "Visual data representation", preview: "heatmap" },
    { name: "Timeseries", desc: "Time-based data visualization", preview: "timeseries" },
    { name: "PieChart", desc: "Proportional data display", preview: "piechart" },
  ],
};

const PreviewContent = ({ type }) => {
  const previews = {
    tabs: (
      <div className="flex flex-col items-center justify-center h-full px-2 py-3 bg-indigo-50">
        <div className="w-full">
          <div className="flex justify-center gap-8 mb-4">
            {["Upload", "Overview", "Analytics"].map((t, i) => (
              <div key={t} className={`text-sm pb-2 ${i === 2 ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}>{t}</div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-xs text-gray-400 mr-2">Tags</span>
            {["Alarm", "Emergency", "Bark"].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-xs">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    ),
    nav: (
      <div className="flex items-center justify-center h-full px-2 py-3 bg-indigo-50">
        <div className="w-full">
          <div className="flex items-center justify-center gap-5 pb-2">
            {["Projects", "Usage", "Billing", "Organization"].map((t) => (
              <span key={t} className="text-xs text-gray-600">{t}</span>
            ))}
            <div className="flex items-center gap-2">
              <Bell className="w-4 h-4 text-gray-700" />
              <div className="w-5 h-5 bg-gray-900 rounded-full"></div>
            </div>
          </div>
          <div className="w-full h-px bg-gray-200"></div>
        </div>
      </div>
    ),
    alert: (
      <div className="flex flex-col gap-2 items-center justify-center h-full p-4 bg-indigo-50">
        <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded px-3 py-1.5 text-xs text-blue-700 w-48">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          Project key has been reset
          <span className="ml-auto">×</span>
        </div>
        <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded px-3 py-1.5 text-xs text-red-700 w-48">
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          Error occurred
          <span className="ml-auto">×</span>
        </div>
      </div>
    ),
    progress: (
      <div className="flex flex-col items-center justify-center h-full p-4 gap-4 bg-indigo-50">
        <div className="w-48 h-3 bg-gray-100 rounded-sm overflow-hidden flex">
          <div className="w-1/4 bg-indigo-700"></div>
          <div className="w-1/6 bg-indigo-500"></div>
          <div className="w-1/6 bg-indigo-300"></div>
        </div>
        <div className="w-48 h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div className="w-full h-full bg-indigo-600 rounded-full"></div>
        </div>
        <div className="w-10 h-10 border-3 border-gray-200 border-t-indigo-600 rounded-full animate-spin" style={{ borderWidth: '3px' }}></div>
      </div>
    ),
    skeleton: (
      <div className="flex items-start justify-center h-full p-4 bg-indigo-50">
        <div className="w-full bg-gray-50 border border-gray-200 rounded p-3">
          <div className="w-4 h-4 bg-gray-200 rounded-full mb-3 animate-pulse"></div>
          <div className="w-full h-10 bg-gray-200 rounded mb-3 animate-pulse"></div>
          <div className="space-y-2">
            <div className="w-full h-1.5 bg-gray-200 rounded animate-pulse"></div>
            <div className="w-3/4 h-1.5 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    ),
    menu: (
      <div className="flex items-start justify-center h-full p-3 bg-indigo-50">
        <div className="bg-white rounded-lg shadow-lg p-4 w-56">
          <div className="flex items-center justify-between mb-4">
            <span className="font-medium text-gray-800 text-sm">Notifications</span>
            <span className="text-indigo-500 text-xs">Mark all as read</span>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
            <div className="flex-1">
              <div className="text-sm text-gray-700">You have an invitation</div>
              <div className="text-xs text-gray-400">5 hours ago</div>
            </div>
            <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    ),
    tooltip: (
      <div className="flex items-start justify-center h-full p-3 bg-indigo-50">
        <div className="w-full">
          <div className="text-sm font-medium text-gray-800 mb-2">Tag Frequency</div>
          <div className="grid grid-cols-10 gap-px">
            {[0,1,2,1,3,2,4,3,1,2,1,2,3,2,1,4,2,3,1,0].map((level, i) => {
              const colors = ['bg-indigo-50', 'bg-indigo-100', 'bg-indigo-200', 'bg-indigo-300', 'bg-indigo-400'];
              return <div key={i} className={`w-3 h-3 ${colors[level]}`}></div>;
            })}
          </div>
        </div>
      </div>
    ),
    modal: (
      <div className="flex items-center justify-center h-full p-4 bg-indigo-50">
        <div className="bg-white rounded-lg shadow-lg p-5 w-52 relative">
          <button className="absolute top-3 right-3 text-gray-400 text-lg">×</button>
          <div className="text-sm font-medium text-gray-800 mb-1">Add member</div>
          <p className="text-xs text-gray-400 mb-4">Add members to your organization.</p>
          <div className="flex gap-2">
            <button className="flex-1 py-2 border border-gray-300 text-gray-600 rounded text-xs">Cancel</button>
            <button className="flex-1 py-2 bg-indigo-500 text-white rounded text-xs">Add</button>
          </div>
        </div>
      </div>
    ),
    card: (
      <div className="flex items-center justify-center h-full p-3 bg-indigo-50">
        <div className="bg-white rounded-lg border-2 border-indigo-100 p-4 w-40">
          <div className="text-xs text-indigo-600 font-medium mb-1">Cloud API</div>
          <div className="text-sm font-semibold text-gray-900 mb-6">Project name</div>
          <div className="text-xs text-gray-400">Created on</div>
          <div className="text-xs text-gray-400">08/20, 2025</div>
        </div>
      </div>
    ),
    chip: (
      <div className="flex flex-col items-start justify-center h-full p-4 bg-indigo-50">
        <div className="text-xs text-gray-400 mb-3">Value</div>
        <div className="flex gap-2 flex-wrap">
          {["File", "Stream", "Glass_break"].map(c => (
            <span key={c} className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded text-xs">{c}</span>
          ))}
        </div>
      </div>
    ),
    table: (
      <div className="flex items-center justify-center h-full p-2 bg-indigo-50 overflow-hidden">
        <div className="w-full text-xs">
          <div className="grid grid-cols-3 gap-2 border-b border-gray-200 pb-1 mb-1">
            <div className="text-gray-500 font-medium">Date</div>
            <div className="text-gray-500 font-medium">Tag</div>
            <div className="text-gray-500 font-medium">Type</div>
          </div>
          {[1,2].map(i => (
            <div key={i} className="grid grid-cols-3 gap-2 py-1 border-b border-gray-100">
              <div className="text-gray-600 truncate">12.29.2021</div>
              <div className="text-indigo-500">Whistle</div>
              <div className="text-gray-400">audio/mp3</div>
            </div>
          ))}
        </div>
      </div>
    ),
    datepicker: (
      <div className="flex items-center justify-center h-full p-3 bg-indigo-50">
        <div className="bg-white rounded-lg shadow-lg p-3 w-48">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-800">Custom date</span>
            <span className="text-gray-400">×</span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600">Start date</span>
            <span className="text-xs text-indigo-500">Aug 10, 2022</span>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center">
            {[1,2,3,4,5,6,7,8,9,10,11,12,13,14].map((day) => (
              <span key={day} className={`text-xs py-0.5 rounded-full ${day === 10 ? 'bg-indigo-500 text-white' : 'text-gray-600'}`} style={{ fontSize: '9px' }}>{day}</span>
            ))}
          </div>
        </div>
      </div>
    ),
    checkbox: (
      <div className="flex items-center justify-center h-full p-4 gap-6 bg-indigo-50">
        <label className="flex items-center gap-2 text-xs"><input type="checkbox" className="w-3 h-3" /> Baby cry</label>
        <label className="flex items-center gap-2 text-xs"><input type="checkbox" defaultChecked className="w-3 h-3 accent-indigo-600" /> Bell</label>
      </div>
    ),
    button: (
      <div className="flex flex-col items-center justify-center h-full p-3 bg-indigo-50">
        <div className="w-full">
          <div className="flex gap-2 mb-3">
            <button className="flex-1 px-3 py-2 bg-white border-2 border-indigo-500 text-indigo-600 rounded text-xs">Cloud API ✓</button>
            <button className="flex-1 px-3 py-2 bg-white border border-gray-200 text-gray-600 rounded text-xs">Edge SDK</button>
          </div>
          <button className="w-full py-2 bg-indigo-500 text-white rounded text-sm font-medium">Create Project</button>
        </div>
      </div>
    ),
    input: (
      <div className="flex items-center justify-center h-full p-4 bg-indigo-50">
        <div className="bg-white p-3 rounded-lg shadow w-40">
          <div className="text-xs font-medium mb-2">Let's try Cochl.Sense</div>
          <div className="text-xs text-gray-400 mb-1">Project name</div>
          <div className="border rounded px-2 py-1 text-xs text-gray-400">API project name</div>
        </div>
      </div>
    ),
    dropdown: (
      <div className="flex items-center justify-center h-full p-3 bg-indigo-50">
        <div className="w-full max-w-xs">
          <div className="bg-white border border-gray-200 rounded-lg p-2 mb-1">
            <div className="flex items-center justify-between">
              <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs flex items-center gap-1">
                email@example.com <span className="text-gray-400">×</span>
              </span>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" checked className="w-3 h-3 accent-indigo-600" readOnly />
              <span className="text-xs text-gray-600">email@example.com</span>
            </div>
          </div>
        </div>
      </div>
    ),
    popover: (
      <div className="flex items-start justify-center h-full p-3 pt-6 bg-indigo-50">
        <div className="relative">
          <button className="px-4 py-2 bg-indigo-500 text-white text-sm rounded font-medium">Button</button>
          <div className="absolute top-10 left-0 bg-white rounded-lg shadow-lg border py-2 w-32">
            <div className="px-4 py-2 text-sm text-gray-700">Menu item</div>
            <div className="px-4 py-2 text-sm text-gray-700">Menu item</div>
          </div>
        </div>
      </div>
    ),
    radio: (
      <div className="flex items-center justify-center h-full p-4 bg-indigo-50">
        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-3">
            <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
            <span className="text-sm text-gray-700">Radio Label</span>
          </label>
          <label className="flex items-center gap-3">
            <div className="w-5 h-5 border-2 border-indigo-500 rounded-full flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-indigo-500 rounded-full"></div>
            </div>
            <span className="text-sm text-gray-700">Radio Label</span>
          </label>
        </div>
      </div>
    ),
    heatmap: (
      <div className="flex flex-col items-center justify-center h-full p-2 bg-indigo-50">
        <div className="text-xs text-gray-600 font-medium text-center mb-1">Aug 22, 2023</div>
        <div className="grid grid-cols-7 gap-0.5">
          {[0,1,2,1,3,2,1,1,2,3,2,1,4,2,2,2,1,3,2,2,1].map((level, i) => {
            const colors = ['bg-indigo-100', 'bg-indigo-200', 'bg-indigo-300', 'bg-indigo-400', 'bg-indigo-500'];
            return <div key={i} className={`w-4 h-4 ${colors[level]} rounded-sm`}></div>;
          })}
        </div>
      </div>
    ),
    timeseries: (
      <div className="flex flex-col items-center justify-center h-full p-2 bg-indigo-50">
        <div className="w-full">
          <div className="flex justify-center mb-2">
            <div className="px-3 py-1 bg-white rounded-full border text-xs text-teal-600">2 Tracked Tags ▼</div>
          </div>
          <svg viewBox="0 0 200 80" className="w-full h-16">
            <path d="M0,60 L40,45 L80,20 L120,55 L160,15 L200,40" fill="none" stroke="#14b8a6" strokeWidth="2"/>
            <path d="M0,50 L40,55 L80,35 L120,40 L160,25 L200,10" fill="none" stroke="#3b82f6" strokeWidth="2"/>
          </svg>
        </div>
      </div>
    ),
    piechart: (
      <div className="flex items-center justify-center h-full p-2 bg-indigo-50">
        <div>
          <div className="text-sm font-medium text-gray-700 mb-1">Tag source</div>
          <svg viewBox="0 0 100 100" className="w-16 h-16">
            <circle cx="50" cy="50" r="45" fill="#c7d2fe" />
            <path d="M50,50 L50,5 A45,45 0 0,1 95,50 Z" fill="#6366f1" />
            <path d="M50,50 L95,50 A45,45 0 0,1 75,90 Z" fill="#14b8a6" />
          </svg>
        </div>
      </div>
    ),
  };
  return previews[type] || <div className="h-full bg-gray-100"></div>;
};

function ComponentOverviewPage({ setCurrentPage, nav, toggleCategory }) {
  const [expandedSections, setExpandedSections] = useState({ "Data Display": false, "Form": false });
  const toggleSection = (section) => setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  const getVisibleCards = (cat, cards) => (cat === "Data Display" || cat === "Form") ? (expandedSections[cat] ? cards : cards.slice(0, 3)) : cards;

  return (
    <div className="flex h-screen bg-white" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
      <div className="w-16 bg-white flex flex-col items-center py-4 gap-8 border-r border-gray-100">
        <Search className="w-5 h-5 text-gray-600" />
        <div className="flex flex-col items-center gap-1"><Home className="w-5 h-5 text-gray-500" /><span className="text-xs text-gray-500">Home</span></div>
        <div className="flex flex-col items-center gap-1"><Layers className="w-5 h-5 text-gray-500" /><span className="text-xs text-gray-500">Foundation</span></div>
        <div className="flex flex-col items-center gap-1"><Palette className="w-5 h-5 text-gray-500" /><span className="text-xs text-gray-500">Style</span></div>
        <div className="flex flex-col items-center gap-1"><Plus className="w-5 h-5 text-indigo-600" /><span className="text-xs text-indigo-600">Components</span></div>
      </div>
      <div className="w-56 bg-gray-50 overflow-y-auto">
        <div className="px-4 py-3 text-sm text-indigo-600 bg-gray-100">Component overview</div>
        {nav.map((section, idx) => (
          <div key={section.category}>
            <div className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-100" onClick={() => toggleCategory(idx)}>
              <span className="text-sm text-gray-600">{section.category}</span>
              {section.expanded ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronRight className="w-4 h-4 text-gray-400" />}
            </div>
            {section.expanded && section.items.map(item => (
              <div key={item} className="px-8 py-2.5 text-sm cursor-pointer hover:bg-gray-100 text-gray-500" onClick={() => item === "Navigation" && setCurrentPage("navigation")}>{item}</div>
            ))}
          </div>
        ))}
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="flex gap-4 p-6">
          <div className="w-64 h-72 bg-gray-50 rounded-lg flex items-end p-6"><h1 className="text-4xl font-medium text-gray-900">Components</h1></div>
          <div className="flex-1 h-72 bg-gray-900 rounded-lg overflow-hidden relative">
            <div className="absolute inset-0 p-4 flex flex-wrap gap-3 items-start content-start">
              <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded px-3 py-1.5 text-xs text-blue-700">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>Project key reset<span className="ml-2">×</span>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-indigo-600 text-white rounded text-sm">Button</button>
                <button className="px-4 py-2 bg-indigo-700 text-white rounded text-sm">Button</button>
              </div>
              <div className="flex gap-1"><span className="px-2 py-0.5 bg-indigo-500 text-white rounded text-xs">Chip</span><span className="px-2 py-0.5 bg-gray-600 text-white rounded text-xs">Chip</span></div>
              <div className="w-full mt-2"><div className="bg-gray-700 rounded-lg px-4 py-3 text-gray-400 text-sm">Name or email</div></div>
              <div className="w-full mt-3"><div className="h-2 bg-indigo-600 rounded-full"></div></div>
            </div>
          </div>
        </div>
        <div className="px-6 pb-12">
          {Object.entries(componentCards).map(([category, cards]) => (
            <div key={category} className="mb-10">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">{category}</h2>
              <div className="grid grid-cols-3 gap-4">
                {getVisibleCards(category, cards).map(card => (
                  <div key={card.name} className="bg-gray-50 border border-gray-100 rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-shadow" onClick={() => {
                    if (card.name === "Navigation bar") setCurrentPage("navigation");
                    if (card.name === "Tabs") setCurrentPage("tabs");
                  }}>
                    <div className="h-36 relative overflow-hidden"><PreviewContent type={card.preview} /></div>
                    <div className="p-4"><h3 className="text-base font-medium text-gray-800 mb-1">{card.name}</h3><p className="text-xs text-gray-500 leading-relaxed">{card.desc}</p></div>
                  </div>
                ))}
              </div>
              {(category === "Data Display" || category === "Form") && (
                <div className="flex justify-end mt-3">
                  <button className="flex items-center gap-1 text-indigo-600 text-sm hover:underline" onClick={() => toggleSection(category)}>
                    {expandedSections[category] ? <><ArrowRight className="w-4 h-4 rotate-180" /> View less</> : <>View more <ArrowRight className="w-4 h-4" /></>}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center py-6 text-gray-400 text-sm border-t border-gray-100">© 2026 Cochl Inc.</div>
      </div>
    </div>
  );
}

function TabsDetailPage({ setCurrentPage, nav, toggleCategory }) {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="flex h-screen bg-white" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
      {/* Icon Navigation Rail */}
      <div className="w-16 bg-white flex flex-col items-center py-4 gap-8 border-r border-gray-100">
        <Search className="w-5 h-5 text-gray-600" />
        <div className="flex flex-col items-center gap-1 cursor-pointer" onClick={() => setCurrentPage("overview")}><Home className="w-5 h-5 text-gray-500" /><span className="text-xs text-gray-500">Home</span></div>
        <div className="flex flex-col items-center gap-1"><Layers className="w-5 h-5 text-gray-500" /><span className="text-xs text-gray-500">Foundation</span></div>
        <div className="flex flex-col items-center gap-1"><Palette className="w-5 h-5 text-gray-500" /><span className="text-xs text-gray-500">Style</span></div>
        <div className="flex flex-col items-center gap-1"><Plus className="w-5 h-5 text-indigo-600" /><span className="text-xs text-indigo-600">Components</span></div>
      </div>

      {/* Sidebar */}
      <div className="w-56 bg-gray-50 overflow-y-auto">
        <div className="px-4 py-3 text-sm cursor-pointer text-gray-500 hover:bg-gray-100" onClick={() => setCurrentPage("overview")}>Component overview</div>
        {nav.map((section, idx) => (
          <div key={section.category}>
            <div className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-100" onClick={() => toggleCategory(idx)}>
              <span className={`text-sm ${section.category === "Disclosure" ? "text-indigo-600" : "text-gray-600"}`}>{section.category}</span>
              {section.expanded ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronRight className="w-4 h-4 text-gray-400" />}
            </div>
            {section.expanded && section.items.map(item => (
              <div 
                key={item} 
                className={`px-8 py-2.5 text-sm cursor-pointer hover:bg-gray-100 ${item === "Tabs" ? "text-indigo-600 bg-gray-100" : "text-gray-500"}`}
                onClick={() => {
                  if (item === "Navigation") setCurrentPage("navigation");
                  if (item === "Tabs") setCurrentPage("tabs");
                }}
              >
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Hero Section */}
        <div className="flex">
          <div className="w-80 p-8 bg-gray-50 flex flex-col justify-center min-h-80">
            <h1 className="text-4xl font-medium text-gray-900 mb-4">Tabs</h1>
            <p className="text-gray-500 text-base leading-relaxed">Tabs organize content across different screens and views</p>
          </div>
          <div className="flex-1 relative">
            <div className="relative h-96 overflow-hidden" style={{ background: 'linear-gradient(135deg, #96A7FF 0%, #A78BFA 50%, #8B5CF6 100%)' }}>
              {/* Decorative sun/burst element */}
              <div className="absolute right-1/3 top-8">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full" style={{ backgroundColor: '#7DD3FC' }}></div>
                  {/* Sun rays */}
                  <div className="absolute -top-3 left-1/2 w-1 h-6 bg-blue-300 rounded-full transform -translate-x-1/2"></div>
                  <div className="absolute -top-2 left-1/4 w-1 h-5 bg-blue-300 rounded-full transform rotate-[-30deg]"></div>
                  <div className="absolute -top-2 right-1/4 w-1 h-5 bg-blue-300 rounded-full transform rotate-[30deg]"></div>
                  <div className="absolute top-1/4 -left-2 w-5 h-1 bg-blue-300 rounded-full"></div>
                  <div className="absolute top-1/4 -right-2 w-5 h-1 bg-blue-300 rounded-full"></div>
                </div>
              </div>
              
              {/* Large purple circle decoration */}
              <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full" style={{ backgroundColor: '#8B5CF6', opacity: 0.6 }}></div>
              
              {/* Browser mockup */}
              <div className="absolute left-8 top-20 w-full max-w-2xl">
                <div className="bg-white rounded-tl-lg shadow-2xl overflow-hidden">
                  {/* Browser header with cochl logo */}
                  <div className="px-6 py-3 border-b border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="text-indigo-600 text-lg">●</span>
                      <span className="text-gray-800 font-medium text-sm">cochl.</span>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="text-xs font-medium text-gray-900">Projects</span>
                      <span className="text-xs text-gray-400">Usage</span>
                      <span className="text-xs text-gray-400">Billing</span>
                      <span className="text-xs text-gray-400">Organization</span>
                    </div>
                  </div>
                  
                  {/* Announcement banner */}
                  <div className="px-6 py-2 text-xs text-indigo-600">
                    Speaker verification BETA is now live for Cloud API projects. <span className="font-medium">Try it out →</span>
                  </div>
                  
                  {/* Content */}
                  <div className="px-6 py-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud API project</h3>
                    
                    {/* Tabs */}
                    <div className="flex items-center gap-6 border-b border-gray-200 mb-6">
                      <span className="text-sm text-gray-500 pb-3 flex items-center gap-1">Upload <span className="text-xs px-1.5 py-0.5 bg-gray-100 text-gray-500 rounded">BETA</span></span>
                      <span className="text-sm text-gray-900 font-medium pb-3 border-b-2 border-gray-900 -mb-px">Overview</span>
                      <span className="text-sm text-gray-500 pb-3 flex items-center gap-1">Speaker Recognition <span className="text-xs px-1.5 py-0.5 bg-gray-100 text-gray-500 rounded">BETA</span></span>
                      <span className="text-sm text-gray-500 pb-3">Analytics</span>
                      <span className="text-sm text-gray-500 pb-3">History</span>
                      <span className="text-sm text-gray-500 pb-3">Post Actions</span>
                      <span className="text-sm text-gray-500 pb-3">Settings</span>
                    </div>
                    
                    {/* Project Info and Docs */}
                    <div className="flex gap-12">
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Project info.</h4>
                        <div className="space-y-2 text-xs">
                          <div className="flex gap-4">
                            <span className="text-gray-400 w-16">Created on</span>
                            <span className="text-gray-700">Nov 24, 2021</span>
                          </div>
                          <div className="flex gap-4">
                            <span className="text-gray-400 w-16">Project ID</span>
                            <span className="text-gray-700 flex items-center gap-1">ef964b5c-e141-4a1e-835a-92254fe613b1 <span className="text-gray-300">📋</span></span>
                          </div>
                        </div>
                        <a href="#" className="text-xs text-indigo-600 mt-3 inline-block">Go to settings →</a>
                      </div>
                      <div className="w-64">
                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Docs</h4>
                        <div className="space-y-2">
                          <div className="border border-gray-200 rounded p-2">
                            <a href="#" className="text-xs text-gray-700 flex items-center gap-1">Cochl.Sense API <ExternalLink className="w-3 h-3" /></a>
                            <p className="text-xs text-gray-400 mt-1">Cochl.Sense is the only publicly available API for machine listening.</p>
                          </div>
                          <div className="border border-gray-200 rounded p-2">
                            <a href="#" className="text-xs text-gray-700 flex items-center gap-1">Cochl.Sense SDK <ExternalLink className="w-3 h-3" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="px-8 border-b border-gray-200">
          <div className="flex gap-8">
            {["Overview", "Guidelines", "Usage"].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab ? 'text-gray-900 border-indigo-600' : 'text-gray-500 border-transparent hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="px-8 py-8">
          {activeTab === "Overview" && (
            <>
              {/* Guidelines */}
              <ul className="space-y-2 text-gray-700 text-base mb-12">
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>
                  <span>Use tabs to group content into helpful categories</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>
                  <span>Tabs can horizontally scroll, so a UI can have as many tabs as needed</span>
                </li>
              </ul>

              {/* Tab Preview */}
              <div className="rounded-2xl p-12 mb-12" style={{ backgroundColor: '#EBEDFC' }}>
                <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-4">
                  <div className="flex items-center gap-6 border-b border-gray-200 pb-3">
                    <span className="text-sm text-gray-900 font-medium border-b-2 border-indigo-600 pb-3 -mb-3">Upload</span>
                    <span className="text-sm text-indigo-600">Overview</span>
                    <span className="text-sm text-gray-500">Analytics</span>
                  </div>
                  <div className="flex items-center gap-2 mt-4">
                    <span className="text-xs text-gray-500 mr-2">Tags</span>
                    {["Alarm", "Emergency Siren", "Bark", "Fire Alarm"].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Availability & Resource */}
              <h2 className="text-2xl font-medium text-gray-900 mb-6">Availability & Resource</h2>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="grid grid-cols-3 bg-gray-100 px-5 py-3 text-xs font-semibold text-gray-900">
                  <div>Type</div>
                  <div>Resource</div>
                  <div>Status</div>
                </div>
                <div className="grid grid-cols-3 px-5 py-4 border-t border-gray-200 text-sm">
                  <div className="text-gray-900">Design</div>
                  <div><a href="#" className="text-indigo-600 hover:underline">Design Kit (Figma)</a></div>
                  <div className="text-gray-500">Available</div>
                </div>
                <div className="grid grid-cols-3 px-5 py-4 border-t border-gray-200 text-sm">
                  <div className="text-gray-900">Implementation</div>
                  <div className="text-gray-900">Web</div>
                  <div className="text-gray-500">Available</div>
                </div>
              </div>
            </>
          )}

          {activeTab === "Guidelines" && (
            <>
              {/* On this page */}
              <div className="mb-12">
                <p className="text-xs text-gray-900 mb-2">On this page</p>
                <ul className="list-disc list-inside space-y-1 text-base text-gray-900">
                  <li>Type</li>
                  <li>Color</li>
                  <li>States</li>
                  <li>Measurements</li>
                </ul>
              </div>

              {/* Type */}
              <h2 className="text-2xl font-medium text-gray-900 mb-6">Type</h2>
              <div className="rounded-xl mb-6 flex items-center justify-center py-24" style={{ backgroundColor: '#EBEDFC' }}>
                <div className="flex items-center">
                  <div className="border-b-2 border-indigo-600 px-6 py-2">
                    <span className="text-sm text-indigo-600">Option 1</span>
                  </div>
                  <div className="px-6 py-2">
                    <span className="text-sm text-gray-400">Option 2</span>
                  </div>
                  <div className="px-6 py-2">
                    <span className="text-sm text-gray-400">Option 3</span>
                  </div>
                  <div className="px-6 py-2">
                    <span className="text-sm text-gray-400">Option 4</span>
                  </div>
                  <div className="px-6 py-2">
                    <span className="text-sm text-gray-400">Option 5</span>
                  </div>
                </div>
              </div>
              <ol className="list-decimal list-inside space-y-1 text-base text-gray-900 mb-12">
                <li>Basic</li>
              </ol>

              {/* Color */}
              <h2 className="text-2xl font-medium text-gray-900 mb-6">Color</h2>
              <div className="space-y-0 mb-6">
                {/* Light background with dark tabs */}
                <div className="p-16 relative overflow-hidden" style={{ backgroundColor: '#F8F8FC' }}>
                  <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                  <div className="relative flex items-center justify-center">
                    <div className="bg-gray-900 rounded-lg px-4 py-2 flex items-center">
                      <div className="border-b-2 border-indigo-400 px-4 py-2">
                        <span className="text-sm text-white">Option 1</span>
                      </div>
                      <div className="px-4 py-2">
                        <span className="text-sm text-gray-400">Option 2</span>
                      </div>
                      <div className="px-4 py-2">
                        <span className="text-sm text-gray-400">Option 3</span>
                      </div>
                      <div className="px-4 py-2">
                        <span className="text-sm text-gray-400">Option 4</span>
                      </div>
                      <div className="px-4 py-2">
                        <span className="text-sm text-gray-400">Option 5</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Dark background with light tabs */}
                <div className="p-16 relative overflow-hidden" style={{ backgroundColor: '#1a1a1a' }}>
                  <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #4b5563 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                  <div className="relative flex items-center justify-center">
                    <div className="bg-white rounded-lg px-4 py-2 flex items-center shadow-lg">
                      <div className="border-b-2 border-indigo-600 px-4 py-2">
                        <span className="text-sm text-gray-900">Option 1</span>
                      </div>
                      <div className="px-4 py-2">
                        <span className="text-sm text-gray-400">Option 2</span>
                      </div>
                      <div className="px-4 py-2">
                        <span className="text-sm text-gray-400">Option 3</span>
                      </div>
                      <div className="px-4 py-2">
                        <span className="text-sm text-gray-400">Option 4</span>
                      </div>
                      <div className="px-4 py-2">
                        <span className="text-sm text-gray-400">Option 5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ol className="list-decimal list-inside space-y-1 text-base text-gray-900 mb-12">
                <li>Dark</li>
                <li>Light</li>
              </ol>

              {/* States */}
              <h2 className="text-2xl font-medium text-gray-900 mb-6">States</h2>
              <div className="space-y-4 mb-6">
                {/* State 1 - Active */}
                <div className="rounded-xl py-16 flex items-center justify-center" style={{ backgroundColor: '#EBEDFC' }}>
                  <div className="flex items-center">
                    <div className="border-b-2 border-indigo-600 px-6 py-2">
                      <span className="text-base font-medium text-gray-900">Option 1</span>
                    </div>
                    <div className="px-6 py-2">
                      <span className="text-base font-medium text-gray-400">Option 2</span>
                    </div>
                    <div className="px-6 py-2">
                      <span className="text-base font-medium text-gray-400">Option 3</span>
                    </div>
                    <div className="px-6 py-2">
                      <span className="text-base font-medium text-gray-400">Option 4</span>
                    </div>
                    <div className="px-6 py-2">
                      <span className="text-base font-medium text-gray-400">Option 5</span>
                    </div>
                  </div>
                </div>
                {/* State 2 - Focus/Hover */}
                <div className="rounded-xl py-16 flex items-center justify-center relative" style={{ backgroundColor: '#EBEDFC' }}>
                  <div className="flex items-center">
                    <div className="border-b-2 border-indigo-600 px-6 py-2">
                      <span className="text-base font-medium text-gray-900">Option 1</span>
                    </div>
                    <div className="px-6 py-2">
                      <span className="text-base font-medium text-gray-400">Option 2</span>
                    </div>
                    <div className="border-b-2 border-indigo-600 px-6 py-2 relative">
                      <span className="text-base font-medium text-gray-400">Option 3</span>
                      {/* Cursor icon */}
                      <svg className="w-4 h-4 absolute -right-2 -bottom-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13.64 21.97C13.14 22.21 12.54 22 12.31 21.5L10.13 16.76L7.62 18.78C7.45 18.92 7.24 19 7.02 19C6.55 19 6.16 18.61 6.16 18.14V5.02C6.16 4.55 6.55 4.16 7.02 4.16C7.24 4.16 7.45 4.24 7.62 4.38L18.47 13.52C18.84 13.82 18.91 14.35 18.63 14.73C18.5 14.91 18.3 15.03 18.08 15.07L14.44 15.69L16.62 20.43C16.85 20.93 16.64 21.53 16.14 21.76L13.64 21.97Z"/>
                      </svg>
                    </div>
                    <div className="px-6 py-2">
                      <span className="text-base font-medium text-gray-400">Option 4</span>
                    </div>
                    <div className="px-6 py-2">
                      <span className="text-base font-medium text-gray-400">Option 5</span>
                    </div>
                  </div>
                </div>
                {/* State 3 - Default */}
                <div className="rounded-xl py-16 flex items-center justify-center" style={{ backgroundColor: '#EBEDFC' }}>
                  <div className="flex items-center">
                    <div className="px-6 py-2">
                      <span className="text-base font-medium text-gray-400">Option 1</span>
                    </div>
                    <div className="px-6 py-2">
                      <span className="text-base font-medium text-gray-400">Option 2</span>
                    </div>
                    <div className="px-6 py-2">
                      <span className="text-base font-medium text-gray-400">Option 3</span>
                    </div>
                    <div className="px-6 py-2">
                      <span className="text-base font-medium text-gray-400">Option 4</span>
                    </div>
                    <div className="px-6 py-2">
                      <span className="text-base font-medium text-gray-400">Option 5</span>
                    </div>
                  </div>
                </div>
              </div>
              <ol className="list-decimal list-inside space-y-1 text-base text-gray-900 mb-12">
                <li>Active</li>
                <li>Focus</li>
                <li>Default</li>
              </ol>

              {/* Measurements */}
              <h2 className="text-2xl font-medium text-gray-900 mb-6">Measurements</h2>
              <div className="rounded-xl p-8 mb-6 flex items-center justify-center" style={{ backgroundColor: '#EBEDFC' }}>
                <div className="relative">
                  {/* Tab measurement visualization */}
                  <div className="flex items-end">
                    <div className="flex flex-col items-center">
                      <div className="text-xs text-red-500 mb-1">40px</div>
                      <div className="border-l-2 border-red-400 h-10"></div>
                    </div>
                    <div className="bg-white rounded-lg px-1 py-2 flex items-center shadow mx-4">
                      <div className="border-b-2 border-indigo-600 px-4 py-2 relative">
                        <span className="text-sm text-indigo-600">Option 1</span>
                        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-red-500">2px</div>
                      </div>
                      <div className="px-4 py-2">
                        <span className="text-sm text-gray-400">Option 2</span>
                      </div>
                      <div className="px-4 py-2">
                        <span className="text-sm text-gray-400">Option 3</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center mt-6">
                    <div className="text-xs text-red-500">42px between tabs</div>
                  </div>
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg overflow-hidden mb-8">
                <div className="grid grid-cols-3 bg-gray-100 px-5 py-3 text-xs font-semibold text-gray-900">
                  <div>Attribute</div>
                  <div>Value</div>
                  <div>Color</div>
                </div>
                {[
                  ["Container height", "40px", ""],
                  ["Active indicator height", "2px", "#4057D0 (Dark/Blue/60)"],
                  ["Padding between indicator and text", "8px", ""],
                  ["Padding between text and text", "42px", ""],
                ].map(([attr, val, color], i) => (
                  <div key={i} className="grid grid-cols-3 px-5 py-4 border-t border-gray-200 text-sm">
                    <div className="text-gray-900">{attr}</div>
                    <div className="text-gray-500">{val}</div>
                    <div className="text-gray-500">{color}</div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === "Usage" && (
            <>
              {/* On this page */}
              <div className="mb-12">
                <p className="text-xs text-gray-900 mb-2">On this page</p>
                <ul className="list-disc list-inside space-y-1 text-base text-gray-900">
                  <li>Usage</li>
                  <li>Choosing the tab type</li>
                </ul>
              </div>

              {/* Usage */}
              <h2 className="text-2xl font-medium text-gray-900 mb-6">Usage</h2>
              
              {/* Usage Example 1 - Default/Active */}
              <div className="rounded-2xl p-8 mb-6 flex items-center justify-center" style={{ backgroundColor: '#EBEDFC' }}>
                <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Projects</h3>
                    <button className="px-4 py-2 bg-indigo-600 text-white text-sm rounded">+ Add new project</button>
                  </div>
                  <div className="flex items-center gap-6 border-b border-gray-200 pb-3">
                    <span className="text-sm text-gray-900 font-medium border-b-2 border-indigo-600 pb-3 -mb-3 flex items-center gap-2">All <span className="px-2 py-0.5 bg-indigo-600 text-white text-xs rounded">6</span></span>
                    <span className="text-sm text-gray-400 flex items-center gap-2">Cloud API <span className="px-2 py-0.5 bg-gray-200 text-gray-500 text-xs rounded">0</span></span>
                    <span className="text-sm text-gray-400 flex items-center gap-2">Edge SDK <span className="px-2 py-0.5 bg-gray-200 text-gray-500 text-xs rounded">0</span></span>
                  </div>
                </div>
              </div>
              <ol className="list-decimal list-inside space-y-1 text-base text-gray-900 mb-12" start={1}>
                <li>Default/Active, the "All" tab is highlighted in blue — this shows it's the currently active filter/category being applied</li>
              </ol>

              {/* Usage Example 2 - Focus */}
              <div className="rounded-2xl p-8 mb-6 flex items-center justify-center" style={{ backgroundColor: '#EBEDFC' }}>
                <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl">
                  <div className="flex items-center gap-6 mb-4">
                    <span className="text-sm text-indigo-600 border-b-2 border-indigo-600 pb-2">Upload</span>
                    <span className="text-sm text-gray-900 font-medium pb-2 border-b-2 border-gray-300">Overview</span>
                    <span className="text-sm text-gray-400 pb-2">Analytics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500 mr-2">Tags</span>
                    {["Alarm", "Emergency Siren", "Bark", "Fire Alarm"].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <ol className="list-decimal list-inside space-y-1 text-base text-gray-900 mb-12" start={2}>
                <li>Focus, the tab appears highlighted or outlined — this shows that it is focused, ready for interaction</li>
              </ol>

              {/* Choosing the tab type */}
              <h2 className="text-2xl font-medium text-gray-900 mb-6">Choosing the tab type</h2>
              
              <div className="rounded-2xl p-8 mb-6" style={{ backgroundColor: '#EBEDFC' }}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
                  <div className="p-4 border-b border-gray-100">
                    <div className="flex items-center gap-1 mb-2">
                      <span className="text-indigo-600">●</span>
                      <span className="font-medium text-gray-900 text-sm">cochl.</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Edge SDK project</h3>
                    <div className="flex items-center gap-6 border-b border-gray-200">
                      <span className="text-sm text-gray-900 font-medium pb-3 border-b-2 border-gray-900">Overview</span>
                      <span className="text-sm text-gray-400 pb-3">Devices</span>
                      <span className="text-sm text-gray-400 pb-3">Analytics</span>
                      <span className="text-sm text-gray-400 pb-3">Settings</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-base text-gray-900 mb-12">
                <div>
                  <p className="font-medium mb-2">Focus State</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                    <li>Purpose: Shows that a component is currently focused, especially via keyboard navigation or programmatic focus.</li>
                    <li>When to Use: Use this when a user navigates to an element using the keyboard (e.g., pressing Tab) or screen reader.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">Active State</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
                    <li>Purpose: Indicates the current selection.</li>
                    <li>When to Use: Use this when a tab, button, or item is currently selected or in use.</li>
                  </ul>
                </div>
              </div>

              {/* Do/Don't Examples */}
              <div className="grid grid-cols-2 gap-6 mb-6">
                {/* Do Example */}
                <div className="rounded-t-2xl overflow-hidden">
                  <div className="h-96 flex items-center justify-center p-4" style={{ backgroundColor: '#EBEDFC' }}>
                    <div className="bg-white rounded-lg shadow-lg p-4 w-full">
                      <div className="flex items-center gap-1 mb-4">
                        <span className="text-indigo-600">●</span>
                        <span className="font-medium text-gray-900 text-sm">cochl.</span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Cloud API project</h4>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-gray-400 pb-2 flex items-center gap-1">Upload <span className="text-xs px-1.5 py-0.5 bg-indigo-100 text-indigo-600 rounded border border-indigo-300">BETA</span></span>
                        <span className="text-gray-900 font-medium pb-2 border-b-2 border-gray-900">Overview</span>
                        <span className="text-gray-400 pb-2">Analytics</span>
                        <span className="text-gray-400 pb-2">Settings</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-500 py-3 px-4 flex items-center gap-2 rounded-b-2xl">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    <span className="text-white font-medium">Do</span>
                  </div>
                </div>
                {/* Don't Example */}
                <div className="rounded-t-2xl overflow-hidden">
                  <div className="h-96 flex items-center justify-center p-4" style={{ backgroundColor: '#EBEDFC' }}>
                    <div className="bg-white rounded-lg shadow-lg p-4 w-full">
                      <div className="flex items-center gap-1 mb-4">
                        <span className="text-indigo-600">●</span>
                        <span className="font-medium text-gray-900 text-sm">cochl.</span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Cloud API project</h4>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-indigo-600 pb-2 flex items-center gap-1">Upload <span className="text-xs px-1.5 py-0.5 bg-gray-100 text-gray-500 rounded">BETA</span></span>
                        <span className="text-gray-900 font-medium pb-2 border-b-2 border-gray-900">Overview</span>
                        <span className="text-gray-400 pb-2">Analytics</span>
                        <span className="text-gray-400 pb-2">Settings</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-red-500 py-3 px-4 flex items-center gap-2 rounded-b-2xl">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                    <span className="text-white font-medium">Don't</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <p className="text-base text-gray-900">Use only Focus tab with badge (e.g., BETA). The focus tab should be styled distinctly (like outlined) so it's clear this is just focus, not selection.</p>
                <p className="text-base text-gray-900">Don't use text color alone for the Focus tab</p>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="text-left px-8 py-6 text-gray-400 text-sm border-t border-gray-100">© 2026 Cochl Inc.</div>
      </div>
    </div>
  );
}

export default function App() {
  const [nav, setNav] = useState(navigationData);
  const [activeTab, setActiveTab] = useState("Overview");
  const [currentPage, setCurrentPage] = useState("overview");
  const toggleCategory = (idx) => setNav(nav.map((n, i) => i === idx ? { ...n, expanded: !n.expanded } : n));

  if (currentPage === "overview") return <ComponentOverviewPage setCurrentPage={setCurrentPage} nav={nav} toggleCategory={toggleCategory} />;
  
  if (currentPage === "tabs") return <TabsDetailPage setCurrentPage={setCurrentPage} nav={nav} toggleCategory={toggleCategory} />;

  return (
    <div className="flex h-screen bg-white" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
      <div className="w-16 bg-white flex flex-col items-center py-4 gap-8 border-r border-gray-100">
        <Search className="w-5 h-5 text-gray-600" />
        <div className="flex flex-col items-center gap-1 cursor-pointer" onClick={() => setCurrentPage("overview")}><Home className="w-5 h-5 text-gray-500" /><span className="text-xs text-gray-500">Home</span></div>
        <div className="flex flex-col items-center gap-1"><Layers className="w-5 h-5 text-gray-500" /><span className="text-xs text-gray-500">Foundation</span></div>
        <div className="flex flex-col items-center gap-1"><Palette className="w-5 h-5 text-gray-500" /><span className="text-xs text-gray-500">Style</span></div>
        <div className="flex flex-col items-center gap-1"><Plus className="w-5 h-5 text-indigo-600" /><span className="text-xs text-indigo-600">Components</span></div>
      </div>
      <div className="w-56 bg-gray-50 overflow-y-auto">
        <div className="px-4 py-3 text-sm cursor-pointer text-gray-500 hover:bg-gray-100" onClick={() => setCurrentPage("overview")}>Component overview</div>
        {nav.map((section, idx) => (
          <div key={section.category}>
            <div className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-100" onClick={() => toggleCategory(idx)}>
              <span className={`text-sm ${section.category === "Disclosure" ? "text-indigo-600" : "text-gray-600"}`}>{section.category}</span>
              {section.expanded ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronRight className="w-4 h-4 text-gray-400" />}
            </div>
            {section.expanded && section.items.map(item => (
              <div 
                key={item} 
                className={`px-8 py-2.5 text-sm cursor-pointer hover:bg-gray-100 ${item === "Navigation" ? "text-indigo-600 bg-gray-100" : "text-gray-500"}`}
                onClick={() => {
                  if (item === "Navigation") setCurrentPage("navigation");
                  if (item === "Tabs") setCurrentPage("tabs");
                }}
              >
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="flex">
          <div className="w-80 p-8"><h1 className="text-4xl font-medium text-gray-900 mb-4">Navigation</h1><p className="text-gray-500 text-sm leading-relaxed">Tabs organize content across different screens and views</p></div>
          <div className="flex-1 relative">
            <div className="relative h-80 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-indigo-400">
                <svg className="absolute right-0 top-0 w-96 h-96 text-indigo-500 opacity-50" viewBox="0 0 200 200"><path fill="currentColor" d="M100,20 L108,40 L130,35 L125,55 L145,65 L130,80 L140,100 L120,100 L115,120 L100,105 L85,120 L80,100 L60,100 L70,80 L55,65 L75,55 L70,35 L92,40 Z"/></svg>
              </div>
              <div className="absolute left-8 top-4 w-72 bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="h-40 bg-gray-50 flex items-center justify-center">
                  <div className="text-center"><div className="w-12 h-12 mx-auto mb-2 bg-indigo-100 rounded-lg flex items-center justify-center"><svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg></div><p className="text-xs text-gray-500 px-4">Register voices to detect them</p></div>
                </div>
              </div>
              <div className="absolute right-0 bottom-16 left-32 bg-white shadow-lg rounded-t-lg">
                <div className="flex items-center justify-between px-6 py-3">
                  <span className="text-indigo-600 font-medium text-sm">●cochl.</span>
                  <div className="flex items-center gap-6">{["Projects", "Usage", "Billing", "Organization"].map((item, i) => (<span key={item} className={`text-sm ${i === 0 ? 'font-medium text-gray-900' : 'text-gray-500'}`}>{item}</span>))}<div className="flex items-center gap-2"><Bell className="w-4 h-4 text-gray-600" /><div className="w-6 h-6 bg-gray-900 rounded-full"></div></div></div>
                </div>
                <div className="text-gray-700 text-xs py-1.5 px-4 text-center bg-indigo-100">Speaker verification BETA is now live →</div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-white py-3 text-center"><span className="text-sm font-medium text-gray-700">Cloud API project</span></div>
            </div>
          </div>
        </div>
        <div className="px-8 border-b border-gray-200">
          <div className="flex gap-8">{["Overview", "Guidelines", "Usage"].map(tab => (<button key={tab} onClick={() => setActiveTab(tab)} className={`py-4 text-sm font-medium border-b-2 transition-colors ${activeTab === tab ? 'text-gray-900 border-indigo-600' : 'text-gray-500 border-transparent hover:text-gray-700'}`}>{tab}</button>))}</div>
        </div>
        <div className="px-8 py-8">
          {activeTab === "Overview" && (
            <>
              <ul className="space-y-4 text-gray-700 text-sm mb-12">
                <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span>Use navigation bars in compact window sizes</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span>Use dark or light version depending on theme</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span>Can contain 3-5 destinations of equal importance</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span>Destinations should be consistent across screens</span></li>
              </ul>
              <div className="rounded-xl p-12 mb-12 bg-indigo-50">
                <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm">
                  <div className="flex items-center justify-between px-6 py-3">
                    <span className="text-indigo-600 font-medium text-sm">●cochl.</span>
                    <div className="flex items-center gap-6">{["Projects", "Usage", "Billing", "Organization"].map((item, i) => (<span key={item} className={`text-sm ${i === 0 ? 'font-medium text-gray-900' : 'text-gray-500'}`}>{item}</span>))}<div className="flex items-center gap-2"><Bell className="w-4 h-4 text-gray-600" /><div className="w-6 h-6 bg-gray-900 rounded-full"></div></div></div>
                  </div>
                </div>
              </div>
              <h2 className="text-2xl font-medium text-gray-900 mb-6">Availability & Resource</h2>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="grid grid-cols-3 bg-gray-50 px-6 py-3 text-sm font-medium text-gray-600"><div>Type</div><div>Resource</div><div>Status</div></div>
                <div className="grid grid-cols-3 px-6 py-4 border-t border-gray-200 text-sm"><div className="text-gray-700">Design</div><div><a href="#" className="text-indigo-600 hover:underline flex items-center gap-1">Design Kit (Figma) <ExternalLink className="w-3 h-3" /></a></div><div className="text-gray-400">Available</div></div>
                <div className="grid grid-cols-3 px-6 py-4 border-t border-gray-200 text-sm"><div className="text-gray-700">Implementation</div><div className="text-gray-700">Web</div><div className="text-gray-400">Available</div></div>
              </div>
            </>
          )}
          {activeTab === "Guidelines" && (
            <>
              <div className="mb-8"><h3 className="text-sm font-medium text-gray-900 mb-3">UI Recap</h3><ul className="space-y-2 text-sm text-gray-600">{["Type", "Color", "States", "Anatomy", "Measurement"].map(i => (<li key={i} className="flex items-center gap-2"><span className="w-1 h-1 bg-gray-400 rounded-full"></span>{i}</li>))}</ul></div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Type</h2>
              <div className="rounded-2xl p-8 mb-6" style={{ backgroundColor: '#E8EAF6' }}>
                <div className="space-y-6">
                  {/* Type 1 - Global Navigation */}
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center text-2xl font-medium text-gray-600 flex-shrink-0">1</div>
                    <div className="flex-1 bg-white rounded-lg px-6 py-4 flex items-center justify-between shadow-sm">
                      <div className="flex items-center gap-1"><span className="text-indigo-600 text-lg">●</span><span className="text-gray-800 font-medium">cochl.</span></div>
                      <div className="flex items-center gap-8">
                        <span className="text-sm font-medium text-gray-900">Projects</span>
                        <span className="text-sm text-gray-400">Custom Sound</span>
                        <span className="text-sm text-gray-400">Usage</span>
                        <span className="text-sm text-gray-400">Billing</span>
                        <span className="text-sm text-gray-400">Organization</span>
                        <div className="flex items-center gap-3">
                          <Bell className="w-5 h-5 text-gray-500" />
                          <div className="w-6 h-6 bg-indigo-600 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Type 2 - Footer */}
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center text-2xl font-medium text-gray-600 flex-shrink-0">2</div>
                    <div className="flex-1 bg-white rounded-lg px-6 py-4 shadow-sm">
                      <span className="text-sm text-gray-400">© 2024 Cochl Inc</span>
                    </div>
                  </div>
                  {/* Type 3 - Projects Section */}
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center text-2xl font-medium text-gray-600 flex-shrink-0">3</div>
                    <div className="flex-1 bg-gray-100 rounded-lg px-6 py-6 shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-900">Projects</h3>
                        <button className="px-4 py-2 bg-gray-800 text-white text-sm rounded-lg flex items-center gap-2 font-medium">
                          <span className="text-lg leading-none">+</span> New project
                        </button>
                      </div>
                      <div className="flex items-center gap-6 border-b border-gray-300 pb-3">
                        <span className="text-sm text-gray-900 font-medium flex items-center gap-2">All <span className="px-2 py-0.5 bg-indigo-600 text-white text-xs rounded-md">6</span></span>
                        <span className="text-sm text-gray-400 flex items-center gap-2">Cloud API <span className="px-2 py-0.5 bg-gray-200 text-gray-500 text-xs rounded-md">0</span></span>
                        <span className="text-sm text-gray-400 flex items-center gap-2">Edge SDK <span className="px-2 py-0.5 bg-gray-200 text-gray-500 text-xs rounded-md">0</span></span>
                      </div>
                    </div>
                  </div>
                  {/* Type 4 - Cloud API Project Tabs */}
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center text-2xl font-medium text-gray-600 flex-shrink-0">4</div>
                    <div className="flex-1 bg-white rounded-lg px-6 py-6 shadow-sm">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud API project</h3>
                      <div className="flex items-center gap-6">
                        <span className="text-sm text-gray-900 font-medium pb-2 border-b-2 border-gray-900">Overview</span>
                        <span className="text-sm text-gray-500 pb-2">Upload</span>
                        <span className="text-sm text-gray-500 pb-2">Speaker Recognition</span>
                        <span className="text-sm text-gray-500 pb-2">Analytics</span>
                        <span className="text-sm text-gray-500 pb-2">History</span>
                        <span className="text-sm text-gray-500 pb-2">Post Actions</span>
                        <span className="text-sm text-gray-500 pb-2">Settings</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600 mb-12"><li>Global Navigation Bar</li><li>Footer</li><li>2nd level Navigation</li><li>Page navigation</li></ol>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Color</h2>
              <div className="space-y-6 mb-6">
                {/* Color 1 - Light background with Dark nav */}
                <div className="rounded-2xl p-16 relative overflow-hidden" style={{ backgroundColor: '#F8F8FC' }}>
                  {/* Dotted pattern */}
                  <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                  {/* Dark Navigation Bar */}
                  <div className="relative bg-gray-900 rounded-lg px-6 py-3 flex items-center justify-between shadow-lg">
                    <div className="flex items-center gap-1"><span className="text-indigo-400 text-lg">●</span><span className="text-white font-medium">cochl.</span></div>
                    <div className="flex items-center gap-8">
                      <span className="text-xs font-medium text-white">Projects</span>
                      <span className="text-xs text-gray-400">Custom Sound</span>
                      <span className="text-xs text-gray-400">Usage</span>
                      <span className="text-xs text-gray-400">Billing</span>
                      <span className="text-xs text-gray-400">Organization</span>
                      <div className="flex items-center gap-3">
                        <Bell className="w-4 h-4 text-gray-400" />
                        <div className="w-5 h-5 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Color 2 - Dark background with Light nav */}
                <div className="rounded-2xl p-16 relative overflow-hidden" style={{ backgroundColor: '#1a1a1a' }}>
                  {/* Dotted pattern */}
                  <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #4b5563 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                  {/* Light Navigation Bar */}
                  <div className="relative bg-white rounded-lg px-6 py-3 flex items-center justify-between shadow-lg">
                    <div className="flex items-center gap-1"><span className="text-indigo-600 text-lg">●</span><span className="text-gray-900 font-medium">cochl.</span></div>
                    <div className="flex items-center gap-8">
                      <span className="text-xs font-medium text-gray-900">Projects</span>
                      <span className="text-xs text-gray-400">Custom Sound</span>
                      <span className="text-xs text-gray-400">Usage</span>
                      <span className="text-xs text-gray-400">Billing</span>
                      <span className="text-xs text-gray-400">Organization</span>
                      <div className="flex items-center gap-3">
                        <Bell className="w-4 h-4 text-gray-600" />
                        <div className="w-5 h-5 bg-gray-900 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ol className="list-decimal list-inside space-y-3 text-sm text-gray-700 mb-12">
                <li>Dark</li>
                <li>Light</li>
              </ol>
              <div className="space-y-6 mb-6">
                {/* State 1 - Enabled */}
                <div className="rounded-2xl px-12 py-16" style={{ backgroundColor: '#E8EAF6' }}>
                  <div className="max-w-3xl mx-auto space-y-3">
                    {/* Global Navigation */}
                    <div className="bg-white rounded-lg px-6 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-1"><span className="text-indigo-600 text-lg">●</span><span className="text-gray-800 font-medium text-sm">cochl.</span></div>
                      <div className="flex items-center gap-6">
                        <span className="text-xs font-semibold text-gray-900">Projects</span>
                        <span className="text-xs text-gray-400">Custom Sound</span>
                        <span className="text-xs text-gray-400">Usage</span>
                        <span className="text-xs text-gray-400">Billing</span>
                        <span className="text-xs text-gray-400">Organization</span>
                        <div className="flex items-center gap-2">
                          <Bell className="w-4 h-4 text-gray-600" />
                          <div className="w-5 h-5 bg-indigo-600 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    {/* Projects Section */}
                    <div className="bg-gray-100 rounded-lg px-6 py-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-base font-semibold text-gray-900">Projects</h3>
                        <button className="px-3 py-1.5 bg-indigo-600 text-white text-xs rounded flex items-center gap-1 font-medium">
                          <span>+</span> New project
                        </button>
                      </div>
                      <div className="flex items-center gap-5 border-b border-gray-200 pb-2">
                        <span className="text-xs text-gray-900 font-semibold flex items-center gap-1.5">All <span className="px-1.5 py-0.5 bg-indigo-600 text-white text-xs rounded">6</span></span>
                        <span className="text-xs text-gray-400 flex items-center gap-1.5">Cloud API <span className="px-1.5 py-0.5 bg-gray-200 text-gray-400 text-xs rounded">0</span></span>
                        <span className="text-xs text-gray-400 flex items-center gap-1.5">Edge SDK <span className="px-1.5 py-0.5 bg-gray-200 text-gray-400 text-xs rounded">0</span></span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* State 2 - Hovered */}
                <div className="rounded-2xl px-12 py-16" style={{ backgroundColor: '#E8EAF6' }}>
                  <div className="max-w-3xl mx-auto space-y-3">
                    {/* Global Navigation */}
                    <div className="bg-white rounded-lg px-6 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-1"><span className="text-indigo-600 text-lg">●</span><span className="text-gray-800 font-medium text-sm">cochl.</span></div>
                      <div className="flex items-center gap-6">
                        <span className="text-xs text-gray-500">Projects</span>
                        <span className="text-xs font-semibold text-gray-900 relative">Custom Sound<span className="absolute -bottom-1 left-0 w-full h-px bg-gray-400"></span></span>
                        <span className="text-xs text-gray-400">Usage</span>
                        <span className="text-xs text-gray-400">Billing</span>
                        <span className="text-xs text-gray-400">Organization</span>
                        <div className="flex items-center gap-2">
                          <Bell className="w-4 h-4 text-gray-600" />
                          <div className="w-5 h-5 bg-indigo-600 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    {/* Projects Section */}
                    <div className="bg-gray-100 rounded-lg px-6 py-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-base font-semibold text-gray-900">Projects</h3>
                        <button className="px-3 py-1.5 bg-indigo-600 text-white text-xs rounded flex items-center gap-1 font-medium">
                          <span>+</span> New project
                        </button>
                      </div>
                      <div className="flex items-center gap-5">
                        <span className="text-xs text-gray-900 font-semibold flex items-center gap-1.5">All <span className="px-1.5 py-0.5 bg-indigo-600 text-white text-xs rounded">6</span></span>
                        <span className="text-xs text-gray-400 flex items-center gap-1.5">Cloud API <span className="px-1.5 py-0.5 bg-gray-200 text-gray-400 text-xs rounded">0</span></span>
                        <span className="text-xs text-gray-400 flex items-center gap-1.5">Edge SDK <span className="px-1.5 py-0.5 bg-gray-200 text-gray-400 text-xs rounded">0</span></span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* State 3 - Pressed/Selected */}
                <div className="rounded-2xl px-12 py-16" style={{ backgroundColor: '#E8EAF6' }}>
                  <div className="max-w-3xl mx-auto space-y-3">
                    {/* Global Navigation */}
                    <div className="bg-white rounded-lg px-6 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-1"><span className="text-indigo-600 text-lg">●</span><span className="text-gray-800 font-medium text-sm">cochl.</span></div>
                      <div className="flex items-center gap-6">
                        <span className="text-xs text-gray-500">Projects</span>
                        <span className="text-xs font-semibold text-gray-900 relative">Custom Sound<span className="absolute -bottom-1 left-0 w-full h-px bg-gray-400"></span></span>
                        <span className="text-xs text-gray-400">Usage</span>
                        <span className="text-xs text-gray-400">Billing</span>
                        <span className="text-xs text-gray-400">Organization</span>
                        <div className="flex items-center gap-2">
                          <Bell className="w-4 h-4 text-gray-600" />
                          <div className="w-5 h-5 bg-indigo-600 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    {/* Projects Section */}
                    <div className="bg-gray-100 rounded-lg px-6 py-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-base font-semibold text-gray-900">Projects</h3>
                        <button className="px-3 py-1.5 bg-indigo-600 text-white text-xs rounded flex items-center gap-1 font-medium">
                          <span>+</span> New project
                        </button>
                      </div>
                      <div className="flex items-center gap-5">
                        <span className="text-xs text-gray-900 font-semibold flex items-center gap-1.5 border-b-2 border-indigo-600 pb-1">All <span className="px-1.5 py-0.5 bg-indigo-600 text-white text-xs rounded">6</span></span>
                        <span className="text-xs text-gray-400 flex items-center gap-1.5">Cloud API <span className="px-1.5 py-0.5 bg-gray-200 text-gray-400 text-xs rounded">0</span></span>
                        <span className="text-xs text-gray-400 flex items-center gap-1.5">Edge SDK <span className="px-1.5 py-0.5 bg-gray-200 text-gray-400 text-xs rounded">0</span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ol className="list-decimal list-inside space-y-3 text-sm text-gray-900 mb-12">
                <li>Enabled</li>
                <li>Hovered (Font weight changed from Regular to Bold)</li>
                <li>Pressed or selected (Identical to the hovered state)</li>
              </ol>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Measurement</h2>
              
              {/* Measurement 1 - Global Navigation */}
              <div className="rounded-2xl p-8 mb-6 relative overflow-hidden" style={{ backgroundColor: '#F8F8FC' }}>
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="relative">
                  <div className="text-center text-xs text-gray-600 mb-4">1200px, middle aligned/ Device width</div>
                  <div className="flex items-center">
                    <span className="text-xs text-gray-600 mr-2">66px</span>
                    <div className="flex-1 bg-gray-900 rounded px-6 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-1"><span className="text-indigo-400 text-lg">●</span><span className="text-white font-medium text-sm">cochl.</span></div>
                      <div className="flex items-center gap-6">
                        <span className="text-xs text-white font-medium">Projects</span>
                        <span className="text-xs text-gray-400 bg-red-400/50 px-1">Usage</span>
                        <span className="text-xs text-gray-400 bg-red-400/50 px-1">Billing</span>
                        <span className="text-xs text-gray-400 bg-red-400/50 px-1">Organization</span>
                        <div className="flex items-center gap-2">
                          <Bell className="w-4 h-4 text-gray-400" />
                          <div className="w-5 h-5 bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center ml-2">
                      <span className="text-xs text-gray-600">17px</span>
                      <span className="text-xs text-gray-600">17px</span>
                    </div>
                  </div>
                  <div className="flex justify-center gap-32 mt-2">
                    <span className="text-xs text-gray-600">50px</span>
                    <span className="text-xs text-gray-600">26px</span>
                  </div>
                </div>
              </div>

              {/* Table 1 - Global Navigation Specs */}
              <div className="border border-gray-200 rounded-lg overflow-hidden mb-12">
                <div className="grid grid-cols-2 bg-gray-50 px-6 py-3 text-sm font-medium text-gray-900">
                  <div>Attribute</div>
                  <div>Value</div>
                </div>
                {[
                  ["Container width", "Device width/1920px, middle aligned"],
                  ["Container height", "66px"],
                  ["Container shape", "0 corner radius"],
                  ["Icon size", "25px"],
                  ["Small badge size", "7px"],
                  ["Top padding", "17px"],
                  ["Bottom padding", "17px"],
                  ["Padding between label text and label text", "50px"],
                ].map(([attr, val], i) => (
                  <div key={i} className="grid grid-cols-2 px-6 py-4 border-t border-gray-200 text-sm">
                    <div className="text-gray-900">{attr}</div>
                    <div className="text-gray-500">{val}</div>
                  </div>
                ))}
              </div>

              {/* Measurement 2 - Projects Section */}
              <div className="rounded-2xl p-8 mb-6 relative overflow-hidden" style={{ backgroundColor: '#F8F8FC' }}>
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="relative">
                  <div className="flex items-start">
                    <span className="text-xs text-gray-600 mr-2 mt-2">80px</span>
                    <div className="flex-1">
                      <div className="bg-red-200 rounded-t-lg h-16 mb-1"></div>
                      <div className="text-center font-semibold text-gray-900 py-2">Project Name</div>
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-gray-600 mr-1">40px</span>
                        <div className="flex-1 bg-red-200 rounded h-8 flex items-center px-4 gap-4">
                          <span className="text-xs flex items-center gap-1">All <span className="px-1.5 py-0.5 bg-indigo-600 text-white text-xs rounded">6</span></span>
                          <span className="text-xs text-gray-500">Cloud API <span className="px-1 bg-gray-300 rounded text-xs">0</span></span>
                          <span className="text-xs text-gray-500">Edge SDK <span className="px-1 bg-gray-300 rounded text-xs">0</span></span>
                        </div>
                      </div>
                      <div className="flex justify-start gap-4 mt-1 ml-8">
                        <span className="text-xs text-red-400">24</span>
                        <span className="text-xs text-red-400">43</span>
                        <span className="text-xs text-red-400">43</span>
                        <span className="text-xs text-red-400">12</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Table 2 - Projects Section Specs */}
              <div className="border border-gray-200 rounded-lg overflow-hidden mb-8">
                <div className="grid grid-cols-2 bg-gray-50 px-6 py-3 text-sm font-medium text-gray-900">
                  <div>Attribute</div>
                  <div>Value</div>
                </div>
                {[
                  ["Container width", "Device width/1920px, middle aligned"],
                  ["Container height", "206px"],
                  ["Container shape", "0 corner radius"],
                  ["Active indicator height", "2px"],
                  ["Active indicator width", "65px"],
                  ["Active indicator shape", "0 corner radius"],
                  ["Large badge size", "24x34"],
                  ["Large badge shape", "74 corner radius"],
                  ["Top padding", "80px"],
                  ["Bottom padding", "40px"],
                  ["Padding between active indicator and label text", "4px"],
                ].map(([attr, val], i) => (
                  <div key={i} className="grid grid-cols-2 px-6 py-4 border-t border-gray-200 text-sm">
                    <div className="text-gray-900">{attr}</div>
                    <div className="text-gray-500">{val}</div>
                  </div>
                ))}
              </div>
            </>
          )}
          {activeTab === "Usage" && (
            <>
              {/* On this page */}
              <div className="mb-12">
                <p className="text-xs text-gray-900 mb-2">On this page</p>
                <ul className="list-disc list-inside space-y-1 text-base text-gray-900">
                  <li>Interaction & Style</li>
                  <li>Anatomy</li>
                  <li>Visual indicators</li>
                </ul>
              </div>

              {/* Interaction & Style */}
              <h2 className="text-2xl font-medium text-gray-900 mb-6">Interaction & Style</h2>
              
              {/* Touch Interaction */}
              <div className="rounded-2xl h-80 mb-6" style={{ backgroundColor: '#EBEDFC' }}></div>
              <div className="mb-12">
                <p className="text-base font-medium text-gray-900 mb-2">Touch Interaction</p>
                <ul className="list-disc list-inside space-y-1 text-base text-gray-700 ml-4">
                  <li>When a navigation item is tapped, an active indicator smoothly appears to confirm the selection.</li>
                  <li>A ripple effect animates through the indicator, providing visual feedback.</li>
                </ul>
              </div>

              {/* Cursor Interaction */}
              <div className="rounded-2xl h-80 mb-6" style={{ backgroundColor: '#EBEDFC' }}></div>
              <div className="mb-12">
                <p className="text-base font-medium text-gray-900 mb-2">Cursor Interaction</p>
                <ul className="list-disc list-inside space-y-1 text-base text-gray-700 ml-4">
                  <li>On hover, a subtle version of the active indicator appears, signaling that the item is interactive.</li>
                  <li>The indicator transitions from an outlined to a filled style.</li>
                </ul>
              </div>

              {/* Anatomy */}
              <h2 className="text-2xl font-medium text-gray-900 mb-6">Anatomy</h2>
              <div className="rounded-2xl p-8 mb-6 relative" style={{ backgroundColor: '#F5F5F5' }}>
                {/* Annotation 1 - Left Container */}
                <div className="absolute left-16 top-1/2 -translate-y-1/2 flex items-center">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm font-medium text-gray-600">1</div>
                  <div className="w-8 h-px bg-gray-400"></div>
                </div>
                
                {/* Annotation 3 - Logo */}
                <div className="absolute left-1/3 top-4 flex flex-col items-center">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm font-medium text-gray-600">3</div>
                  <div className="w-px h-6 bg-gray-400"></div>
                </div>
                
                {/* Annotation 4 - Nav Items */}
                <div className="absolute left-1/2 top-4 flex flex-col items-center">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm font-medium text-gray-600">4</div>
                  <div className="w-px h-6 bg-gray-400"></div>
                </div>
                
                {/* Annotation 5 - Icons */}
                <div className="absolute right-1/4 top-4 flex flex-col items-center">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm font-medium text-gray-600">5</div>
                  <div className="w-px h-6 bg-gray-400"></div>
                </div>

                {/* Dark Navigation Container */}
                <div className="bg-gray-900 rounded-lg mx-20 mt-12 overflow-hidden">
                  {/* Top Nav Bar */}
                  <div className="px-6 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="text-indigo-400 text-lg">●</span>
                      <span className="text-white font-medium text-sm">cochl.</span>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="text-xs text-white font-medium">Projects</span>
                      <span className="text-xs text-gray-400">Usage</span>
                      <span className="text-xs text-gray-400">Billing</span>
                      <span className="text-xs text-gray-400">Organization</span>
                      <div className="flex items-center gap-2">
                        <Bell className="w-4 h-4 text-gray-400" />
                        <div className="w-5 h-5 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Projects Section */}
                  <div className="px-6 py-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-white">Project Name</h3>
                      <button className="px-3 py-1.5 bg-indigo-600 text-white text-xs rounded flex items-center gap-1">
                        <span>+</span> Add new project
                      </button>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="text-xs text-gray-400 flex items-center gap-1">All <span className="px-1.5 py-0.5 bg-gray-700 text-gray-400 text-xs rounded">6</span></span>
                      <span className="text-xs text-gray-400 flex items-center gap-1">Cloud API <span className="px-1.5 py-0.5 bg-gray-700 text-gray-400 text-xs rounded">0</span></span>
                      <span className="text-xs text-white font-medium flex items-center gap-1 border-b-2 border-indigo-600 pb-1">Edge SDK <span className="px-1.5 py-0.5 bg-indigo-600 text-white text-xs rounded">1</span></span>
                    </div>
                  </div>
                </div>

                {/* Annotation 2 - Active Indicator */}
                <div className="absolute left-1/2 bottom-8 flex flex-col items-center -translate-x-1/2">
                  <div className="w-px h-6 bg-gray-400"></div>
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm font-medium text-gray-600">2</div>
                </div>

                {/* Annotation 1 - Right Container */}
                <div className="absolute right-8 top-1/2 -translate-y-1/2 flex items-center">
                  <div className="w-8 h-px bg-gray-400"></div>
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm font-medium text-gray-600">1</div>
                </div>
              </div>
              <div className="mb-12 space-y-1 text-base text-gray-900">
                <p>1. Container</p>
                <p>2. Active indicator</p>
                <p>3. Large badge & Large badge label</p>
                <p>4. Label text</p>
                <p>5. Icon</p>
              </div>

              {/* Visual indicators */}
              <h2 className="text-2xl font-medium text-gray-900 mb-6">Visual indicators</h2>
              <div className="grid grid-cols-2 gap-6 mb-6">
                {/* Do Example */}
                <div className="rounded-t-2xl overflow-hidden">
                  <div className="h-80 flex items-center justify-center" style={{ backgroundColor: '#EBEDFC' }}>
                    <div className="bg-white rounded-lg shadow-lg w-64 overflow-hidden">
                      <div className="flex items-center justify-around py-3 border-t border-gray-100">
                        <div className="flex flex-col items-center gap-1">
                          <div className="w-6 h-5 border border-gray-300 rounded-sm"></div>
                          <span className="text-xs text-gray-400">Projects</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <div className="w-6 h-5 bg-indigo-100 border border-indigo-300 rounded-sm relative">
                            <div className="absolute right-0 top-1 w-2 h-3 bg-indigo-600 rounded-sm"></div>
                          </div>
                          <span className="text-xs text-indigo-600 font-medium">Devices</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <div className="w-5 h-5 border border-gray-300 rounded-full flex items-center justify-center">
                            <div className="w-3 h-3 border border-gray-300 rounded-full"></div>
                          </div>
                          <span className="text-xs text-gray-400">Settings</span>
                        </div>
                      </div>
                      <div className="flex justify-center pb-2">
                        <div className="w-24 h-1 bg-black rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-500 py-3 px-4 flex items-center gap-2 rounded-b-2xl">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    <span className="text-white font-medium">Do</span>
                  </div>
                </div>
                {/* Don't Example */}
                <div className="rounded-t-2xl overflow-hidden">
                  <div className="h-80 flex items-center justify-center" style={{ backgroundColor: '#EBEDFC' }}>
                    <div className="bg-white rounded-lg shadow-lg w-64 overflow-hidden">
                      <div className="flex items-center justify-around py-3 border-t border-gray-100">
                        <div className="flex flex-col items-center gap-1">
                          <div className="w-6 h-5 border border-gray-300 rounded-sm"></div>
                          <span className="text-xs text-gray-400">Projects</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <div className="w-6 h-5 border border-indigo-300 rounded-sm relative">
                            <div className="absolute right-0 top-1 w-2 h-3 border border-indigo-600 rounded-sm"></div>
                          </div>
                          <span className="text-xs text-indigo-600 font-medium">Devices</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <div className="w-5 h-5 border border-gray-300 rounded-full flex items-center justify-center">
                            <div className="w-3 h-3 border border-gray-300 rounded-full"></div>
                          </div>
                          <span className="text-xs text-gray-400">Settings</span>
                        </div>
                      </div>
                      <div className="flex justify-center pb-2">
                        <div className="w-24 h-1 bg-black rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-red-500 py-3 px-4 flex items-center gap-2 rounded-b-2xl">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                    <span className="text-white font-medium">Don't</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <p className="text-base text-gray-900">Use a filled icon for the selected navigation destination</p>
                <p className="text-base text-gray-900">Don't use outlined icons on selected navigation items</p>
              </div>
            </>
          )}
        </div>
        <div className="text-left px-8 py-6 text-gray-400 text-sm border-t border-gray-100">© 2026 Cochl Inc.</div>
      </div>
    </div>
  );
}

// Note: NavDetail and TabsDetail components should be imported from separate files
// or included here for a complete implementation
