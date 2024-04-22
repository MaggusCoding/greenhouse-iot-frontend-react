
import { useEffect, useState } from 'react';
import { getTemperatureData } from '../../services/temperatureService.ts';
import { TemperatureFormatted } from '../../models/temperatureFormatted.ts';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import formatFirestoreTimestamp from "../../utilities/formatDate.ts";
const TemperatureChart = () => {
    const [temperatures, setTemperatures] = useState<TemperatureFormatted[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const rawData = await getTemperatureData();
            const formattedData = rawData.map(item => ({
                ...item,
                time: formatFirestoreTimestamp(item.time), // Convert timestamps to readable format
                temperature: item.temperature
            }));
            // Sorting by time, assuming 'time' is a string in a sortable format
            formattedData.sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());
            setTemperatures(formattedData);
        };
        fetchData();
    }, []);

    return (
        <div className="bg-background p-4 rounded-lg shadow-lg" style={{ width: '100%', height: '400px' }}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={temperatures} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="temperature" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TemperatureChart;