import { useState } from "react";
import axios from "axios";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
});

const Newsletter = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const validatedData = schema.parse({ email });

      const formBody = `userGroup=${encodeURIComponent(
        ""
      )}&email=${encodeURIComponent(validatedData.email)}`;

      const res = await axios.post(
        {
          /**YOUR FORM LINK */
        },
        formBody,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      if (res.status === 200 && res.data.success === true) {
        setEmail("");
        alert("Thank you for subscribing to Luminary!");
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        alert("Invalid email format. Please provide a valid email address.");
      } else if (error.response) {
        alert(error.response.data.message);
      } else if (error.message !== "Failed to fetch") {
        alert("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center flex-col h-[100vh] w-full bg-purple relative ">
        <div className="bg-[#bb74f110] p-10 rounded-xl text-center">
          <div className="font-secondary text-purewhite font-bold text-7xl md:text-8xl tracking-tight">
            Luminary
          </div>
          <div className="relative pt-2">
            <div className="text-[#CAB6D1] px-5 py-1 rounded-2xl mb-5">
              by Ansub Khan
            </div>
          </div>
          <div className="text-[#CAB6D1] w-auto  md:w-[650px] text-center mb-5 font-secondary z-10">
            Stay ahead of the curve with monthly newsletter, where I share
            valuable information on the latest trends, techniques, and tools in
            the world of web development and design.
          </div>

          <form onSubmit={handleSubmit} className="flex flex-row gap-2">
            <input
              type="text"
              name="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="text-purewhite w-full  bg-black rounded-2xl px-5 py-2 z-10"
            />
            <button type="submit" name={"Subscribe"}></button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
