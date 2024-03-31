import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

const Contact = ({ contactData }) => {
  //console.log(contactData);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0, y: [100] }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col gap-8 py-8"
      >
        <div className="font-bold flex flex-col items-center gap-4 ">
          <div className="text-5xl">CONTACT ME</div>
          <div className="flex items-end gap-4">
            <span className="text-green-500">LET'S</span>
            <span className="text-3xl">Talk About Ideas</span>
          </div>
        </div>
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-center md:justify-evenly px-4 sm:px-20">
          <div className="flex flex-col sm:justify-evenly gap-4">
            <div className="flex items-center gap-4 ">
              <div className="flex items-center">
                <div className="border-2 border-black rounded-full p-6 shadow-effect" />
                <div className="w-10 border-t-2 border-black " />
              </div>
              <div className="flex flex-col">
                <span>Address</span>
                <span>{contactData.address}</span>
              </div>
            </div>
            <div className="flex items-center gap-4 ">
              <div className="flex items-center">
                <div className="border-2 border-black rounded-full p-6 shadow-2xl shadow-effect" />
                <div className="w-10 border-t-2 border-black shadow-2xl" />
              </div>
              <div className="flex flex-col">
                <span>Email</span>
                <span>{contactData.contactEmail}</span>
              </div>
            </div>
            <div className="flex items-center gap-4 ">
              <div className="flex items-center">
                <div className="border-2 border-black rounded-full p-6 shadow-2xl shadow-effect" />
                <div className="w-10 border-t-2 border-black shadow-2xl" />
              </div>
              <div className="flex flex-col">
                <span>Phone</span>
                <span>{contactData.phoneNumber}</span>
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
