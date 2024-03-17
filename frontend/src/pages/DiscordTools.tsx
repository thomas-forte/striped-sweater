import { ChangeEvent, useEffect, useState } from "react";
import { DocumentDuplicateIcon, CheckIcon } from "@heroicons/react/24/outline";
import { Page } from "../components/Page";

const toTz8661 = (date: Date) => {
  return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}T${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
};

export const DiscordTools = () => {
  const [time, setTime] = useState(toTz8661(new Date()));
  const [copied, setCopied] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setCopied("");
    }, 3000);
  }, [copied]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const timeInput = e.target?.value ?? "";
    setTime(timeInput);
  };

  return (
    <Page pageName="Discord Tools">
      <div className="flex align-center justify-around bg-blue-300 p-6 rounded-md">
        <input
          className="bg-blue-500 px-3 py-5 rounded-md text-white"
          type="datetime-local"
          value={time}
          onChange={handleInputChange}
        />
        <p className="bg-blue-500 px-3 py-5 rounded-md text-white flex">
          {`<t:${new Date(time).valueOf() / 1000}:F>`}
          <button
            className="ml-2"
            type="button"
            onClick={async () => {
              if ("clipboard" in navigator) {
                const txt = `<t:${new Date(time).valueOf() / 1000}:F>`;
                await navigator.clipboard.writeText(txt);
                setCopied(txt);
              }
            }}
          >
            {copied ? (
              <CheckIcon
                className="h-5 w-5 text-green-200"
                aria-hidden="true"
              />
            ) : (
              <DocumentDuplicateIcon
                className="h-5 w-5 animate-pulse"
                aria-hidden="true"
              />
            )}
          </button>
        </p>
      </div>
    </Page>
  );
};
