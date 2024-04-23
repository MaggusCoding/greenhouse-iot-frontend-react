import {Button, Divider} from "@nextui-org/react";
import HomeCards from "../components/common/HomeCards.tsx";
export default function Home() {
    return (
        <div className="flex flex-col justify-between min-h-screen p-4">
            <header className="mt-20 text-center text-primary">
                <h1 className="text-3xl md:text-6xl font-bold">
                    The IOT solution for your Greenhouse
                </h1>
                <Divider className="my-5 mx-auto max-w-2xl" />  {/* Center the Divider */}
                <p className="text-lg font-bold max-w-xl mx-auto">
                    Effortless IoT integration for greenhouses. Harness the power of our open-source first strategy to revolutionize your growing environment.
                </p>
                <div className="flex space-x-4 mx-auto justify-center mt-4">
                    <Button color="primary" className="text-background">Get Started</Button>
                    <Button color="secondary" className="text-background">Learn more</Button>
                </div>
                <Divider className="my-5 mx-auto max-w-2xl" />
            </header>
            <div>
                <HomeCards></HomeCards>
            </div>
            <footer>
                {/* Footer content if needed, helps push the header up */}
            </footer>
        </div>
    );
}
