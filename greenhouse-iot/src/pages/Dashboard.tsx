import TemperatureChart from "../components/temperature/TemperatureChart.tsx";
export default function Dashboard() {


    return (
        <div className="flex min-h-screen p-4">
            <TemperatureChart></TemperatureChart>
        </div>
    );
}