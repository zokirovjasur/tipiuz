"use client";

import { useState } from "react";
import { TextField, Button, Box, Typography, Container } from "@mui/material";
import { Mail, Phone } from "lucide-react";
import type React from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container maxWidth="lg" className="py-12 md:py-24">
      <Box
        className="bg-white rounded-xl p-6 md:p-20"
        sx={{
          boxShadow: "16.74px 10.74px 53.68px 21.47px rgba(0, 0, 0, 0.08)",
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#F9FAFB",
            "& fieldset": {
              border: "none",
            },
          },
          "& .MuiOutlinedInput-input": {
            padding: "12px 16px",
          },
        }}
      >
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "40px", md: "63.19px" },
                fontWeight: 500,
                fontFamily: "PP Neue Montreal, sans-serif",
                lineHeight: { xs: "50px", md: "99.15px" },
                letterSpacing: "0%",
                color: "#000000",
                width: { xs: "100%", md: "800px" },
                height: { xs: "auto", md: "100px" },
              }}
            >
              Biz bilan bog'lanish
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "20px", md: "25px" },
                color: "#666",
                fontWeight: 500,
                fontFamily: "inherit",
              }}
            >
              Xabar yuborish
            </Typography>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-6">
          <form onSubmit={handleSubmit} className="w-full md:max-w-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              {/* Ismingiz inputi */}
              <TextField
                fullWidth
                name="name"
                placeholder="Ismingiz"
                variant="outlined"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 0,
                    width: "100%",
                    height: { xs: "50px", md: "61.64px" },
                    backgroundColor: "#F7F8FA",
                  },
                  "& .MuiInputBase-input": {
                    fontFamily: "PP Neue Montreal",
                    fontWeight: 400,
                    fontSize: { xs: "14px", md: "16.47px" },
                    lineHeight: "17.07px",
                    letterSpacing: "0%",
                    color: "#000",
                  },
                }}
              />
              {/* Phone inputi */}
              <TextField
                fullWidth
                name="phone"
                placeholder="Phone"
                variant="outlined"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                InputProps={{
                  startAdornment: (
                    <span className="text-gray-500 mr-2">+998</span>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 0,
                    width: "100%",
                    height: { xs: "50px", md: "61.64px" },
                    backgroundColor: "#F7F8FA",
                  },
                  "& .MuiInputBase-input": {
                    fontFamily: "PP Neue Montreal",
                    fontWeight: 400,
                    fontSize: { xs: "14px", md: "16.47px" },
                    lineHeight: "17.07px",
                    letterSpacing: "0%",
                    color: "#000",
                  },
                }}
              />
            </div>
            <TextField
              fullWidth
              name="message"
              placeholder="Xabar"
              variant="outlined"
              multiline
              rows={1}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              sx={{
                width: "100%",
                height: { xs: "50px", md: "61.94px" },
                backgroundColor: "#F7F8FA",
                borderRadius: 0,
                "& .MuiOutlinedInput-root": {
                  padding: "0px",
                },
                "& .MuiInputBase-input": {
                  fontFamily: "PP Neue Montreal",
                  fontWeight: 400,
                  fontSize: { xs: "14px", md: "16.47px" },
                  lineHeight: "35.07px",
                  letterSpacing: "0%",
                  color: "#000000",
                },
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end", // Har doim o'ng tomonda
                marginTop: "10px",
              }}
            >
              <Button
                variant="contained"
                type="submit"
                sx={{
                  backgroundColor: "#394269",
                  "&:hover": {
                    backgroundColor: "#394269",
                    opacity: 0.9,
                  },
                  textTransform: "none",
                  padding: "8px 32px",
                  boxShadow: "none",
                  borderRadius: 0,
                  width: { xs: "100%", md: "auto" }, // Kichik ekranlarda to'liq kenglik, katta ekranlarda avtomatik
                }}
              >
                Jo'natish
              </Button>
            </div>
          </form>

          <div className="flex flex-col gap-3 w-full md:w-[417px]">
            <ContactInfoItem
              icon="/email.svg"
              alt="Mail Icon"
              text="tipiuniversity@mail.uz"
              link="mailto:tipiuniversity@mail.uz"
            />
            <ContactInfoItem
              icon="/phone.svg"
              alt="Phone Icon"
              text="55 900 06 04"
              link="tel:+998559000604"
            />
          </div>
        </div>
      </Box>
    </Container>
  );
}

// Qayta ishlatiladigan ContactInfoItem komponenti
function ContactInfoItem({
  icon,
  alt,
  text,
}: {
  icon: string;
  alt: string;
  text: string;
}) {
  const isEmail = text.includes("@");
  const link = isEmail ? `mailto:${text}` : `tel:${text.replace(/\s/g, "")}`;

  return (
    <a
      href={link}
      className="flex w-full justify-end"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="bg-[#F7F8FA] p-2 flex items-center justify-center w-12 h-12 rounded-l-lg mr-2">
        <img src={icon} alt={alt} className="w-6 h-6" />
      </div>
      <div className="bg-[#F7F8FA] p-2 flex items-center w-[250px] rounded-r-lg">
        <span className="text-[#394269] text-xl">{text}</span>
      </div>
    </a>
  );
}
