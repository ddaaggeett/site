import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MediaQuery from 'react-responsive'
import { PieChart, Pie } from 'recharts'
import { occupation } from './data'

class DoughnutChart extends Component {

    render() {

        return (
            <div>
                <MediaQuery maxWidth={991}>
                    <div id="occupation_mobile" className="left_item" >
                        <div id="occ_mobile"><p className="occupation_detail">two parts father</p><p className="occupation_detail">one part engineer</p></div>
                        <div id="chart_mobile">
                            <PieChart width={800} height={400} >
                                <Pie
                                    startAngle={90}
                                    endAngle={270}
                                    data={occupation}
                                    cx={196} cy={80}
                                    fill="#8AACB8"
                                    innerRadius={40}
                                    outerRadius={75}
                                    dataKey="value" />
                            </PieChart>
                        </div>
                    </div>
                </MediaQuery>

                <MediaQuery minWidth={992}>
                    <div id="occupation" className="left_item" >
                        <div id="occ"><p className="occupation_detail">two parts father</p><p className="occupation_detail">one part engineer</p></div>
                        <div id="chart">
                            <PieChart width={800} height={400} >
                                <Pie
                                    startAngle={90}
                                    endAngle={270}
                                    data={occupation}
                                    cx={396} cy={150}
                                    fill="#8AACB8"
                                    innerRadius={80}
                                    outerRadius={150}
                                    dataKey="value" />
                            </PieChart>
                        </div>
                    </div>
                </MediaQuery>

            </div>
        );
    }
}

export default DoughnutChart
