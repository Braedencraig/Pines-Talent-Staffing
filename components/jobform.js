import React from "react";
import { useForm } from "react-hook-form";

function JobForm({ jobs }) {
  const positions = jobs.map((job) => job.title);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const salaryRanges = [
    "Expected Salary Range",
    "Less than $50,000",
    "$50,000 - $70,000",
    "$70,000 - $90,000",
    "$90,000 - $110,000",
    "$110,000 - $130,000",
    "$130,000 - $150,000",
    "Greater than $150,000",
  ];

  const onSubmit = (data) => {
    console.log(data, "data");
  };

  return (
    <form className="mt-20" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6 flex w-full justify-between max-w-[800px] m-auto flex-col sm:flex-row">
        <div className="flex flex-col w-full sm:w-[50%] mr-2 mb-4 sm:mb-0">
          <label
            htmlFor="firstName"
            className="block font-bold mb-2 text-black flex"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            {...register("firstName", { required: true })}
            className="w-full px-3 py-2 border border-gray-400  focus:outline-none focus:border-white-500 text-black bg-white"
          />
          {errors.email && (
            <span className="text-[#a1c4a3] text-left flex">
              This field is required
            </span>
          )}
        </div>
        <div className="flex flex-col w-full sm:w-[50%]">
          <label
            htmlFor="lastName"
            className="block font-bold mb-2 text-black flex"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            {...register("lastName", { required: true })}
            className="w-full px-3 py-2 border border-gray-400  focus:outline-none focus:border-white-500 text-black bg-white"
          />
          {errors.email && (
            <span className="text-[#a1c4a3] text-left flex">
              This field is required
            </span>
          )}
        </div>
      </div>
      <div className="mb-6 flex w-full justify-between max-w-[800px] m-auto flex-col sm:flex-row">
        <div className="flex flex-col w-full sm:w-[50%] mr-2 mb-4 sm:mb-0">
          <label
            htmlFor="email"
            className="block font-bold mb-2 text-black flex"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
            className="w-full px-3 py-2 border border-gray-400  focus:outline-none focus:border-white-500 text-black bg-white"
          />
          {errors.email && (
            <span className="text-[#a1c4a3] text-left flex">
              This field is required
            </span>
          )}
        </div>
        <div className="flex flex-col w-full sm:w-[50%]">
          <label
            htmlFor="phone"
            className="block font-bold mb-2 text-black flex"
          >
            Phone
          </label>
          <input
            type="text"
            id="phone"
            {...register("phone", { required: true })}
            className="w-full px-3 py-2 border border-gray-400  focus:outline-none focus:border-white-500 text-black bg-white"
          />
          {errors.email && (
            <span className="text-[#a1c4a3] text-left flex">
              This field is required
            </span>
          )}
        </div>
      </div>
      <div className="mb-6 flex w-full justify-between max-w-[800px] m-auto flex-col sm:flex-row">
        <div className="flex flex-col w-full sm:w-[50%] mr-2 mb-4 sm:mb-0">
          <select
            className="w-full px-3 py-2 border border-gray-400  focus:outline-none focus:border-white-500 text-black bg-white h-[42px]"
            id="position"
            {...register("position", { required: true })}
          >
            {["Position I'm applying for", ...positions].map((position) => (
              <option key={position} value={position}>
                {position}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col w-full sm:w-[50%]">
          <select
            className="w-full px-3 py-2 border border-gray-400  focus:outline-none focus:border-white-500 text-black bg-white h-[42px]"
            id="salaryRange"
            {...register("salaryRange")}
          >
            {salaryRanges.map((salaryRange) => (
              <option key={salaryRange} value={salaryRange}>
                {salaryRange}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mb-6 flex w-full justify-between max-w-[800px] m-auto flex-col sm:flex-row">
        <div className="flex flex-col w-full sm:w-[50%] mr-2 mb-4 sm:mb-0">
          <label htmlFor="startDate">Available Start Date:</label>
          <input
            type="date"
            id="startDate"
            {...register("startDate", { required: true })}
            className="w-full px-3 py-2 border border-gray-400  focus:outline-none focus:border-white-500 text-black bg-white"
          />
        </div>
        <div className="flex flex-col w-full sm:w-[50%] mr-2 mb-4 sm:mb-0">
          <label htmlFor="linkedin">LinkedIn Profile Link:</label>
          <input
            className="w-full px-3 py-2 border border-gray-400  focus:outline-none focus:border-white-500 text-black bg-white"
            type="url"
            id="linkedin"
            {...register("linkedin")}
          />
        </div>
      </div>
      <div className="w-full m-auto flex justify-center mb-20">
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 w-[200px] hover:bg-[#a1c4a3] hover:text-black focus:outline-none focus:bg-[#a1c4a3]"
        >
          Apply Now
        </button>
      </div>
    </form>
  );
}

export default JobForm;
