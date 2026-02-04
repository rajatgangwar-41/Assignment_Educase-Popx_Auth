import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useUser } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import FormInput from "../Components/InputForm";

interface SignupForm {
  fullname: string;
  email: string;
  password: string;
  phone: string;
  company: string;
  agency: string;
}

const Signup: React.FC = () => {
  const { signup } = useUser();
  const [form, setForm] = useState<SignupForm>({
    fullname: "",
    email: "",
    password: "",
    phone: "",
    company: "",
    agency: "",
  });
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("FORM SUBMIT DATA:", form);

    const success = await signup(form);
    if (success) {
      navigate("/profile"); // Redirect on success
    } else {
      setError("Signup failed. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-[360px] h-[640px] bg-white flex flex-col p-6 overflow-y-auto">
        <h1 className="text-xl font-semibold text-gray-900 mb-6">
          Create your PopX account
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-grow">
          <FormInput
            text="Full Name"
            type="text"
            name="fullname"
            value={form.fullname}
            onChange={handleChange}
            required
          />
          <FormInput
            text="Phone Number"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <FormInput
            text="Email Address"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <FormInput
            text="Password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <FormInput
            text="Company Name"
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
          />

          <div className="flex flex-col">
            <label className="text-sm font-medium text-black mb-2">
              Are you an Agency?<span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-6">
              <label>
                <input
                  type="radio"
                  name="agency"
                  value="Yes"
                  checked={form.agency === "Yes"}
                  onChange={handleChange}
                />{" "}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="agency"
                  value="No"
                  checked={form.agency === "No"}
                  onChange={handleChange}
                />{" "}
                No
              </label>
            </div>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white font-medium rounded-md mt-6 hover:bg-purple-700 transition"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
