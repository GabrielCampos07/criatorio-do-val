import React, { useEffect, useState, useRef } from "react";

import Header from "../../components/Header";
import api from "../../services/api.js";

import { DataGrid } from '@mui/x-data-grid';
import { Container } from "@material-ui/core";

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'contactName', headerName: 'Nome', width: 130 },
    { field: 'contactNumber', headerName: 'Numero', width: 130 },
    { field: 'contactCity', headerName: 'City', width: 130, },
    {
        field: 'contactEmail', headerName: 'Email', width: 130,
    },
];

export default function Contacts() {

    const [contacts, setContacts] = useState([]);

    const style = {
        position: 'relative',
        top: '8vw'
    }

    const firstRenderRef = useRef(true);

    const loadData = () => {
        api
            .get("/contatos")
            .then((response) => {
                response.data.forEach((item, index) => {
                    setContacts(contacts => [...contacts, {
                        id: item.id,
                        contactName: item.nome,
                        contactNumber: item.numero,
                        contactCity: item.cidade,
                        contactEmail: item.email
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
                        rows={contacts}
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