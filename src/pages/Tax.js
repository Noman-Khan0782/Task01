import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import Radio from "../component/Inputs/Radio";
import CheckBoxWrapper from "../component/wrapper/CheckBoxWrapper";
import Checkbox from "../component/Inputs/checkbox";
import { useFormik } from "formik";
import ErrorText from "../component/ErrorText/ErrorText";
import { taxSchema } from "../Schema";

export default function Tax() {
  const initialState = {
    percentInLetter: "",
    percentInNumber: "",
    selectItem: "specific",
    allBracelate: false,
    bracelate: [
      {
        label: "Jasinthe Bracelate",
        name: "jasintheBraclate",
        selected: false,
      },
      {
        label: "Jasinthe Bracelate 2",
        name: "jasintheBraclate2",
        selected: false,
      },
      {
        label: "Inspire Bracelate",
        name: "inspireBraclate",
        selected: false,
      },
    ],
    alQuestionItems: false,
    questioItems: [
      {
        label: "Zero amount item with question",
        name: "zeroAmount",
        selected: false,
      },
      {
        label: "Normal item with question",
        name: "normalItemQuestion",
        selected: false,
      },
      {
        label: "Normal item ",
        name: "normalItem",
        selected: false,
      },
    ],
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialState,
      validationSchema: taxSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });

  function handleSelectionAll(opt, category) {
    if (opt === "selected") {
      category.forEach((cat) => {
        values[cat].forEach((item) => (item.selected = true));
      });
    } else {
      category.forEach((cat) => {
        values[cat].forEach((item) => (item.selected = false));
      });
    }
  }

  function checkAllSelected(category) {
    let filtered = values[category].filter((item) => item.selected === false);
    if (filtered.length) {
      return false;
    } else {
      return true;
    }
  }

  function handleSingleCheckBox(e, categoryName) {
    if (e.target.checked) {
      e.target.checked = true;
      values[categoryName].forEach((item) => {
        if (item.name === e.target.name) {
          item.selected = true;
        }
      });
      checkAllSelected(categoryName);
    } else {
      values[categoryName].forEach((item) => {
        if (item.name === e.target.name) {
          item.selected = false;
        }
      });
      checkAllSelected(categoryName);
    }
  }

  return (
    <div className="w-screen pt-16 pb-10 flex justify-center items-center">
      <div className="w-[80%] mx-auto ">
        <div className="w-full flex justify-between items-center py-3">
          <h1 className="text-2xl font-semibold">Add Tax</h1>
          <IoCloseSharp className="text-3xl" />
        </div>
        <div className="flex justify-between gap-4 items-stretch w-[65%]">
          <div className="w-[65%]">
            <input
              type="text"
              name="percentInLetter"
              value={values.percentInLetter}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full py-2 min-h-[40px] border rounded-sm outline-none"
            />
            {touched.percentInLetter && errors.percentInLetter ? (
              <ErrorText text={errors.percentInLetter} />
            ) : null}
          </div>
          <div className="w-[35%]">
            <div className="w-full  rounded-sm border flex justify-end items-stretch">
              <input
                type="number"
                name="percentInNumber"
                value={values.percentInNumber}
                onBlur={handleBlur}
                onChange={handleChange}
                className="w-[90%] min-h-[40px] px-3 rounded-md outline-none border-none"
              />
              <div className=" px-3 py-2 text-gray-400">
                <h6 className="text-sm">%</h6>
              </div>
            </div>

            {touched.percentInNumber && errors.percentInNumber ? (
              <ErrorText text={errors.percentInNumber} />
            ) : null}
          </div>
        </div>
        <div className="w-full py-6">
          <Radio
            id="selection"
            onChange={(e) => {
              handleSelectionAll("selected", ["bracelate", "questioItems"]);
              handleChange(e);
            }}
            check={values.selectItem === "all"}
            name="selectItem"
            value="all"
            label="Apply to all item in collection"
          />
          <Radio
            id="selection"
            name="selectItem"
            onChange={(e) => {
              handleSelectionAll("unselected", ["bracelate", "questioItems"]);
              handleChange(e);
            }}
            check={values.selectItem === "specific"}
            value="specific"
            label="Apply to specific item"
            customClassess="mt-2"
          />
        </div>
        <hr />
        <div className="relative w-[35%] border rounded-sm mt-5">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full py-3 px-4 ps-10 text-sm outline-none border-none"
            placeholder="Search"
          />
        </div>
        <div className="mt-4">
          <CheckBoxWrapper>
            <Checkbox
              onChange={(e) => {
                handleChange(e);
                if (e.target.checked) {
                  handleSelectionAll("selected", ["bracelate"]);
                } else {
                  handleSelectionAll("unselected", ["bracelate"]);
                }
              }}
              name="allBracelate"
              check={checkAllSelected("bracelate")}
              label="Bracelate"
            />
          </CheckBoxWrapper>
          <div className="py-2">
            {values.bracelate.map((item, index) => {
              return (
                <CheckBoxWrapper key={index} customClases={"!ml-3 !bg-inherit"}>
                  <Checkbox
                    onChange={(e) => {
                      handleSingleCheckBox(e, "bracelate");
                    }}
                    name={item.name}
                    value={item.selected}
                    label={item.label}
                  />
                </CheckBoxWrapper>
              );
            })}
          </div>
        </div>
        <div className="mt-2">
          <CheckBoxWrapper>
            <Checkbox
              check={checkAllSelected("questioItems")}
              name="alQuestionItems"
              label="Other Items"
              onChange={(e) => {
                handleChange(e);
                if (e.target.checked) {
                  handleSelectionAll("selected", ["questioItems"]);
                } else {
                  handleSelectionAll("unselected", ["questioItems"]);
                }
              }}
            />
          </CheckBoxWrapper>
          <div className="py-2">
            {values.questioItems.map((item, index) => {
              return (
                <CheckBoxWrapper key={index} customClases={"!ml-3 !bg-inherit"}>
                  <Checkbox
                    onChange={(e) => {
                      handleSingleCheckBox(e, "questioItems");
                    }}
                    name={item.name}
                    value={item.selected}
                    label={item.label}
                  />
                </CheckBoxWrapper>
              );
            })}
          </div>
        </div>

        <div className="flex justify-end items-center w-full pt-8 pb-3">
          <button
            onClick={handleSubmit}
            className="px-6 py-2 text-[18px] text-white font-semibold bg-orange-500 outline-none rounded-md"
          >
            Apply tax to items
          </button>
        </div>
      </div>
    </div>
  );
}
