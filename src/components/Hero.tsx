"use client";

import Image from "next/image";
import { Button } from "@mui/material";
import { Heroo } from "@/images";

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="flex flex-col items-center text-center max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal mb-8 leading-tight">
          Toshkent Iqtisodiyot va Pedagogika Instituti.
        </h1>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button
            variant="contained"
            sx={{
              bgcolor: "#394269",
              color: "white",
              px: 4,
              py: 1,
              borderRadius: "5px",
              textTransform: "none",
              fontFamily: "PP Neue Montreal, sans-serif",
              fontWeight: 200,
              fontSize: "22.44px",
              lineHeight: "29.46px",
              letterSpacing: "-0.05em", // -5% ni `em` formatida yozish kerak
              "&:hover": {
                bgcolor: "#394269",
              },
            }}
          >
            Contact us
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "#394269",
              borderColor: "#eee", // Yon tomonlarini to‘qroq qilish
              borderWidth: "1px", // Chiziqni qalinroq qilish
              px: 4,
              py: 1,
              borderRadius: "5px",
              textTransform: "none",
              fontFamily: "PP Neue Montreal, sans-serif",
              fontWeight: 200,
              fontSize: "22.44px",
              lineHeight: "29.46px",
              letterSpacing: "-0.05em",
            //   boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)", // Tugmag a chiroyli soya qo‘shildi
              "&:hover": {
                // borderColor: "#1f263d",
                color: "#1f263d",
                // boxShadow: "0px 6px 14px rgba(0, 0, 0, 0.2)", // Hoverda soyani kuchaytirish
              },
            }}
          >
            Contact us
          </Button>
        </div>

        <div className="relative w-full max-w-[1510px] h-auto aspect-[1510/592] rounded-2xl overflow-hidden">
          <Image
            src={Heroo}
            alt="Toshkent Iqtisodiyot va Pedagogika Instituti Building"
            width={1510}
            height={592}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}
