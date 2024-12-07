import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { iranStatesURL } from "../urls";
import CityBoxSelect from "../CityBox";
import CountryBoxSelect from "../CountryBox";

const FormBox = () => {
  const [response, setResponse] = useState({});
  const [cities, setCities] = useState([]);
  const [counties, setCounties] = useState([]);
  const [isCountyDisabled, setIsCountyDisabled] = useState(true);

  const schema = Yup.object().shape({
    city: Yup.string().required("حتما شهر محل زندگی خود را وارد کنید"),
    county: Yup.string().required("حتما شهرستان محل زندگی خود را وارد کنید"),
  });

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const getCity = async () => {
    try {
      const response = await fetch(iranStatesURL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setResponse({ ...data });
      setCities([...Object.keys(data)]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getCity();
  }, []);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  const handleCityChange = (city) => {
    setCounties(response[city] || []);
    setIsCountyDisabled(!city);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      dir="rtl"
      className="w-[300px] mx-auto mt-10 space-y-4"
    >
      <h3 className="text-gray-900 text-2xl text-center font-medium ">
        محل زندگی :
      </h3>
      <div>
        <CityBoxSelect
          cities={cities}
          register={register}
          handleCityChange={handleCityChange}
          errors={errors}
        />
        <CountryBoxSelect
          counties={counties}
          register={register}
          isCountyDisabled={isCountyDisabled}
          errors={errors}
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 rounded-md  font-medium  hover:bg-rose-800 focus:outline-none focus:ring-2 focus:ring-rose-900  bg-rose-600 text-white"
      >
        Submit
      </button>
    </form>
  );
};

export default FormBox;
