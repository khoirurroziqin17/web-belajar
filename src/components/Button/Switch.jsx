import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function SwitchButton({ defaultState, children }) {
  const [enabled, setEnabled] = useState(defaultState);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? "bg-teal-600" : "bg-teal-700"
      } relative inline-flex h-6 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span className="sr-only">Use setting</span>
      <div
        aria-hidden="true"
        className={`${
          enabled ? "translate-x-6" : "translate-x-0"
        } pointer-events-none flex justify-center items-center h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
      >
        {children}
      </div>
    </Switch>
  );
}
