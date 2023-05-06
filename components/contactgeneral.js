import { useForm } from "react-hook-form";
import { useState } from "react";

export default function ContactGeneral() {
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
      <div className="mb-6 flex w-full">
        <div className="flex flex-col w-[50%]">
          <label
            htmlFor="name"
            className="block font-bold mb-2 text-black flex"
          >
            Name
          </label>
          <input
            value={formValues.name}
            onChange={(e) =>
              setFormValues({ ...formValues, name: e.target.value })
            }
            {...register("name", { required: true })}
            type="name"
            id="name"
            className="px-3 py-2 border border-gray-400  focus:outline-none focus:border-white-500 mr-2 text-black bg-white"
          />
          {errors.email && (
            <span className="text-[#a1c4a3] text-left flex">
              This field is required
            </span>
          )}
        </div>
        <div className="flex flex-col w-[50%]">
          <label
            htmlFor="email"
            className="block font-bold mb-2 text-black flex"
          >
            Email
          </label>
          <input
            {...register("email", { required: true })}
            type="email"
            value={formValues.email}
            onChange={(e) =>
              setFormValues({ ...formValues, email: e.target.value })
            }
            id="email"
            className="px-3 py-2 border border-gray-400  focus:outline-none focus:border-white-500 ml-2 text-black bg-white"
          />
          {errors.email && (
            <span className="text-[#a1c4a3] text-left flex">
              This field is required
            </span>
          )}
        </div>
      </div>
      <div className="mb-6">
        <label
          htmlFor="subject"
          className="block font-bold mb-2 text-black flex"
        >
          Subject
        </label>
        <input
          {...register("subject", { required: true })}
          type="text"
          id="subject"
          value={formValues.subject}
          onChange={(e) =>
            setFormValues({ ...formValues, subject: e.target.value })
          }
          className="w-full px-3 py-2 border border-gray-400  focus:outline-none focus:border-white-500 text-black bg-white"
        />
        {errors.subject && (
          <span className="text-[#a1c4a3] text-left flex">
            This field is required
          </span>
        )}
      </div>
      <div className="mb-6">
        <label
          htmlFor="message"
          className="block font-bold mb-2 text-black flex"
        >
          Message
        </label>
        <textarea
          rows="6"
          style={{ resize: "none" }}
          value={formValues.message}
          onChange={(e) =>
            setFormValues({ ...formValues, message: e.target.value })
          }
          {...register("message", { required: true })}
          id="message"
          className="w-full px-3 py-2 border border-gray-400  focus:outline-none focus:border-white-500 text-black bg-white"
        />
        {errors.message && (
          <span className="text-[#a1c4a3] text-left flex">
            This field is required
          </span>
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
