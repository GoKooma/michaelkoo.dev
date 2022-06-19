// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('xqknokyy');
  if (state.succeeded) {
    return <p className="text-theme-pop font-bold">Thanks for your message. I will get back to you shortly :)</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col justify-center w-full">
        <label htmlFor="email">
          <p className="text-base text-gray-400 mb-2">
            Your Email Address:
          </p>
          {/* <br /> */}
          <input
            id="email"
            type="email"
            name="email"
            className="w-full h-[35px]"
          />
        </label>
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
        <br />
        <label htmlFor="message">
          <p className="text-base text-gray-400 mb-2">
            Your Message:
          </p>
          <textarea
            id="message"
            name="message"
            className="min-h-[200px] w-full"
          />
        </label>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          type="submit"
          disabled={state.submitting}
          className="w-[120px] h-[30px] mt-4 bg-white text-base rounded-lg shadow-md hover:shadow-xl transition-all mx-auto"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
