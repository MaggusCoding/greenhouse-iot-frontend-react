import { getNewestTemperatureData } from '../../services/temperatureService.ts';
import { TemperatureFormatted } from '../../models/temperatureFormatted.ts';
import {formatFirestoreTimestampDate, formatFirestoreTimestampHour} from "../../utilities/formatDate.ts";
import {useEffect, useState} from "react";
import {Card, CardBody, CardFooter, CardHeader, Divider, Image} from "@nextui-org/react";

const CurrentTemperature = () => {
    const [temperature, setTemperature] = useState<TemperatureFormatted | undefined>();

    useEffect(() => {
        const fetchData = async () => {
            const rawData = await getNewestTemperatureData();
            if (rawData.length > 0) {
                const item = rawData[0];  // First item only
                setTemperature({
                    ...item,
                    timeDate: formatFirestoreTimestampDate(item.time),
                    temperature: item.temperature,
                    timeHour: formatFirestoreTimestampHour(item.time)
                });
            }
        };
        fetchData();
    }, []);

    return (
        <div className="flex flex-col h-full">
        <Card className="bg-primary-100 p-4 rounded-lg shadow-lg justify-between h-full">
            <CardHeader className="text-center gap-2">
                <Image
                    alt="temperature logo"
                    height={60}
                    src="/celsius.png"
                    width={60}
                />
                <p className="text-md font-bold">Current Temperature</p>
            </CardHeader>
            <Divider />
            <CardBody>
                <div className="flex justify-center items-center p-5">
                <p className="text-5xl">{temperature?.temperature}°C</p>
                </div>
            </CardBody>
            <Divider />
            <CardFooter>
                <p className="text-sm">at {temperature?.timeDate} {temperature?.timeHour}</p>
            </CardFooter>
        </Card>
        </div>
    );
}

export default CurrentTemperature;