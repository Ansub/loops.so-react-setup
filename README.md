### Loops.so Implementation
This repository provides a simplified implementation of the Luminary Newsletter subscription form using the Loops.so API. It demonstrates how Loops.so can be integrated into a portfolio website. The setup is straightforward.

### Prerequisites
	•	React (Next.js)
	•	Tailwind CSS (You can remove the styles or incorporate the logic into your own application)
	•	Zod for validation
	•	Axios for handling post requests

### Just Logic: 
```javascript
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
```

### CSS Changes
Please note that the appearance may differ from my website as I utilized a custom button component and "shadcn" for input styling.
