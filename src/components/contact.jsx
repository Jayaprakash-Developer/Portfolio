import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { toast } from "react-hot-toast";

const Contact = () => {
  
  const supabaseUrl = "https://nhrgiynuunrojmmgnsvh.supabase.co";
  const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ocmdpeW51dW5yb2ptbWduc3ZoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwOTU2ODYxOCwiZXhwIjoyMDI1MTQ0NjE4fQ.kMd2tpf6xMaHA3pPDSaeaWW21mE8cgbHcAIYTmIU8EM";
  const supabase = createClient(supabaseUrl, supabaseKey);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setNameError(false);
    setEmailError(false);
    setSubmitting(true);

    if (!name) {
      setNameError(true);
      setSubmitting(false);setTimeout(() => {
        setNameError(false);
      }, 1500);
      return;
    }

    if (!email) {
      setEmailError(true);
      setSubmitting(false);
      setTimeout(() => {
        setEmailError(false);
      }, 1500); 
      return;
    }

    try {
      const { data, error } = await supabase
        .from("Portfolio")
        .insert([{ name, email, message }]);
      if (error) {
        throw error;
      }
      console.log(data);
      toast.success("Your message has been uploaded.");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="w-full h-screen bg-gradient-to-b from-[#081b29] to-[#05121a] text-white p-4"
      name="contact"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#00abf0]">
          Drop a line
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            className="flex flex-col w-full md:w-1/2"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`p-2 bg-transparent border-2 rounded-md text-white focus:outline-none ${
                nameError && "border-red-600 placeholder:text-red-600"
              }`}
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none  ${
                emailError && "border-red-600 placeholder:text-red-600 "
              }`}
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />

            <button
              type="submit"
              disabled={submitting}
              className="text-white bg-gradient-to-br from-cyan-500 to-blue-500 px-6 py-3 my-8 
                    mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              {submitting ? "Submitting..." : "Let's talk"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
