import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/components/Providers";
import DrawerButton from "@/components/DrawerButton";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/header/Header1";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UZMBC - Multi Business Company",
  description: "Modern ECommerce Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="drawer">
            <DrawerButton />
            <div className="drawer-content">
              <div className="min-h-screen screen__color flex flex-col">
                <Header />
                {children}
                <footer className="footer footer-center p-4">
                  {/* <p>
                    Copyright © 2023 - All right reserved by UZMBC - Multi Business Company
                  </p> */}
                  <div className="address__footer">
                    <h3>
                      <IoLocation /> <span>Bizning manzil</span>
                    </h3>
                    <p>
                      O‘zbekiston Respublikasi, Andijon shahri, Bobur shoh
                      ko‘chasi, 73-uy.
                    </p>
                    <h3>
                      <FaPhoneAlt /> Telefon raqam
                    </h3>
                    <p className="phone__number">
                      <a href="tel:+998(55)-201-20-00">+998(55)-201-20-00</a>
                      <a href="tel:+998(55)-201-20-02">+998(55)-201-20-02</a>
                    </p>
                  </div>
                  <div className="map__footer">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.7986024655283!2d72.34285027482109!3d40.76645413428208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bcecb879642c07%3A0x4d83558e564dffcf!2z0L_RgNC-0YHQvy4g0JHQsNCx0YPRgNCwIDczLCDQkNC90LTQuNC20LDQvSwg0JDQvdC00LjQttCw0L3RgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1714386446981!5m2!1sru!2s"
                      width="600"
                      height="450"
                      className="footer__map"
                      style={{ border: 0 }}
                      loading="lazy"></iframe>
                  </div>
                  <div className="logo__footer">
                    <img src="/images/logo-footer.png" alt="" />
                    <p>
                      © 2024 Multi Business Company. Barcha huquqlar
                      himoyalangan. Veb-sayt <a className="text-teal-400" target="_blank" href="https://courcesget.netlify.app/">gettalim.com</a> tomonidan ishlab
                      chiqilgan
                    </p>
                  </div>
                </footer>
              </div>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"></label>
              <Sidebar />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
