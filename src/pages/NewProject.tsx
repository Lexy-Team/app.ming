import LanguageList from "@/components/LanguagesList";
import { GitBranchIcon } from "lucide-react";
import languages from "../utils/Languages.json";
import frameworks from "../utils/Frameworks.json";
import { useState } from "react";

export default function NewProject() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [selectedFramework, setSelectedFramework] = useState({});

  return (
    <div className="mt-8 container mx-auto max-w-7xl">
      <p className="text-lg font-medium">
        Empower Your Development {"->"} Go Production!
      </p>
      <p className="text-gray-500">
        Please follow the steps to configure your Project and deploy it.
      </p>

      <div className="flex gap-3 items-start mt-4">
        <div>
          <div className="border-2 p-2 px-3 pb-4">
            <p className="font-semibold">🔩 Git Configuration</p>

            <div>
              <div className="my-2 flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                >
                  <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                </svg>
                <p>Repo URL</p>
              </div>
              <input
                type="text"
                placeholder="https://github.com/Lexy-Team/app.ming.git"
                className="border w-[20vw] px-1"
              />

              <div className="my-2 flex items-center gap-1">
                <GitBranchIcon size={16} />
                <p>Branch</p>
              </div>
              <input
                type="text"
                placeholder="main"
                className="border w-[20vw] px-1"
              />
            </div>
          </div>

          <ol className="relative border-s border-gray-200 dark:border-gray-700 mt-4">
            <li className="mb-4 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-medium leading-none">
                🦄 Configure Project
              </time>
            </li>
            <li className="mb-4 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-medium leading-none text-gray-400 dark:text-gray-500">
                🚀 Deploy
              </time>
            </li>
          </ol>

          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="16"
              height="16"
            >
              <path d="M0 2.75C0 1.784.784 1 1.75 1H5c.55 0 1.07.26 1.4.7l.9 1.2a.25.25 0 0 0 .2.1h6.75c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25Zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25H7.5c-.55 0-1.07-.26-1.4-.7l-.9-1.2a.25.25 0 0 0-.2-.1Z"></path>
            </svg>
            <p className="text-gray-500">./</p>
          </div>
        </div>
        <div className="flex-1 border-2 p-2 pb-3">
          <p className="font-semibold">📜 Project Information</p>

          <p className="my-2">Project Name</p>
          <input type="text" className="border w-[100%] px-1" placeholder="Some Awesome Name"/>

          <p className="my-2">Language</p>
          <LanguageList
            languages={languages}
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
          />

          <p className="my-2">Framework Preset</p>
          <LanguageList
            frameworks={frameworks}
            selectedLanguage={selectedLanguage}
            selectedFramework={selectedFramework}
            setSelectedFramework={setSelectedFramework}
          />

          <p className="my-2">Root Directory</p>
          <input
            type="text"
            placeholder="./"
            className="border w-[100%] px-1"
          />
        </div>
      </div>
    </div>
  );
}
