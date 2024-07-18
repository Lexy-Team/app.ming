"use client";

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useEffect } from "react";

export default function LanguageList(props) {
  if (props?.languages?.length > 0) {
    const { selectedLanguage, setSelectedLanguage, languages } = props;
    return (
      <Listbox value={selectedLanguage} onChange={setSelectedLanguage}>
        <div className="relative mt-2">
          <ListboxButton className="relative w-full cursor-default bg-white text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none p-1 px-2 focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
            <span className="flex items-center">
              <img
                alt=""
                src={selectedLanguage.avatar}
                className="h-4 w-4 flex-shrink-0 rounded-full"
              />
              <span className="ml-2 block truncate">
                {selectedLanguage.name}
              </span>
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
              <ChevronUpDownIcon
                aria-hidden="true"
                className="h-5 w-5 text-gray-400"
              />
            </span>
          </ListboxButton>

          <ListboxOptions
            transition
            className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
          >
            {languages.map((person) => (
              <ListboxOption
                key={person.id}
                value={person}
                className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
              >
                <div className="flex items-center">
                  <img
                    alt=""
                    src={person.avatar}
                    className="h-5 w-5 flex-shrink-0 rounded-full"
                  />
                  <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                    {person.name}
                  </span>
                </div>

                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                  <CheckIcon aria-hidden="true" className="h-5 w-5" />
                </span>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    );
  } else {
    const {
      selectedFramework,
      setSelectedFramework,
      frameworks,
      selectedLanguage,
    } = props;

    useEffect(() => {
      setSelectedFramework(frameworks[selectedLanguage?.name][0]);
    }, []);

    return (
      <Listbox value={selectedFramework} onChange={setSelectedFramework}>
        <div className="relative mt-2">
          <ListboxButton className="relative w-full cursor-default bg-white text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none p-1 px-2 focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
            <span className="flex items-center">
              <img
                alt=""
                src={selectedFramework?.avatar}
                className="h-4 w-4 flex-shrink-0 rounded-full"
              />
              <span className="ml-2 block truncate">
                {selectedFramework?.name}
              </span>
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
              <ChevronUpDownIcon
                aria-hidden="true"
                className="h-5 w-5 text-gray-400"
              />
            </span>
          </ListboxButton>

          <ListboxOptions
            transition
            className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
          >
            {/* {console.log(frameworks, selectedLanguage)} */}
            {frameworks[selectedLanguage?.name]?.map((framework) => (
              <ListboxOption
                key={framework.id}
                value={framework}
                className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
              >
                <div className="flex items-center">
                  <img
                    alt=""
                    src={framework.avatar}
                    className="h-5 w-5 flex-shrink-0 rounded-full"
                  />
                  <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                    {framework.name}
                  </span>
                </div>

                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                  <CheckIcon aria-hidden="true" className="h-5 w-5" />
                </span>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    );
  }
}
