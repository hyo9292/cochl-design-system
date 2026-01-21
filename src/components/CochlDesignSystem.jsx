// CochlDesignSystem.jsx
// Main component file for Cochl Design System
// Save this file to: src/components/CochlDesignSystem.jsx

import { useState } from 'react';
import { Search, Home, Layers, Palette, Plus, ChevronUp, ChevronRight, Bell, ExternalLink } from 'lucide-react';

// Navigation data structure
const navData = [
  { category: "Disclosure", items: ["Navigation", "Tabs"], expanded: true },
  { category: "Feedback", items: ["Alert", "Progress", "Skeleton"], expanded: false },
  { category: "Overlay", items: ["Menu", "Tooltip", "Modal"], expanded: false },
  { category: "Data Display", items: ["Card", "Chip", "Table"], expanded: false },
  { category: "Form", items: ["Checkbox", "Button", "Input Field"], expanded: false },
  { category: "Analytics", items: ["Heatmap", "PieChart"], expanded: false },
];

// Component cards for overview
const cards = {
  Disclosure: [
    { name: "Tabs", desc: "Categorizing items", p: "tabs" },
    { name: "Navigation bar", desc: "Menu types for navigation", p: "nav" }
  ],
  Feedback: [
    { name: "Alert", desc: "Alert modals", p: "alert" },
    { name: "Progress", desc: "Loading styles", p: "progress" }
  ],
  Overlay: [
    { name: "Menu", desc: "Menu modals", p: "menu" },
    { name: "Modal", desc: "Modal dialogs", p: "modal" }
  ],
  "Data Display": [
    { name: "Card", desc: "Wrapper component", p: "card" },
    { name: "Table", desc: "Data tables", p: "table" }
  ],
  Form: [
    { name: "Button", desc: "Button styles", p: "button" },
    { name: "Input Field", desc: "Text input", p: "input" }
  ],
  Analytics: [
    { name: "Heatmap", desc: "Visual data", p: "heatmap" },
    { name: "PieChart", desc: "Proportional data", p: "piechart" }
  ],
};

