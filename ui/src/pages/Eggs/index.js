import React, { useEffect, useState, useRef } from "react";

import Header from "../../components/Header";
import api from "../../services/api.js";

import { DataGrid } from '@mui/x-data-grid';
import { Container } from "@material-ui/core";

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'eggsDad', headerName: 'Pai', width: 130 },
    { field: 'eggsMom', headerName: 'Mãe', width: 130 },
    { field: 'eggsHacthed', headerName: 'Chocado', width: 130, },
    {
        field: 'eggsBorn', headerName: 'Nasce', width: 130,
    },
];

export default function Eggs() {

    const [eggs, setEggs] = useState([]);

    const style = {
        position: 'relative',
        top: '8vw'
    }

    const firstRenderRef = useRef(true);

    const loadData = () => {
        api
            .get("/ovos")
            .then((response) => {
                response.data.forEach((item, index) => {
                    setEggs(eggs => [...eggs, {
                        id: item.id,
                        eggsDad: item.pai,
                        eggsMom: item.mae,
                        eggsHacthed: item.chocado,
                        eggsBorn: item.nasce
                    }]);
                })
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }

    useEffect(() => {
        if (firstRenderRef.current) {
            firstRenderRef.current = false;
            return;
        }

        loadData();
    }, []);



    return (
        <main>
            <Header></Header>
            <Container style={style}>
                <div style={{ height: 527, width: '100%' }}>
                    <DataGrid
                        rows={eggs}
                        columns={columns}
                        pageSize={8}
                        rowsPerPageOptions={[8]}
                        checkboxSelection
                    />
                </div>
            </ Container>
        </main>
    )
}