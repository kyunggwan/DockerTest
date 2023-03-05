import { ResponsiveLine } from '@nivo/line'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';

function Allchart() {
    let { drive } = useSelector((state) => { return state })

    const data = [{
        "id": 2612,
        "data": drive.filter((a) => a.car_num == 2612).map((a, i) => {
            return {
                key: i,
                "x": a.date,
                "y": a.dsr
            }
        })
    },
    {
        "id": 3897,
        "data": drive.filter((a) => a.car_num == 3897).map((a, i) => {
            return {
                key: i,
                "x": a.date,
                "y": a.dsr
            }
        })
    },
    {
        "id": 9582,
        "data": drive.filter((a) => a.car_num == 9582).map((a, i) => {
            return {
                key: i,
                "x": a.date,
                "y": a.dsr
            }
        })
    },
    {
        "id": 4699,
        "data": drive.filter((a) => a.car_num == 4699).map((a, i) => {
            return {
                key: i,
                "x": a.date,
                "y": a.dsr
            }
        })
    },
    {
        "id": 4985,
        "data": drive.filter((a) => a.car_num == 4985).map((a, i) => {
            return {
                key: i,
                "x": a.date,
                "y": a.dsr
            }
        })
    },
    {
        "id": 5221,
        "data": drive.filter((a) => a.car_num == 5221).map((a, i) => {
            return {
                key: i,
                "x": a.date,
                "y": a.dsr
            }
        })
    },
    {
        "id": 5634,
        "data": drive.filter((a) => a.car_num == 5634).map((a, i) => {
            return {
                key: i,
                "x": a.date,
                "y": a.dsr
            }
        })
    },
    {
        "id": 8993,
        "data": drive.filter((a) => a.car_num == 8993).map((a, i) => {
            return {
                key: i,
                "x": a.date,
                "y": a.dsr
            }
        })
    },
    {
        "id": 9007,
        "data": drive.filter((a) => a.car_num == 9007).map((a, i) => {
            return {
                key: i,
                "x": a.date,
                "y": a.dsr
            }
        })
    },
    {
        "id": 9357,
        "data": drive.filter((a) => a.car_num == 9357).map((a, i) => {
            return {
                key: i,
                "x": a.date,
                "y": a.dsr
            }
        })
    }]

    return (
        <>
            <h2 style={{ textAlign: 'center' }}>
                날자별 안전운행율
            </h2>
            <h4 style={{ textAlign: 'right' }}>
                기간 : 2022년12월01 - 2022년 12월14일
            </h4>
            <div style={{
                width: "113%",
                height: "687px",

            }}>
                <ResponsiveLine
                    data={data}
                    key={'id'}
                    margin={{ top: 20, right: 120, bottom: 80, left: 100 }}
                    xScale={{ type: 'point' }}
                    yScale={{
                        type: 'linear',
                        min: '98',
                        max: '100',
                        // stacked: true,
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
                    yFormat=" >-.2f"
                    curve="linear"
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        orient: 'bottom',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                    }}
                    axisLeft={{
                        orient: 'left',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                    }}
                    colors={{ scheme: 'category10' }}
                    pointColor={{ theme: 'labels.text.fill' }}
                    pointBorderWidth={3}
                    pointBorderColor={{ from: 'serieColor' }}
                    pointLabelYOffset={-12}
                    areaBlendMode="multiply"
                    areaOpacity={0}
                    useMesh={true}
                    legends={[
                        {
                            anchor: 'bottom-right',
                            direction: 'column',
                            justify: false,
                            translateX: 100,
                            translateY: 0,
                            itemsSpacing: 0,
                            itemDirection: 'left-to-right',
                            itemWidth: 80,
                            itemHeight: 20,
                            itemOpacity: 0.75,
                            symbolSize: 20,
                            symbolShape: 'circle',
                            symbolBorderColor: 'rgba(0, 0, 0, .5)',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemBackground: 'rgba(0, 0, 0, .03)',
                                        itemOpacity: 1
                                    }
                                }
                            ],
                        }
                    ]}
                />

            </div>
        </>
    );
}



export default Allchart;