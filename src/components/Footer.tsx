"use client";

import Image from "next/image";
import Link from "next/link";
import { Box } from "@mui/material";
import { Telegram, Facebook, Instagram } from "@mui/icons-material";

export default function Footer() {
  return (
    <footer className="bg-[#404B7D] text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-3">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Section - Logo and Contact */}
          <div className="lg:col-span-4">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-9">
              <Image
                src="/logo1.png"
                alt="Institute Logo"
                width={90}
                height={90}
                className="rounded-full"
              />
              <div className="pt-2 text-center sm:text-left">
                <h2 className="text-lg font-medium leading-tight uppercase">
                  Toshkent iqtisodiyot va pedagogika instituti
                </h2>
                <address className="not-italic mt-4 text-sm space-y-1">
                  <p>Toshkent v. Chirchiq sh.</p>
                  <p>Metallurgchilar 13</p>
                </address>
                <br />
                <div className="space-y-1 mb-4 text-sm text-center sm:text-left">
                  <p>
                    Tel:{" "}
                    <a href="tel:+998559000604" className="hover:text-gray-200">
                      +998 55 900 06 04
                    </a>
                  </p>
                  <p>
                    E-mail:{" "}
                    <a
                      href="mailto:tipiuniversity@mail.uz"
                      className="hover:text-gray-200"
                    >
                      tipiuniversity@mail.uz
                    </a>
                  </p>
                </div>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent={{ xs: "center", sm: "flex-start" }}
                  gap={4.5} // Masofani biroz kamaytirdim
                >
                  <Link href="#" color="inherit">
                    <Telegram fontSize="medium" />
                  </Link>
                  <Link href="#" color="inherit">
                    <Facebook fontSize="medium" />
                  </Link>
                  <Link href="#" color="inherit">
                    <Instagram fontSize="medium" />
                  </Link>
                </Box>
              </div>
            </div>
          </div>
          {/* Middle Section - Links */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
              {/* mt-6 qo‘shildi */}
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-medium mb-4">Institut haqida</h3>
                <ul className="space-y-2 text-sm font-medium">
                  <li>
                    <Link href="#" className="hover:text-gray-200">
                      Institut tarixi
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-200">
                      Institut litsenziyasi
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-200">
                      Adminstratsiya
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-200">
                      Rahbariyat
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-medium mb-4">Bo'limlar</h3>
                <ul className="space-y-2 text-sm font-medium">
                  <li>
                    <Link href="#" className="hover:text-gray-200">
                      Reja moliya bo'limi
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-200">
                      Devonxona
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-200">
                      Ma'naviyat va ma'rifat bo'limi
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-200">
                      Ilmiy bo'lim
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-200">
                      O'quv departamenti
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 mt-6">
            <div className="relative w-full rounded-[16px] overflow-hidden border border-gray-300 shadow-lg h-[200px]">
              <a
                href="https://yandex.uz/maps/org/193297945866/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.715763959021!2d69.5413527!3d41.4359431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aefb81e98fa5bf%3A0x6f0f86d77ec98842!2sToshkent+Iqtisodiyot+va+Pedagogika+Instituti!5e0!3m2!1sen!2s!4v1737633177136!5m2!1sen!2s"
                  width="100"
                  height="200"
                  className="w-full"
                  allowFullScreen // ✅ camelCase ishlatilgan
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      {/* <div className="container mx-auto px-4 md:px-6 lg:px-1">
        <div className="flex justify-end py-4">
          <a
            href="https://www.instagram.com/zakirovv1_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/70 hover:text-white transition-colors duration-200"
          >
            Powered by Sector Soft
          </a>
        </div>
      </div> */}
    </footer>
  );
}
