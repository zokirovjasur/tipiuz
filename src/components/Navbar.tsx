"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Close,
  Menu as MenuIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import LanguageIcon from "@mui/icons-material/Language";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";

// Mock authentication hook
const useAuth = () => {
  const [isAdmin, setIsAdmin] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const login = () => {
    setIsLoggedIn(true);
    setIsAdmin(true); // For demonstration, we'll make all logged-in users admins
  };

  const logout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  return { isAdmin, isLoggedIn, login, logout };
};

const pages = [
  "Institut haqida",
  "Bo'limlar",
  "Fakultetlar",
  "Yangiliklar",
  "Xizmatlar",
  "Qabul",
  "Bog'lanish",
];

const languages = ["O'zbek", "Русский", "English"];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorElLang, setAnchorElLang] = React.useState<null | HTMLElement>(
    null
  );
  const { isAdmin, isLoggedIn, login, logout } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleOpenLangMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElLang(event.currentTarget);
  };

  const handleCloseLangMenu = () => {
    setAnchorElLang(null);
  };

  const drawer = (
    <Box
      sx={{
        height: "100%",
        bgcolor: "#2B2D42",
        color: "white",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header with Logo and Close Button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
        }}
      >
        <Image
          src="/logo1.png"
          alt="Institute Logo"
          width={48}
          height={48}
          className="rounded-full"
        />
        <IconButton onClick={handleDrawerToggle} sx={{ color: "white" }}>
          <Close />
        </IconButton>
      </Box>

      {/* Navigation Links */}
      <List
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: 4,
        }}
      >
        {pages.map((item) => (
          <ListItem key={item} disablePadding sx={{ width: "auto" }}>
            <ListItemButton
              sx={{
                textAlign: "center",
                px: 4,
                py: 1.5,
                "&:hover": {
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  sx: {
                    fontSize: "1.125rem",
                    fontWeight: 500,
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        {isAdmin && (
          <ListItem disablePadding sx={{ width: "auto" }}>
            <ListItemButton
              component={Link}
              href="/admin"
              sx={{
                textAlign: "center",
                px: 4,
                py: 1.5,
                "&:hover": {
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              <ListItemText
                primary="Admin Panel"
                primaryTypographyProps={{
                  sx: {
                    fontSize: "1.125rem",
                    fontWeight: 500,
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        )}
      </List>

      {/* Language Selector at Bottom */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 3,
        }}
      >
        <Button
          sx={{
            color: "white",
            bgcolor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "8px",
            px: 3,
            py: 1,
            "&:hover": {
              bgcolor: "rgba(255, 255, 255, 0.2)",
            },
          }}
          startIcon={<LanguageIcon />}
        >
          Uz
        </Button>
      </Box>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "#404B7D",
        zIndex: 1000,
        width: "100%",
        margin: 0,
        padding: 0,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ position: "relative" }}>
          {/* Mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", lg: "none" } }}>
            <IconButton
              size="large"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, color: "white" }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Logo */}
          <Box
            sx={{
              display: "flex",
              flexGrow: { xs: 1, lg: 0 },
              position: "absolute",
              left: { xs: "30px", lg: "100px" },
              top: { xs: "1px", lg: "7px" },
              bottom: { xs: "auto", lg: "2px" },
            }}
          >
            <Link
              href="/"
              onClick={(e) => {
                if (e.detail === 2) {
                  e.preventDefault();
                  window.location.href = "/admin";
                }
              }}
            >
              <Image
                src="/Logo.svg"
                alt="Logo"
                width={200.42}
                height={65}
                className="aspect-auto"
              />
            </Link>
          </Box>
          {/* Desktop menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", lg: "flex" },
              ml: "420px",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  my: 2,
                  color: "#FFFFFF",
                  fontSize: "14px",
                  fontFamily: "Inter, sans-serif",
                  display: "block",
                  textTransform: "none",
                  "&:hover": {
                    color: "rgba(255, 255, 255, 0.8)",
                  },
                }}
              >
                {page}
              </Button>
            ))}
            {isAdmin && (
              <Button
                component={Link}
                href="/admin"
                sx={{
                  my: 2,
                  color: "#FFFFFF",
                  fontSize: "14px",
                  fontFamily: "Inter, sans-serif",
                  display: "block",
                  textTransform: "none",
                  "&:hover": {
                    color: "rgba(255, 255, 255, 0.8)",
                  },
                }}
              >
                Admin Panel
              </Button>
            )}
          </Box>

          {/* Right Side Icons */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              position: "relative",
              left: { xs: 0, lg: "-40px" },
            }}
          >
            <IconButton
              size="large"
              sx={{
                backgroundColor: "#FFFFFF",
                color: "#394269",
                width: 35,
                height: 35,
                borderRadius: "50%",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                },
              }}
            >
              <SearchIcon sx={{ fontSize: 20, strokeWidth: 5 }} />
            </IconButton>

            <Box sx={{ ml: 1 }}>
              <Button
                onClick={handleOpenLangMenu}
                sx={{
                  color: "white",
                  textTransform: "none",
                  "&:hover": {
                    color: "rgba(255, 255, 255, 0.8)",
                  },
                }}
                startIcon={<LanguageIcon />}
              >
                Uz
              </Button>
              <Menu
                anchorEl={anchorElLang}
                open={Boolean(anchorElLang)}
                onClose={handleCloseLangMenu}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                {languages.map((lang) => (
                  <MenuItem key={lang} onClick={handleCloseLangMenu}>
                    <Typography textAlign="center">{lang}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Button
              onClick={isLoggedIn ? logout : login}
              variant="outlined"
              sx={{
                ml: 2,
                backgroundColor: "#FFFFFF",
                color: "#394269",
                borderColor: "#FFFFFF",
                display: { xs: "none", lg: "flex" },
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  borderColor: "rgba(255, 255, 255, 0.8)",
                  color: "#2c3555",
                },
              }}
            >
              {isLoggedIn ? "Logout" : "Login"}
            </Button>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", lg: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}
