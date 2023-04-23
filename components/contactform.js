import { useForm } from "react-hook-form";
import { useState } from "react";

export default function ContactForm() {
  const [formValues, setFormValues] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data, "data");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto">
      <div className="mb-6">
        <label htmlFor="firstName" className="block font-bold mb-2 text-black">
          First Name
        </label>
        <input
          {...register("firstName", { required: true })}
          type="text"
          id="firstName"
          value={formValues.firstName}
          onChange={(e) =>
            setFormValues({ ...formValues, firstName: e.target.value })
          }
          className="w-full px-3 py-2 border border-gray-400  focus:outline-none focus:border-white-500 text-black bg-white"
        />
        {errors.firstName && (
          <span className="text-[#a1c4a3]">This field is required</span>
        )}
      </div>
      <div className="mb-6">
        <label htmlFor="lastName" className="block font-bold mb-2 text-black">
          Last Name
        </label>
        <input
          value={formValues.lastName}
          onChange={(e) =>
            setFormValues({ ...formValues, lastName: e.target.value })
          }
          {...register("lastName", { required: true })}
          type="text"
          id="lastName"
          className="w-full px-3 py-2 border border-gray-400  focus:outline-none focus:border-white-500 text-black bg-white"
        />
        {errors.lastName && (
          <span className="text-[#a1c4a3]">This field is required</span>
        )}
      </div>
      <div className="mb-6 flex w-full">
        <div className="flex flex-col w-[50%]">
          <label htmlFor="email" className="block font-bold mb-2 text-black">
            Email
          </label>
          <input
            value={formValues.email}
            onChange={(e) =>
              setFormValues({ ...formValues, email: e.target.value })
            }
            {...register("email", { required: true })}
            type="email"
            id="email"
            className="px-3 py-2 border border-gray-400  focus:outline-none focus:border-white-500 mr-2 text-black bg-white"
          />
          {errors.email && (
            <span className="text-[#a1c4a3]">This field is required</span>
          )}
        </div>
        <div className="flex flex-col w-[50%]">
          <label htmlFor="phone" className="block font-bold mb-2 text-black">
            Phone
          </label>
          <input
            {...register("phone", { required: true })}
            type="tel"
            value={formValues.phone}
            onChange={(e) =>
              setFormValues({ ...formValues, phone: e.target.value })
            }
            id="phone"
            className="px-3 py-2 border border-gray-400  focus:outline-none focus:border-white-500 ml-2 text-black bg-white"
          />
          {errors.phone && (
            <span className="text-[#a1c4a3]">This field is required</span>
          )}
        </div>
      </div>
      <div className="mb-6">
        <label
          htmlFor="jobDescription"
          className="block font-bold mb-2 text-black"
        >
          Job Description
        </label>
        <textarea
          rows="6"
          value={formValues.jobDescription}
          onChange={(e) =>
            setFormValues({ ...formValues, jobDescription: e.target.value })
          }
          {...register("jobDescription", { required: true })}
          id="jobDescription"
          className="w-full px-3 py-2 border border-gray-400  focus:outline-none focus:border-white-500 text-black bg-white"
        />
        {errors.jobDescription && (
          <span className="text-[#a1c4a3]">This field is required</span>
        )}
      </div>
      <div className="w-full m-auto flex justify-center">
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 w-[200px] hover:bg-[#a1c4a3] hover:text-black focus:outline-none focus:bg-[#a1c4a3]"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
