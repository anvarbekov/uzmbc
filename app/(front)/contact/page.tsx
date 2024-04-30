import { TbLocationFilled } from "react-icons/tb";
import { IoIosMailOpen } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";

export const metadata = {
  title: 'Contact Us',
}

const ContactPage = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              BIZ BILAN ALOQA
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Biz bilan boglaning va ozingizga kerak bolgan mahsulotlarni
              buyurtma qiling. Bundan tashqari siz oz fikr mulohazalaringizni
              ham berishingiz mumkin. Bu biz uchun juda muhim.
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <div className="icon__contact mr-2">
                  <TbLocationFilled className="text-2xl" />
                </div>
                <span className="title-font font-medium">
                  Andijon shahri, Bobur shoh kochasi, 73-uy.
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <div className="icon__contact mr-2">
                  <FaPhoneAlt className="text-2xl" />
                </div>
                <span className="title-font font-medium">
                  <a className="mr-10" href="#">+998(55)-201-20-00 </a>
                  <a href="#">+998(55)-201-20-02</a>
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <div className="icon__contact mr-2">
                  <IoIosMailOpen className="text-2xl" />
                </div>
                <span className="title-font font-medium">info@uzmbc.uz</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <div className="icon__contact mr-2">
                  <IoShareSocial className="text-2xl" />
                </div>
                <span className="title-font font-medium">
                  <a className="md:mr-4 mr-2" href="#">Telegram</a>
                  <a className="md:mr-4 mr-2" href="#">Instagram</a>
                  <a className="md:mr-4 mr-2" href="#">Facebook</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              title="map"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.7986024655283!2d72.34285027482109!3d40.76645413428208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bcecb879642c07%3A0x4d83558e564dffcf!2z0L_RgNC-0YHQvy4g0JHQsNCx0YPRgNCwIDczLCDQkNC90LTQuNC20LDQvSwg0JDQvdC00LjQttCw0L3RgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1714386446981!5m2!1sru!2s"
              style={{
                filter: "grayscale(1) contrast(1.2) opacity(0.4)",
              }}></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  MANZIL
                </h2>
                <p className="mt-1">
                  Ozbekiston Respublikasi, Andijon shahri, Bobur shoh kochasi,
                  73-uy.
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  KORPARATIV POCHTA
                </h2>
                <a className="text-indigo-500 leading-relaxed">
                  info@uzmbc.uz
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  TELEFON
                </h2>
                <p className="leading-relaxed">
                  +998(55)-201-20-00 <br /> +998(55)-201-20-02
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Fikrlaringizni yuboring
            </h2>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button className="button type2 type1"></button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
