import React, { useState } from "react";

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setStatus(result.message);
    } catch (error) {
      setStatus("Failed to send message.");
    }
  };

  return (
    <div className="">
      <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="text-4xl font-bold">Get in touch</h1>
            <p className="pt-2 pb-4">
              Fill in the form to start a conversation
            </p>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>
                  Physical Address: No. 42, Mango Street, Kokomlemle, Accra,
                  Ghana
                </span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>+233209555871/+233535903939</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>mattewati17@gmail.com</span>
              </p>
            </div>
          </div>
          <form
            noValidate
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
            onSubmit={handleSubmit}
          >
            <label className="block">
              <span className="mb-1">Full name</span>
              <input
                type="text"
                name="name"
                placeholder="e.g Leroy Jenkins"
                className="border block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label className="block">
              <span className="mb-1">Email address</span>
              <input
                type="email"
                name="email"
                placeholder="e.g leroy@jenkins.com"
                className="border block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label className="block">
              <span className="mb-1">Message</span>
              <textarea
                rows={3}
                name="message"
                className="border block w-full rounded-md focus:ring focus:ri focus:ri dark:bg-gray-800"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </label>
            <button
              type="submit"
              className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ri dark:bg-violet-400 dark:text-gray-900 focus:ri hover:ri"
            >
              Submit
            </button>
            {status && <p className="text-center">{status}</p>}
          </form>
        </div>
        {/* Footer content */}
      </section>
    </div>
  );
};

export default Footer;