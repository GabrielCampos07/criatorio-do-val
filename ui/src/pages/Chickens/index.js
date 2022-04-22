import React, { useEffect, useState, useRef } from "react";

import Header from "../../components/Header";
import api from "../../services/api.js";

import { DataGrid } from '@mui/x-data-grid';
import { Container } from "@material-ui/core";

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'chickenName', headerName: 'Nome', width: 130 },
    { field: 'chickenAge', headerName: 'Idade', width: 130 },
    { field: 'color', headerName: 'Color', width: 130, },
    {
        field: 'chickenGender', headerName: 'Sexo', width: 130,
    },
];

export default function Chickens() {

    const [chickens, setChickens] = useState([]);

    const style = {
        position: 'relative',
        top: '8vw'
    }

    const firstRenderRef = useRef(true);

    const loadData = () => {
        api
            .get("/galinhas")
            .then((response) => {
                response.data.forEach((item, index) => {
                    setChickens(chickens => [...chickens, {
                        id: item.id,
                        chickenName: item.nome,
                        chickenAge: item.idade,
                        color: item.cor,
                        chickenGender: item.sexo
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
                        rows={chickens}
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