import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Chart } from 'react-google-charts'
import * as serviceWorker from './serviceWorker';

const GoogleCharts = () => (
<Chart
  width={1000}
  height={350}
  chartType="Calendar"
  loader={<div>Loading Chart</div>}
  data={[
    [{ type: 'date', id: 'Date' }, { type: 'number', id: 'Won/Loss' }],
    [new Date(2012, 3, 13), 37032],
    [new Date(2012, 3, 14), 38024],
    [new Date(2012, 3, 15), 38024],
    [new Date(2012, 3, 16), 38108],
    [new Date(2012, 3, 17), 38229],
    [new Date(2013, 1, 4), 38177],
    [new Date(2013, 1, 5), 38705],
    [new Date(2013, 1, 12), 38210],
    [new Date(2013, 1, 13), 38029],
    [new Date(2013, 1, 19), 38823],
    [new Date(2013, 1, 23), 38345],
    [new Date(2013, 1, 24), 38436],
    [new Date(2013, 2, 10), 38447],
  ]}
  options={{
    title: 'Red Sox Attendance',
  }}
  rootProps={{ 'data-testid': '1' }}
/>
)

ReactDOM.render(<GoogleCharts />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
