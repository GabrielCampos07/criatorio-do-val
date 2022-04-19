import React from "react";

import Graphs from "../../components/graphs";
import Header from "../../components/Header";

import '../../assets/css/components/home.css';

import Box from '@mui/material/Box';
import { Container } from "@material-ui/core";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';




const chartData = [
    { ano: "2021", quantidade: 12 },
    { ano: "2022", quantidade: 5 },
];

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}



function Home(props) {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <main>
            <Header></Header>
            <Container className="container">
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                        textColor="inherit"
                        indicatorColor="primary"
                        value={value}
                        onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Galinhas" {...a11yProps(0)} />
                        <Tab label="Ovo" {...a11yProps(1)} />
                        <Tab label="Contatos" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <Graphs data={chartData} title={'galinhas'}></Graphs>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Graphs data={chartData} title={'ovos'}></Graphs>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Graphs data={chartData} title={'contatos'}></Graphs>
                </TabPanel>
            </Container>
        </main >
    )
}

export default Home;