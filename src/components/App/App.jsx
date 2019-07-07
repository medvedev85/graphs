import React from 'react';

import { LineChartConnectNulls } from '../LineChartConnectNulls/LineChartConnectNulls';
import { LineChartWithReferenceLines } from '../LineChartWithReferenceLines/LineChartWithReferenceLines';
import { StackedAreaChart } from '../StackedAreaChart/StackedAreaChart';
import { SimpleBarChart } from '../SimpleBarChart/SimpleBarChart';
import { BrushBarChart } from '../BrushBarChart/BrushBarChart';
import { LineBarAreaComposedChart } from '../LineBarAreaComposedChart/LineBarAreaComposedChart';
import { MultipleYAxesScatterChart } from '../MultipleYAxesScatterChart/MultipleYAxesScatterChart';
import { TwoLevelPieChart } from '../TwoLevelPieChart/TwoLevelPieChart';
import { SpecifiedDomainRadarChart } from '../SpecifiedDomainRadarChart/SpecifiedDomainRadarChart';
import { SimpleRadialBarChart } from '../SimpleRadialBarChart/SimpleRadialBarChart';

import './App.css';

export const App = props => {
    return (
        <div className="wrapper">
            <div>
                <LineChartConnectNulls />
            </div>

            <div>
                <LineChartWithReferenceLines />
            </div>

            <div>
                <StackedAreaChart />
            </div>

            <div>
                <SimpleBarChart />
            </div>

            <div>
                <BrushBarChart />
            </div>

            <div>
                <LineBarAreaComposedChart />
            </div>

            <div>
                <MultipleYAxesScatterChart />
            </div>

            <div>
                <TwoLevelPieChart />
            </div>

            <div>
                <SpecifiedDomainRadarChart />
            </div>

            <div>
                <SimpleRadialBarChart />
            </div>

        </div>
    )
}