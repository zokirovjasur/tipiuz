"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
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
import { useTranslations } from "next-intl";

// Mock authentication hook
const useAuth = () => {
    const [isAdmin, setIsAdmin] = React.useState(false);
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    const login = () => {
        setIsLoggedIn(true);
        setIsAdmin(true);
    };

    const logout = () => {
        setIsLoggedIn(false);
        setIsAdmin(false);
    };

    return { isAdmin, isLoggedIn, login, logout };
};

const languages = [
    { code: "uz", label: "O'zbek" },
    { code: "ru", label: "Русский" },
    { code: "en", label: "English" },
];

export default function Navbar() {
    const t = useTranslations("Navigation");
    const router = useRouter();
    const pathname = usePathname();
    const currentLocale = useLocale();

    const pages = [
        { name: t("about"), path: "/about" },
        { name: t("departments"), path: "/departments" },
        { name: t("faculties"), path: "/faculties" },
        { name: t("news"), path: "/news" },
        { name: t("services"), path: "/services" },
        { name: t("admission"), path: "/admission" },
        { name: t("contact"), path: "/contact" },
    ];

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

    const handleLanguageChange = (lang: string) => {
        if (lang !== currentLocale) {
            router.push(`/${lang}${pathname.replace(`/${currentLocale}`, "")}`);
        }
        handleCloseLangMenu();
    };

    const drawer = (
        <Box
            sx={{
                height: "100%",
                bgcolor: "#2B2D42",
                color: "white",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Box
                sx={{ display: "flex", justifyContent: "space-between", p: 2 }}
            >
                <Image src="/logo1.png" alt="Logo" width={48} height={48} />
                <IconButton
                    onClick={handleDrawerToggle}
                    sx={{ color: "white" }}
                >
                    <Close />
                </IconButton>
            </Box>

            <List sx={{ flex: 1, textAlign: "center" }}>
                {pages.map(({ name, path }) => (
                    <ListItem key={name} disablePadding>
                        <ListItemButton
                            component={Link}
                            href={`/${currentLocale}${path}`}
                        >
                            <ListItemText primary={name} />
                        </ListItemButton>
                    </ListItem>
                ))}
                {isAdmin && (
                    <ListItem disablePadding>
                        <ListItemButton component={Link} href="/admin">
                            <ListItemText primary="Admin Panel" />
                        </ListItemButton>
                    </ListItem>
                )}
            </List>

            <Box sx={{ display: "flex", justifyContent: "center", p: 3 }}>
                <Button
                    startIcon={<LanguageIcon />}
                    sx={{ color: "white" }}
                    onClick={handleOpenLangMenu}
                >
                    {languages.find((l) => l.code === currentLocale)?.label ||
                        "Uz"}
                </Button>
            </Box>
        </Box>
    );

    return (
        <AppBar position="sticky" sx={{ bgcolor: "#404B7D", zIndex: 1000 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", lg: "none" },
                        }}
                    >
                        <IconButton
                            onClick={handleDrawerToggle}
                            sx={{ color: "white" }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>

                    <Box sx={{ display: "flex", flexGrow: { xs: 1, lg: 0 } }}>
                        <Link href="/">
                            <Image
                                src="/logo.svg"
                                alt="Logo"
                                width={200}
                                height={65}
                            />
                        </Link>
                    </Box>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", lg: "flex" },
                            ml: "420px",
                        }}
                    >
                        {pages.map(({ name, path }) => (
                            <Button
                                key={name}
                                component={Link}
                                href={`/${currentLocale}${path}`}
                                sx={{ color: "white", textTransform: "none" }}
                            >
                                {name}
                            </Button>
                        ))}
                        {isAdmin && (
                            <Button
                                component={Link}
                                href="/admin"
                                sx={{ color: "white", textTransform: "none" }}
                            >
                                Admin Panel
                            </Button>
                        )}
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <IconButton
                            sx={{ backgroundColor: "white", color: "#394269" }}
                        >
                            <SearchIcon />
                        </IconButton>

                        <Box sx={{ ml: 1 }}>
                            <Button
                                onClick={handleOpenLangMenu}
                                sx={{ color: "white", textTransform: "none" }}
                                startIcon={<LanguageIcon />}
                            >
                                {languages.find((l) => l.code === currentLocale)
                                    ?.label || "Uz"}
                            </Button>
                            <Menu
                                anchorEl={anchorElLang}
                                open={Boolean(anchorElLang)}
                                onClose={handleCloseLangMenu}
                            >
                                {languages.map(({ code, label }) => (
                                    <MenuItem
                                        key={code}
                                        onClick={() =>
                                            handleLanguageChange(code)
                                        }
                                    >
                                        <Typography>{label}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <Button
                            onClick={isLoggedIn ? logout : login}
                            variant="outlined"
                            sx={{
                                ml: 2,
                                backgroundColor: "white",
                                color: "#394269",
                            }}
                        >
                            {isLoggedIn ? "Logout" : "Login"}
                        </Button>
                    </Box>
                </Toolbar>
            </Container>

            <Drawer
                variant="temporary"
                anchor="left"
                open={mobileOpen}
                onClose={handleDrawerToggle}
            >
                {drawer}
            </Drawer>
        </AppBar>
    );
}