// Preview component for thumbnails
const Preview = ({ t }) => {
  const previews = {
    tabs: (
      <div className="flex flex-col items-center justify-center h-full bg-indigo-50">
        <div className="flex gap-6 mb-3">
          {["Upload", "Overview", "Analytics"].map((x, i) => (
            <span key={x} className={`text-xs pb-2 ${i === 2 ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}>
              {x}
            </span>
          ))}
        </div>
      </div>
    ),
    nav: (
      <div className="flex items-center justify-center h-full bg-indigo-50">
        <div className="w-full px-4">
          <div className="flex items-center justify-center gap-4 pb-2">
            {["Projects", "Usage", "Billing"].map(x => (
              <span key={x} className="text-xs text-gray-600">{x}</span>
            ))}
            <Bell className="w-3 h-3" />
          </div>
          <div className="h-px bg-gray-200"></div>
        </div>
      </div>
    ),
    alert: (
      <div className="flex flex-col gap-2 items-center justify-center h-full bg-indigo-50">
        <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded px-2 py-1 text-xs text-blue-700">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>Key reset
        </div>
        <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded px-2 py-1 text-xs text-red-700">
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>Error
        </div>
      </div>
    ),
    progress: (
      <div className="flex flex-col items-center justify-center h-full bg-indigo-50 gap-3">
        <div className="w-32 h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div className="w-3/4 h-full bg-indigo-600"></div>
        </div>
        <div className="w-8 h-8 border-2 border-gray-200 border-t-indigo-600 rounded-full animate-spin"></div>
      </div>
    ),
    menu: (
      <div className="flex items-center justify-center h-full bg-indigo-50">
        <div className="bg-white rounded-lg shadow p-3 w-40">
          <div className="flex justify-between mb-2">
            <span className="text-xs font-medium">Notifications</span>
            <span className="text-xs text-indigo-500">Mark read</span>
          </div>
        </div>
      </div>
    ),
    modal: (
      <div className="flex items-center justify-center h-full bg-indigo-50">
        <div className="bg-white rounded-lg shadow p-4 w-40">
          <div className="text-xs font-medium mb-1">Add member</div>
          <div className="flex gap-2">
            <button className="flex-1 py-1 border text-xs rounded">Cancel</button>
            <button className="flex-1 py-1 bg-indigo-500 text-white text-xs rounded">Add</button>
          </div>
        </div>
      </div>
    ),
    card: (
      <div className="flex items-center justify-center h-full bg-indigo-50">
        <div className="bg-white rounded-lg border-2 border-indigo-100 p-3 w-32">
          <div className="text-xs text-indigo-600 font-medium">Cloud API</div>
          <div className="text-sm font-semibold text-gray-900">Project</div>
        </div>
      </div>
    ),
    table: (
      <div className="flex items-center justify-center h-full bg-indigo-50 p-2">
        <div className="w-full text-xs">
          <div className="grid grid-cols-3 border-b pb-1 mb-1">
            <span className="text-gray-500">Date</span>
            <span className="text-gray-500">Tag</span>
            <span className="text-gray-500">Type</span>
          </div>
          <div className="grid grid-cols-3 py-1">
            <span>12.29</span>
            <span className="text-indigo-500">Whistle</span>
            <span className="text-gray-400">mp3</span>
          </div>
        </div>
      </div>
    ),
    button: (
      <div className="flex flex-col items-center justify-center h-full bg-indigo-50 gap-2">
        <button className="px-4 py-2 border-2 border-indigo-500 text-indigo-600 rounded text-xs">Secondary</button>
        <button className="px-4 py-2 bg-indigo-500 text-white rounded text-xs">Primary</button>
      </div>
    ),
    input: (
      <div className="flex items-center justify-center h-full bg-indigo-50">
        <div className="bg-white p-3 rounded shadow w-32">
          <div className="text-xs text-gray-400 mb-1">Project name</div>
          <div className="border rounded px-2 py-1 text-xs text-gray-300">Enter name...</div>
        </div>
      </div>
    ),
    heatmap: (
      <div className="flex items-center justify-center h-full bg-indigo-50">
        <div className="grid grid-cols-7 gap-0.5">
          {[0,1,2,1,3,2,1,1,2,3,2,1,3,2].map((l, i) => (
            <div key={i} className={`w-3 h-3 rounded-sm ${['bg-indigo-100','bg-indigo-200','bg-indigo-300','bg-indigo-400'][l]}`}></div>
          ))}
        </div>
      </div>
    ),
    piechart: (
      <div className="flex items-center justify-center h-full bg-indigo-50">
        <svg viewBox="0 0 100 100" className="w-14 h-14">
          <circle cx="50" cy="50" r="45" fill="#c7d2fe"/>
          <path d="M50,50 L50,5 A45,45 0 0,1 95,50 Z" fill="#6366f1"/>
          <path d="M50,50 L95,50 A45,45 0 0,1 75,90 Z" fill="#14b8a6"/>
        </svg>
      </div>
    ),
  };
  return previews[t] || <div className="h-full bg-gray-100"></div>;
};

// Icon Navigation Rail
const IconNav = ({ setPage }) => (
  <div className="w-16 bg-white flex flex-col items-center py-4 gap-8 border-r border-gray-100 flex-shrink-0">
    <Search className="w-5 h-5 text-gray-600" />
    <div className="flex flex-col items-center gap-1 cursor-pointer" onClick={() => setPage("overview")}>
      <Home className="w-5 h-5 text-gray-500" />
      <span className="text-xs text-gray-500">Home</span>
    </div>
    <div className="flex flex-col items-center gap-1">
      <Layers className="w-5 h-5 text-gray-500" />
      <span className="text-xs text-gray-500">Foundation</span>
    </div>
    <div className="flex flex-col items-center gap-1">
      <Palette className="w-5 h-5 text-gray-500" />
      <span className="text-xs text-gray-500">Style</span>
    </div>
    <div className="flex flex-col items-center gap-1">
      <Plus className="w-5 h-5 text-indigo-600" />
      <span className="text-xs text-indigo-600">Components</span>
    </div>
  </div>
);

// Sidebar Navigation
const Sidebar = ({ nav, toggle, page, setPage }) => (
  <div className="w-52 bg-gray-50 overflow-y-auto flex-shrink-0">
    <div 
      className={`px-4 py-3 text-sm cursor-pointer ${page === "overview" ? "text-indigo-600 bg-gray-100" : "text-gray-500 hover:bg-gray-100"}`} 
      onClick={() => setPage("overview")}
    >
      Component overview
    </div>
    {nav.map((s, i) => (
      <div key={s.category}>
        <div className="flex items-center justify-between px-4 py-2.5 cursor-pointer hover:bg-gray-100" onClick={() => toggle(i)}>
          <span className={`text-sm ${s.category === "Disclosure" && (page === "navigation" || page === "tabs") ? "text-indigo-600" : "text-gray-600"}`}>
            {s.category}
          </span>
          {s.expanded ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronRight className="w-4 h-4 text-gray-400" />}
        </div>
        {s.expanded && s.items.map(item => (
          <div 
            key={item} 
            className={`px-8 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
              (item === "Navigation" && page === "navigation") || (item === "Tabs" && page === "tabs") 
                ? "text-indigo-600 bg-gray-100" 
                : "text-gray-500"
            }`} 
            onClick={() => setPage(item.toLowerCase())}
          >
            {item}
          </div>
        ))}
      </div>
    ))}
  </div>
);

// Overview Page Component
const Overview = ({ setPage }) => (
  <div className="flex-1 overflow-y-auto">
    <div className="flex gap-4 p-6">
      <div className="w-56 h-64 bg-gray-50 rounded-lg flex items-end p-6">
        <h1 className="text-3xl font-medium text-gray-900">Components</h1>
      </div>
      <div className="flex-1 h-64 bg-gray-900 rounded-lg p-4">
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded px-3 py-1.5 text-xs text-blue-700">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>Project key reset
          </div>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded text-sm">Button</button>
          <span className="px-2 py-0.5 bg-indigo-500 text-white rounded text-xs">Chip</span>
        </div>
        <div className="mt-4 bg-gray-700 rounded-lg px-4 py-3 text-gray-400 text-sm">Name or email</div>
        <div className="mt-3 h-2 bg-indigo-600 rounded-full"></div>
      </div>
    </div>
    <div className="px-6 pb-8">
      {Object.entries(cards).map(([cat, list]) => (
        <div key={cat} className="mb-8">
          <h2 className="text-xl font-medium text-gray-900 mb-4">{cat}</h2>
          <div className="grid grid-cols-3 gap-4">
            {list.map(c => (
              <div 
                key={c.name} 
                className="bg-gray-50 border border-gray-100 rounded-lg overflow-hidden cursor-pointer hover:shadow-md" 
                onClick={() => { 
                  if (c.name === "Navigation bar") setPage("navigation"); 
                  if (c.name === "Tabs") setPage("tabs"); 
                }}
              >
                <div className="h-28"><Preview t={c.p} /></div>
                <div className="p-3">
                  <h3 className="text-sm font-medium text-gray-800">{c.name}</h3>
                  <p className="text-xs text-gray-500">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    <div className="text-center py-4 text-gray-400 text-sm border-t">© 2026 Cochl Inc.</div>
  </div>
);

// Main Export Component
export default function CochlDesignSystem() {
  const [nav, setNav] = useState(navData);
  const [page, setPage] = useState("overview");
  
  const toggle = (i) => setNav(nav.map((n, idx) => idx === i ? { ...n, expanded: !n.expanded } : n));

  return (
    <div className="flex h-screen bg-white" style={{ fontFamily: "system-ui, sans-serif" }}>
      <IconNav setPage={setPage} />
      <Sidebar nav={nav} toggle={toggle} page={page} setPage={setPage} />
      {page === "overview" && <Overview setPage={setPage} />}
      {page === "navigation" && <NavDetail />}
      {page === "tabs" && <TabsDetail />}
    </div>
  );
}

// Note: NavDetail and TabsDetail components should be imported from separate files
// or included here for a complete implementation
