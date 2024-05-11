import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_ACTIVE_DOCTOR_CATEGORY } from "../../Provider/HomePage/HomePageReducers";

export const SearchInputs = ({ searchApiCalls }) => {
  const { doctorsList, activeDoctorsCategory } = useSelector(
    (state) => state?.HomePageReducer
  );
  const [searchInput, setSearchInput] = useState("");
  const [showSearchBox, setShowSearchBox] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (searchInput) {
      let query = `filters[name][$contains]=${searchInput}`;
      console.log(query)
      const searchTime = setTimeout(() => {
        searchApiCalls(query);
      }, 700);
      return () => clearTimeout(searchTime);
    } else {
      searchApiCalls();
    }
  }, [searchInput, searchApiCalls]);
  return (
    <div>
      <div
        className={`bg-white gap-1 relative top-md items-center ${
          showSearchBox ? "rounded-t-md" : "rounded-md"
        } p-1 flex px-4`}
      >
        <Search size={16} />
        <input
          onChange={(event) => {
            dispatch({
              type: UPDATE_ACTIVE_DOCTOR_CATEGORY,
              payload: event.target.value,
            });
            setSearchInput(event.target.value);
          }}
          value={activeDoctorsCategory}
          onFocus={() => setShowSearchBox(true)}
          onBlur={() =>
            setTimeout(() => {
              setShowSearchBox(false);
            }, 500)
          }
          type="text"
          className="p-2 text-xs outline-none w-full"
          name="doctors"
          placeholder="Search by : Doctors, Specialities, Symptoms, Diseases & Treatments"
        />
        {showSearchBox && (
          <div className="absolute w-full bg-white shadow-md rounded-b-md top-[100%] left-0">
            <ul className="p-0 text-sm">
              {doctorsList?.map((ele) => {
                // console.log(ele?.doctor_categories[0]?.name)
                return (
                  <li
                    onClick={() => {
                      //active the doctor
                      dispatch({
                        type: UPDATE_ACTIVE_DOCTOR_CATEGORY,
                        payload: ele?.name,
                      });
                    }}
                    key={ele.id}
                    className={` p-2 ${
                      activeDoctorsCategory === ele?.name
                        ? "bg-dark-primary text-white"
                        : "hover:bg-neutral-100"
                    }  cursor-pointer border-b`}
                  >
                    <div className="flex justify-between items-center">
                      <h6>{ele?.name}</h6>
                      <h6>{ele?.doctor_categories[0]?.name}</h6>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
