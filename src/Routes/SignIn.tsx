import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useUser } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import FormInput from "../Components/InputForm";

interface FormData {
  email: string;
  password: string;
}

const Signin: React.FC = () => {
  const { login } = useUser();
  const [formData, setFormData] = useState<FormData>({ email: "", password: "" });
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const success = await login(formData.email, formData.password);
    if (!success) {
      setError("Invalid email or password");
    } else {
      setError("");
      navigate("/profile");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-[360px] h-[640px] bg-white flex flex-col p-6">
        <div className="mb-6">
          <h1 className="text-xl font-semibold text-gray-900">Signin to your PopX account</h1>
          <p className="text-sm text-gray-500 mt-1">Enter your credentials below</p>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <FormInput
            text="Email Address"
            type="email"
            placeholder="Enter email address"
            required
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <FormInput
            text="Password"
            type="password"
            placeholder="Enter password"
            required
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className={`w-full py-3 rounded-md font-medium ${
              formData.email && formData.password
                ? "bg-purple-600 text-white hover:bg-purple-700"
                : "bg-gray-300 text-white cursor-not-allowed"
            }`}
            disabled={!formData.email || !formData.password}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
