### Loops.so Implementation
This repository provides a simplified implementation of the [Luminary Newsletter](https://www.ansubkhan.com/newsletter) subscription form using the [Loops.so](https://loops.so/). It demonstrates how Loops.so can be integrated in react app, setup is straightforward.

### Prerequisites
	•	React / Next.js
	•	Zod for validation
	•	Axios for handling post requests
 	•	Loops Form Link

### How to get Form Link?


https://github.com/Ansub/loops.so-react-setup/assets/12985873/50c586e1-2f8a-4eb3-9121-a0ea45b897d1


 	

### Logic
```typescript
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
