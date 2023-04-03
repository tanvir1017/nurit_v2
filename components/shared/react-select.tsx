import { TagValueOption } from "@/util/types/types";
import React, { KeyboardEventHandler } from "react";
import { BsInfoCircle } from "react-icons/bs";
import CreatableSelect from "react-select/creatable";
import { TextInputLabel } from "./inputLabel/inputLabel";

const components = {
  DropdownIndicator: null,
};

const createOption = (label: string) => ({
  label,
  value: label,
});

export default function ReactSelect({
  inputValue,
  setInputValue,
  value,
  setValue,
}: any) {
  const handleKeyDown: KeyboardEventHandler = (event) => {
    if (!inputValue) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
        setValue((prev: any) => [...prev, createOption(inputValue)]);
        setInputValue("");
        event.preventDefault();
    }
  };

  return (
    <div>
      <TextInputLabel
        labelTex="ট্যাগস এড করুন"
        type="text"
        nameText="Add tags"
        requiredType
        value={JSON.stringify(value) || ""}
      />
      <CreatableSelect
        theme={(theme) => ({
          ...theme,
          borderRadius: 5,

          colors: {
            ...theme.colors,
            primary: "#ff2c45",
          },
          spacing: {
            ...theme.spacing,
            baseUnit: 7,
          },
        })}
        components={components}
        inputValue={inputValue}
        isClearable
        isMulti
        menuIsOpen={false}
        onChange={(newValue: React.SetStateAction<readonly TagValueOption[]>) =>
          setValue(newValue)
        }
        onInputChange={(newValue: React.SetStateAction<string>) =>
          setInputValue(newValue)
        }
        onKeyDown={handleKeyDown}
        placeholder="ব্লগ সম্পর্কিত কিছু ট্যাগস প্রদান করুন"
        value={value}
      />
      <p className="mt-2 italic font-HSRegular flex items-center space-x-2 text-xs text-gray-300">
        <BsInfoCircle />
        <span>ট্যাগস গুলো অবশ্যই ব্লগ সম্পর্কিত হতে হবে।</span>
      </p>
    </div>
  );
}
