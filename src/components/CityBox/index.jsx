import React from "react";
import PropTypes from "prop-types";

const CityBoxSelect = ({ cities, register, handleCityChange, errors }) => {
  return (
    <div>
      <label className="text-sm font-medium text-gray-700">شهر</label>
      <select
        {...register("city")}
        onChange={(e) => handleCityChange(e.target.value)}
        className="border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2  bg-yellow-200  shadow-sm"
      >
        <option value="">یک مورد انتخاب کنید</option>
        {cities.map((city, index) => (
          <option
            key={`city-${index}`}
            value={city}
            className="text-gray-900 text-sm font-medium "
          >
            {city}
          </option>
        ))}
      </select>
      {errors?.city && (
        <p className="text-sm text-red-700">{errors?.city.message}</p>
      )}
    </div>
  );
};

CityBoxSelect.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  register: PropTypes.func.isRequired,
  handleCityChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default CityBoxSelect;
