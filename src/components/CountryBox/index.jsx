import React from "react";
import PropTypes from "prop-types";

const CountryBoxSelect = ({ counties, register, isCountyDisabled, errors }) => {
  return (
    <div>
      <label className="text-sm font-medium text-gray-700">شهرستان</label>
      <select
        {...register("county")}
        disabled={isCountyDisabled}
        className=" border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-400 bg-yellow-200  block w-full px-4 py-2  rounded-md shadow-sm"
      >
        <option value="">یک مورد انتخاب کنید</option>
        {counties.map((county, index) => (
          <option key={`county-${index}`} value={county} className="text-gray-900 text-sm font-medium ">
            {county}
          </option>
        ))}
      </select>
      {errors?.county && <p className="text-sm text-red-700">{errors?.county.message}</p>}
    </div>
  );
};

CountryBoxSelect.propTypes = {
  counties: PropTypes.arrayOf(PropTypes.string).isRequired,
  register: PropTypes.func.isRequired,
  isCountyDisabled: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired,
};

export default CountryBoxSelect;
