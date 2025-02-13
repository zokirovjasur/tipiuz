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
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

interface NewsItem {
  id: number;
  image: string;
  title: string;
  name: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    image:
      "https://www.tipi.uz/_next/image?url=http%3A%2F%2Fapi.tipi.sector-soft.ru%2Fmedia%2Ffiles%2F11.Ruzibayeva_Munira.JPG&w=750&q=75",
    title: "Ruzibayeva Munira Eshbayevna",
    name: "Dotsent",
  },
  {
    id: 2,
    image:
      "https://www.tipi.uz/_next/image?url=http%3A%2F%2Fapi.tipi.sector-soft.ru%2Fmedia%2Ffiles%2F9.Tangriyev_Alisher.JPG&w=750&q=75",
    title: "Tangriyev Alisher Jumanazarovich",
    name: "O'qituvchi",
  },
  {
    id: 3,
    image:
      "https://www.tipi.uz/_next/image?url=http%3A%2F%2Fapi.tipi.sector-soft.ru%2Fmedia%2Ffiles%2FMengnarov_Xolmurat_Ergashovich.JPG&w=750&q=75",
    title: "Mengnarov Xolmurat Ergashovich",
    name: "Matematika fanlari boicha oqituvchi",
  },
  {
    id: 4,
    image:
      "https://www.tipi.uz/_next/image?url=http%3A%2F%2Fapi.tipi.sector-soft.ru%2Fmedia%2Ffiles%2F8.Toshova_Nuryogdi.JPG&w=750&q=75",
    title: "Toshov Nuryog'di Iskandarovich",
    name: "Tarix fanlari boicha oqituvchi",
  },
  {
    id: 5,
    image:
      "https://www.tipi.uz/_next/image?url=http%3A%2F%2Fapi.tipi.sector-soft.ru%2Fmedia%2Ffiles%2FNurgizarova_Zakira_Beketovna.JPG&w=750&q=75",
    title: "NURGIZAROVA ZAKIRA BEKETOVNA",
    name: "O'qituvchi",
  },
  {
    id: 6,
    image:
      "https://www.tipi.uz/_next/image?url=http%3A%2F%2Fapi.tipi.sector-soft.ru%2Fmedia%2Ffiles%2FRustamov_Umid_Raxmatovich.JPG&w=750&q=75",
    title: "Rustamov Umid Rahmatovich",
    name: "Fizika-matematika fanlari nomzodi",
  },
  {
    id: 7,
    image:
      "https://www.tipi.uz/_next/image?url=http%3A%2F%2Fapi.tipi.sector-soft.ru%2Fmedia%2Ffiles%2F19.Ibragimova_Matluba.JPG&w=750&q=75",
    title: "Ibragimova Matluba Maxsudovna",
    name: "O'qituvchi",
  },
];

export default function Pedagoglar() {
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
          height: 300,
          objectFit: "cover",
        }}
      />
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Typography
          sx={{
            color: "#545B96",
            mb: 1,
            fontSize: "0.875rem",
            fontWeight: 500,
          }}
        >
          {item.name}
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
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 6,
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
          Pedagoglar
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
        modules={[Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
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
              sx={{ mb: 6, fontWeight: 700, color: "#1A202C" }}
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
    </Container>
  );
}
