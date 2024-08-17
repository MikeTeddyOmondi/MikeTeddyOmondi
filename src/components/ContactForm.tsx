import React, { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleContactMe = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });

    if (response.ok) {
      alert("Thank you for contacting us!");
      setName("");
      setEmail("");
    } else {
      alert("Failed to submit. Please try again.");
    }
  };

  return (
    <section className="animate space-y-6 my-4">
      <h5 className="font-semibold text-black dark:text-white">
        Contact Me
      </h5>
      <article>
        <form onSubmit={handleContactMe} className="space-y-4 gap-2">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button type="submit" className="p-2 bg-slate-400 text-white rounded">
            Submit
          </button>
        </form>
      </article>  
    </section>
  );
}

export default ContactForm;
