import { getNewestTemperatureData } from '../../services/temperatureService.ts';
import { TemperatureFormatted } from '../../models/temperatureFormatted.ts';
import formatFirestoreTimestamp from "../../utilities/formatDate.ts";
import {useEffect, useState} from "react";

const CurrentTemperature: any = () => {
    const [temperature, setTemperature] = useState<TemperatureFormatted | undefined>();

    useEffect(() => {
        const fetchData = async () => {
            const rawData = await getNewestTemperatureData();
            if (rawData.length > 0) {
                const item = rawData[0]; // Take the first item since it's the only item
                const formattedData = {
                    ...item,
                    time: formatFirestoreTimestamp(item.time), // Convert timestamps to readable format
                    temperature: item.temperature
                };
                setTemperature(formattedData);
            }
        };
        fetchData();
    }, []);
    return (
        <div>
            {temperature?.time}
        </div>
    )
}

export default CurrentTemperature;