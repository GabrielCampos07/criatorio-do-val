import * as React from "react";

import '../../assets/css/components/graphs.css';

import { Animation, HoverState, EventTracker } from "@devexpress/dx-react-chart";
import { Chart, Legend, PieSeries, Title } from "@devexpress/dx-react-chart-material-ui";
import Paper from "@material-ui/core/Paper";

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
                    text={'Quantidade de ' + title + ' adquirida por mês'} />
                <Animation />
                <Legend />
                <EventTracker />
                <HoverState />
            </Chart>
        </Paper>
    );
}
