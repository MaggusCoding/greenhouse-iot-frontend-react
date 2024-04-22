import { Card, CardHeader, CardBody, Divider, Image } from "@nextui-org/react";

export default function HomeCards() {
    return (
        <div className="flex flex-wrap gap-4 md:gap-8 justify-center p-4 bg-background text-foreground">
            <Card className="bg-primary shadow-lg rounded-lg overflow-hidden max-w-sm border-primary-200">
                <CardHeader className="flex items-center gap-3 p-4 bg-primary-500 text-primary-foreground rounded-t-lg">
                    <Image
                        alt="greenhouse logo"
                        height={60}
                        radius="sm"
                        src="/co2.png"
                        width={60}
                    />
                    <div className="flex flex-col">
                        <p className="text-md font-semibold">Environment Management</p>
                        <p className="text-sm text-background">Tailored micro-climate conditions for each plant.</p>
                    </div>
                </CardHeader>
                <Divider className="my-0" />
                <CardBody className="p-4 bg-primary-50 text-background">
                    <p>Harness the power of IoT to create and maintain the perfect climate for your crops. Our system uses real-time data analysis to adjust temperature, humidity, and CO2 levels automatically, ensuring optimal growing conditions year-round. With precise control at your fingertips, expect to see healthier plants and increased yields.</p>
                </CardBody>
            </Card>
            <Card className="bg-primary shadow-lg rounded-lg overflow-hidden max-w-sm border-primary-200">
                <CardHeader className="flex items-center gap-3 p-4 bg-primary-500 text-primary-foreground rounded-t-lg">
                    <Image
                        alt="water logo"
                        height={60}
                        radius="sm"
                        src="/water.png"
                        width={60}
                    />
                    <div className="flex flex-col">
                        <p className="text-md font-semibold">Smart Water Management</p>
                        <p className="text-sm text-background">Efficient irrigation tailored to each plant’s needs. </p>
                    </div>
                </CardHeader>
                <Divider className="my-0" />
                <CardBody className="p-4 bg-primary-50 text-background">
                    <p>Reduce water waste and improve plant health with our automated watering system. Leveraging soil moisture sensors and weather forecasts, the system delivers the right amount of water at the right time. This not only conserves a valuable resource but also promotes robust plant growth by preventing over or under-watering.</p>
                </CardBody>
            </Card>
            <Card className="bg-primary shadow-lg rounded-lg overflow-hidden max-w-sm border-primary-200">
                <CardHeader className="flex items-center gap-3 p-4 bg-primary-500 text-primary-foreground rounded-t-lg">
                    <Image
                        alt="light"
                        height={60}
                        radius="sm"
                        src="/lighting.png"
                        width={60}
                    />
                    <div className="flex flex-col">
                        <p className="text-md font-semibold">Advanced Adaptive Lighting</p>
                        <p className="text-sm text-background">Optimize growth with AI-driven light adjustments.</p>
                    </div>
                </CardHeader>
                <Divider className="my-0" />
                <CardBody className="p-4 bg-primary-50 text-background">
                    <p>Our smart lighting system uses AI to adjust the light spectrum and intensity based on the specific needs of your plants throughout their growth cycles. This approach maximizes photosynthesis efficiency while minimizing energy consumption. Experience up to a 30% reduction in energy costs with lighting that adapts to support healthy plant development and accelerated growth.</p>
                </CardBody>
            </Card>
        </div>
    );
}
