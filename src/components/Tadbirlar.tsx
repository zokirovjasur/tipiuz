"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Modal,
  Grid,
  Fade,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

interface NewsItem {
  id: number;
  image: string;
  date: string;
  title: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    image:
      "https://www.tipi.uz/_next/image?url=http%3A%2F%2Fapi.tipi.sector-soft.ru%2Fmedia%2Ffiles%2F%25D0%25A1%25D0%25BD%25D0%25B8%25D0%25BC%25D0%25BE%25D0%25BA_%25D1%258D%25D0%25BA%25D1%2580%25D0%25B0%25D0%25BD%25D0%25B0_12.png&w=1080&q=75",
    date: "2025-02-11",
    title: "Talabalar uchun ilhombaxsh uchrashuv!",
  },
  {
    id: 2,
    image:
      "https://www.tipi.uz/_next/image?url=http%3A%2F%2Fapi.tipi.sector-soft.ru%2Fmedia%2Ffiles%2Fphoto_2025-02-10_12-13-15.jpg&w=1080&q=75",
    date: "2025-02-10",
    title: "Talabalar uchun ilhombaxsh uchrashuv!",
  },
  {
    id: 3,
    image:
      "https://www.tipi.uz/_next/image?url=http%3A%2F%2Fapi.tipi.sector-soft.ru%2Fmedia%2Ffiles%2F%25D0%2591%25D0%25B5%25D0%25B7_%25D0%25BD%25D0%25B0%25D0%25B7%25D0%25B2%25D0%25B0%25D0%25BD%25D0%25B8%25D1%258F_ZWmiDRY.jfif&w=1080&q=75",
    date: "2025-02-10",
    title: "14-yanvar – Vatan himoyachilari kuni",
  },
  {
    id: 4,
    image:
      "https://www.tipi.uz/_next/image?url=http%3A%2F%2Fapi.tipi.sector-soft.ru%2Fmedia%2Ffiles%2Fphoto_2025-02-10_11-33-39.jpg&w=1080&q=75",
    date: "2025-02-10",
    title: "Vatanni asraydi yurt posbonlari",
  },
  {
    id: 5,
    image:
      "https://www.tipi.uz/_next/image?url=http%3A%2F%2Fapi.tipi.sector-soft.ru%2Fmedia%2Ffiles%2F%25D0%2591%25D0%25B5%25D0%25B7_%25D0%25BD%25D0%25B0%25D0%25B7%25D0%25B2%25D0%25B0%25D0%25BD%25D0%25B8%25D1%258F.jfif&w=1080&q=75",
    date: "2025-02-10",
    title: "Konstitutsiya tadbiri",
  },
  {
    id: 6,
    image:
      "https://www.tipi.uz/_next/image?url=http%3A%2F%2Fapi.tipi.sector-soft.ru%2Fmedia%2Ffiles%2Fphoto_2025-02-10_10-13-06.jpg&w=1080&q=75",
    date: "2025-02-09",
    title: "Ma'rifat ulashib",
  },
  {
    id: 7,
    image:
      "https://www.tipi.uz/_next/image?url=http%3A%2F%2Fapi.tipi.sector-soft.ru%2Fmedia%2Ffiles%2Fphoto_2024-11-24_17-05-48.jpg&w=1080&q=75",
    date: "2025-02-09",
    title: "Ma'rifat ulashib",
  },
];

export default function ProductImages() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const NewsCard = ({ item }: { item: NewsItem }) => (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        overflow: "hidden",
        position: "relative",
        boxShadow:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        transition: "box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out",
        "&:hover": {
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          transform: "translateY(-4px)",
        },
      }}
    >
      <CardMedia
        component="img"
        image={item.image}
        alt={item.title}
        sx={{
          height: 250,
          objectFit: "cover",
          position: "relative",
        }}
      />
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Typography
          sx={{
            color: "#545B96",
            mb: 1,
            fontSize: "0.870rem",
            fontWeight: 200,
          }}
        >
          {item.date}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontSize: "1.25rem",
            fontWeight: 600,
            mb: 2,
            minHeight: 60,
            color: "#1A202C",
          }}
        >
          {item.title}
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#545B96",
            color: "white",
            boxShadow: "0 4px 6px rgba(84, 91, 150, 0.25)",
            "&:hover": {
              bgcolor: "#3F4573",
              boxShadow: "0 6px 8px rgba(84, 91, 150, 0.35)",
            },
            textTransform: "none",
            px: 4,
            py: 1,
            fontWeight: 500,
            borderRadius: 2,
            transition: "all 0.3s ease-in-out",
          }}
        >
          Batafsil
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <Container maxWidth="xl" sx={{ py: 0 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "2.5rem", md: "3rem" },
            fontWeight: 500,
            color: "#000000",
          }}
        >
          Tadbirlar
        </Typography>
        <Button
          variant="text"
          onClick={handleModalOpen}
          sx={{
            color: "#545B96",
            fontSize: "1.120rem",
            fontWeight: 500,
            "&:hover": {
              backgroundColor: "rgba(84, 91, 150, 0.08)",
              textDecoration: "underline",
            },
            transition: "all 0.3s ease-in-out",
          }}
        >
          Barchasi
        </Button>
      </Box>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          bulletActiveClass: "swiper-pagination-bullet-active",
          bulletClass: "swiper-pagination-bullet",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
          1536: {
            slidesPerView: 5,
          },
        }}
      >
        {newsItems.map((item) => (
          <SwiperSlide key={item.id}>
            <NewsCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 4,
        }}
      >
        <Box className="swiper-pagination" />
      </Box>

      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        closeAfterTransition
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Fade in={modalOpen}>
          <Box
            sx={{
              position: "relative",
              bgcolor: "background.paper",
              borderRadius: 4,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              p: { xs: 3, sm: 5 },
              maxWidth: "95vw",
              maxHeight: "95vh",
              overflow: "auto",
            }}
          >
            <Button
              onClick={handleModalClose}
              sx={{
                position: "absolute",
                right: 15,
                top: 25,
                bgcolor: "transparent", // Orqa fonni olib tashlash
                boxShadow: "none", // Soyani olib tashlash
                "&:hover": {
                  bgcolor: "transparent", // Hoverda ham fon o‘zgarmasligi uchun
                  boxShadow: "none",
                },
              }}
            >
              <Close />
            </Button>

            <Typography
              variant="h3"
              sx={{ mb: 5, fontWeight: 600, color: "#222222" }}
            >
              Ilmiy yangiliklar
            </Typography>

            <Container maxWidth="xl" sx={{ py: 2 }}>
              <Grid container spacing={4}>
                {newsItems.map((item) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                    <NewsCard item={item} />
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>
        </Fade>
      </Modal>

      <style jsx global>{`
        .swiper-pagination {
          position: relative !important;
          bottom: 0 !important;
          display: flex;
          gap: 8px;
          justify-content: center;
          margin-top: 24px;
        }
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #e2e8f0;
          opacity: 1;
          cursor: pointer;
          border-radius: 50%;
          transition: all 0.3s ease-in-out;
        }
        .swiper-pagination-bullet-active {
          background: #545b96;
          transform: scale(1.2);
        }
      `}</style>
    </Container>
  );
}
