import Temperature from "../components/temperature/Temperature.tsx";
import {Button} from "@nextui-org/react";
export default function Dashboard() {


    return (
        <div>
            <Button color="primary"> Drück mich hoch</Button>
            Hello, Dashboard!
            <Temperature></Temperature>
        </div>
    );
}