import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Switch from "@material-ui/core/Switch";
import Drawer from "@material-ui/core/Drawer";
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EggIcon from '@mui/icons-material/Egg';
import ContactsIcon from '@mui/icons-material/Contacts';
import HomeIcon from '@mui/icons-material/Home';
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NightsStayIcon from '@mui/icons-material/NightsStay';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { orange, lightBlue, deepPurple, deepOrange } from "@material-ui/core/colors";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";


const drawerWidth = 180;

const useStyles = makeStyles(theme => ({
    toolbar: {
        paddingRight: 24
    },
    toolbarIcon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "0 8px",
        ...theme.mixins.toolbar
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginRight: 36
    },
    menuButtonHidden: {
        display: "none"
    },
    title: {
        flexGrow: 1
    },
    drawerPaper: {
        position: "relative",
        whiteSpace: "nowrap",
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    drawerPaperClose: {
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9)
        }
    },
    appBarSpacer: theme.mixins.toolbar,
    paper: {
        padding: theme.spacing(2),
        display: "flex",
        overflow: "auto",
        flexDirection: "column"
    }
}));

export default function Header(props) {
    const [open, setOpen] = useState(false);
    const [darkState, setDarkState] = useState(false);
    const palletType = darkState ? "dark" : "light";
    const mainPrimaryColor = darkState ? orange[500] : lightBlue[500];
    const mainSecondaryColor = darkState ? deepOrange[900] : deepPurple[500];
    const darkTheme = createTheme({
        palette: {
            type: palletType,
            primary: {
                main: mainPrimaryColor
            },
            secondary: {
                main: mainSecondaryColor
            }
        }
    });
    const classes = useStyles();

    const { onClick } = props

    const handleThemeChange = () => {
        setDarkState(!darkState);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    const itemsList = [
        {
            text: "Início",
            icon: <HomeIcon style={darkState ? { color: 'black' } : {}} />,
            onClick: () => console.log('teste')
        },
        {
            text: "Galinhas",
            icon: <FlutterDashIcon style={darkState ? { color: 'black' } : {}} />,
            onClick: () => console.log('teste2')
        },
        {
            text: "Ovos",
            icon: <EggIcon style={darkState ? { color: 'black' } : {}} />,
            onClick: () => console.log('teste3')
        },
        {
            text: "Contatos",
            icon: <ContactsIcon style={darkState ? { color: 'black' } : {}} />,
            onClick: () => console.log('teste4')
        }
    ];


    return (
        <ThemeProvider theme={darkTheme}>
            <header>
                <CssBaseline />
                <AppBar
                    position="absolute"
                    className={clsx(classes.appBar, open && classes.appBarShift)}
                >
                    <Toolbar className={classes.toolbar}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            className={clsx(
                                classes.menuButton,
                                open && classes.menuButtonHidden
                            )}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            className={classes.title}
                        >
                            Criatório do Val
                        </Typography>
                        <Switch checked={darkState}
                            onChange={handleThemeChange}
                            onClick={onClick}
                        />
                        {darkState ? <NightsStayIcon /> : <WbSunnyIcon />}
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="temporary"
                    classes={{
                        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
                    }}
                    open={open}
                >
                    <div className={classes.toolbarIcon}>
                        <IconButton onClick={handleDrawerClose}>
                            <ChevronLeftIcon style={darkState ? { color: 'black' } : {}} />
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        {itemsList.map((item, index) => {
                            const { text, icon, onClick } = item;
                            return (
                                <ListItem
                                    style={darkState ? { color: 'black' } : {}}
                                    button key={text} onClick={onClick}>
                                    {icon && <ListItemIcon>{icon}</ListItemIcon>}
                                    <ListItemText primary={text} />
                                </ListItem>
                            );
                        })}
                    </List>
                </Drawer>
            </header>
        </ThemeProvider>
    );
}
