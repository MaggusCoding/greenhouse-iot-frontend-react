import { useEffect, useState } from 'react';
import {getTemperatureDataLast24Hours } from '../../services/temperatureService.ts';
import { TemperatureFormatted } from '../../models/temperatureFormatted.ts';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { formatFirestoreTimestampDate, formatFirestoreTimestampHour } from "../../utilities/formatDate.ts";

const TemperatureChart = () => {
    const [temperatures, setTemperatures] = useState<TemperatureFormatted[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const rawData = await getTemperatureDataLast24Hours();

            const formattedData = rawData.map(item => ({
                ...item,
                timeDate: formatFirestoreTimestampDate(item.time), // Convert timestamps to readable format
                temperature: item.temperature,
                timeHour: formatFirestoreTimestampHour(item.time)
            }))

            setTemperatures(formattedData);
        };

        fetchData();
    }, []);

    const generateTicks = (data: TemperatureFormatted[]): string[] => {
        return data.map(item => item.timeHour); // Returns an array of strings representing hours
    };

    return (
        <div className="bg-primary-100 p-4 rounded-lg shadow-lg" style={{ width: '100%', height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={temperatures} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#064120" />
                    <XAxis dataKey="timeHour"
                           axisLine={{ stroke: "#064120" }}
                           tick={{ fill: "#064120" }}
                           ticks={generateTicks(temperatures)}
                           tickFormatter={tick => tick}/>
                    <YAxis axisLine={{ stroke: "#064120" }} tick={{ fill: "#064120" }}/>
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="temperature" stroke="#064120" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TemperatureChart;
