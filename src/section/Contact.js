import ContactForm from "../component/contactForm";

function Contact() {
  return (
    <div
      id="contact"
      className="flex flex-col w-full items-center min-h-screen h-fit py-20 px-60"
    >
      <p className="text-4xl font-bold text-green-600">
        <span className="text-gray-600">Get in</span> Touch
      </p>
      <p className="text-gray-700 mt-2 text-lg">
        Feel free to reach out for any inquiries or opportunities.
      </p>

      <div className="flex flex-row w-full mt-10">
        <ContactForm />
        <div className="flex flex-col gap-4 w-full text-green-600 p-4">
          <div>
            <p className="font-bold text-xl">
              <span>
                <i class="fi fi-rr-envelope mr-2"></i>
              </span>
              Email
            </p>
            <p className="text-gray-700">yovihan@gmail.com</p>
          </div>
          <div>
            <p className="font-bold text-xl">
              {" "}
              <span>
                <i class="fi fi-rr-circle-phone mr-2"></i>
              </span>
              Phone
            </p>
            <a href="https://wa.me/6285271810418" className="text-gray-700">
              6285271810418
            </a>
          </div>
          <div>
            <p className="font-bold text-xl">
              {" "}
              <span>
                <i class="fi fi-rr-marker mr-2"></i>
              </span>
              Location
            </p>
            <p className="text-gray-700">Jakarta, Indonesia</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
