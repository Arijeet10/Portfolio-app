"use client";

const ContactForm = () => {
  return (
    <>
      <form className="flex flex-col gap-8 font-bold">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex flex-col">
            <label for="name" className="pl-4">YOUR FULL NAME</label>
            <input
              id="name"
              className="border border-black rounded-full p-4"
              required
            />
          </div>
          <div className="flex flex-col">
            <label for="email" className="pl-4">YOUR EMAIL ADDRESS</label>
            <input
              id="email"
              className="border border-black rounded-full p-4"
              required
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label for="subject" className="pl-4">YOUR SUBJECT</label>
          <input
            id="subject"
            className="border border-black rounded-full p-4"
            required
          />
        </div>
        <div className="flex flex-col">
          <label for="message" className="pl-4">YOUR MESSAGE</label>
          <textarea
            id="message"
            rows="4"
            className="border border-black rounded-lg p-4 "
            required
          />
        </div>
        <div className="flex flex-col items-end sm:flex-row sm:items-start justify-end">
            <span>*Accept the terms and conditions.</span>
          <input
            type="submit"
            onClick={(e) => e.preventDefault()}
            className="border border-black rounded-full text-xl font-bold px-8 py-4 shadow-effect hover:bg-green-500 hover:text-white"
            value="SEND MESSAGE"
          />
        </div>
      </form>
    </>
  );
};

export default ContactForm;
