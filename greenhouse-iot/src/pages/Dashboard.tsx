import TemperatureChart from "../components/temperature/TemperatureChart.tsx";
import CurrentTemperature from "../components/temperature/CurrentTemperature.tsx";
export default function Dashboard() {


    return (
        <div className="min-h-screen">
        <div className="h-full flex justify-center">
            <div className="flex flex-col md:flex-row items-stretch w-full max-w-6xl mx-auto p-4 gap-4">
                <div className="flex flex-col w-full md:w-1/4 p-2 min-h-[300px]">
                    <CurrentTemperature/>
                </div>
                <div className="flex flex-col w-full md:w-3/4 p-2 min-h-[300px]">
                    <TemperatureChart/>
                </div>
            </div>
        </div>
        </div>

    );
}