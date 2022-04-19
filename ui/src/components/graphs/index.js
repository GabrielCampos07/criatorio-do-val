import * as React from "react";
import Paper from "@material-ui/core/Paper";
import { Chart, PieSeries, Title, Legend } from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";
import '../../assets/css/components/graphs.css';

export default function PieChart(props) {

    const {
        data,
        title
    } = props

    return (
        <Paper>
            <Chart data={data}>
                <PieSeries
                    valueField="quantidade"
                    argumentField="ano" />
                <Title
                    text={'Quantidade de ' + title + ' adquiridas ao ano'} />
                <Animation />
                <Legend />
            </Chart>
        </Paper>
    );
}
