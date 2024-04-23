import TemperatureChart from "../components/temperature/TemperatureChart.tsx";
import CurrentTemperature from "../components/temperature/CurrentTemperature.tsx";
export default function Dashboard() {


    return (
        <div className="flex min-h-screen p-4">
            <TemperatureChart></TemperatureChart>
            <CurrentTemperature></CurrentTemperature>
        </div>
    );
}