import { ResponsiveLine } from '@nivo/line'
import 'bootstrap/dist/css/bootstrap.min.css';

function Chart({ listsafety, listoil }) {

    const data = [{
        "id": listsafety[0]?.car_num + '안전운행율',
        "data": listsafety.map((a, i) => {
            return {
                "x": a.date,
                "y": a.dsr
            }
        })
    },
    {
        "id": listoil[0]?.car_num + '주유비',
        "data": listoil.map((a, i) => {
            return {
                "x": a.date,
                "y": a.oil_money * a.daily_distance
            }
        })
    }
    ]


    return (
        <>
            <div style={{
                width: "90%",
                height: "100%",
            }}>
                <ResponsiveLine
                    data={data}
                    key={data.id}
                    margin={{ top: 50, right: 50, bottom: 80, left: 60 }}
                    xScale={{ type: 'point' }}
                    yScale={{
                        type: 'linear',
                        min: '98.',
                        max: '100',
                        stacked: true,
                        reverse: false
                    }}
                    theme={{
                        /**
                         * label style (bar에 표현되는 글씨)
                         */
                        labels: {
                            text: {
                                fontSize: 18,
                                fill: "#000000",
                            },
                        },
                        /**
                         * legend style (default로 우측 하단에 있는 색상별 key 표시)
                         */
                        legends: {
                            text: {
                                fontSize: 19,
                                fill: "#000000",
                            },
                        },
                        axis: {
                            /**
                             * axis legend style (bottom, left에 있는 글씨)
                             */
                            legend: {
                                text: {
                                    fontSize: 20,
                                    fill: "#000000",
                                },
                            },
                            /**
                             * axis ticks style (bottom, left에 있는 값)
                             */
                            ticks: {
                                text: {
                                    fontSize: 20,
                                    fill: "#000000",
                                },
                            },
                        },
                    }}
                    yFormat=" >-"
                    axisTop={null}
                    axisRight={{
                        orient: 'right',
                        tickSize: 7,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: '',
                        legendOffset: 15
                    }}
                    axisBottom={{
                        orient: 'bottom',
                        tickSize: 10,
                        tickPadding: 5,
                        tickRotation: 20,
                        legendOffset: -15,
                        legendPosition: 'start'
                    }}
                    axisLeft={{
                        orient: 'left',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legendOffset: 20,
                        legendPosition: 'top'
                    }}
                    colors={{ scheme: 'category10' }}
                    lineWidth={6}
                    pointSize={7}
                    pointColor={{ from: 'color', modifiers: [] }}
                    pointBorderWidth={3}
                    pointBorderColor={{ from: 'serieColor' }}
                    pointLabelYOffset={-12}
                    enableSlices="x"
                    useMesh={true}
                    legends={[
                        {
                            dataFrom: 'keys',
                            anchor: 'top-right',
                            direction: 'column',
                            justify: false,
                            translateX: -90,
                            translateY: -40,
                            itemsSpacing: 0,
                            fontSize: 50,
                            itemDirection: 'left-to-right',
                            itemWidth: 75,
                            itemHeight: 20,
                            itemOpacity: 0.75,
                            symbolSize: 12,
                            symbolShape: 'circle',
                            symbolBorderColor: 'rgba(0, 0, 0, .5)',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemBackground: 'rgba(0, 0, 0, .03)',
                                        itemOpacity: 1
                                    },
                                },
                            ],
                        },
                    ]}
                />
            </div>
        </>
    );
}



export default Chart; 