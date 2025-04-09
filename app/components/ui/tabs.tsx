"use client"

import * as React from "react"

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string;
  className?: string;
}

interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

interface TabsTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  value: string;
  className?: string;
}

interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  className?: string;
}

const TabsContext = React.createContext<{
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
} | null>(null);

export const Tabs = ({ defaultValue, children, className, ...props }: TabsProps) => {
  const [value, setValue] = React.useState(defaultValue || "");

  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div className={className} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

export const TabsList = ({ children, className, ...props }: TabsListProps) => {
  return (
    <div
      className={`flex space-x-1 border-b border-gray-200 ${className || ""}`}
      role="tablist"
      {...props}
    >
      {children}
    </div>
  );
};

export const TabsTrigger = ({ value, children, className, ...props }: TabsTriggerProps) => {
  const context = React.useContext(TabsContext);
  
  if (!context) {
    throw new Error("TabsTrigger must be used within a Tabs component");
  }
  
  const isActive = context.value === value;
  
  return (
    <button
      role="tab"
      aria-selected={isActive}
      className={`px-4 py-2 text-sm font-medium transition-all ${
        isActive
          ? "border-b-2 border-primary-600 text-primary-600"
          : "text-gray-500 hover:text-gray-700"
      } ${className || ""}`}
      onClick={() => context.setValue(value)}
      {...props}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({ value, children, className, ...props }: TabsContentProps) => {
  const context = React.useContext(TabsContext);
  
  if (!context) {
    throw new Error("TabsContent must be used within a Tabs component");
  }
  
  const isActive = context.value === value;
  
  if (!isActive) return null;
  
  return (
    <div
      role="tabpanel"
      className={`mt-4 ${className || ""}`}
      {...props}
    >
      {children}
    </div>
  );
}; 