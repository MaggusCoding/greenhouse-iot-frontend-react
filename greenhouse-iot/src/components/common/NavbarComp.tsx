import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {useState} from "react";

    const NavbarComp = () => {

      const [menuOpen, setIsOpen] = useState(false);
        return (
        <Navbar isBordered>
            <NavbarBrand>
                <Link className="font-bold" color="primary" href="/">
                    <img src="/greenhouse.png" alt="My Greenhouse Logo" style={{height: '50px', marginRight: '10px'}}/>
                    IOT Greenhouse
                </Link>
            </NavbarBrand>
            {/* Aligning the button and dropdown to the right */}
            <div className="lg:hidden absolute right-0">  {/* Added relative positioning */}
                <Button color="primary"  onClick={() => setIsOpen(!menuOpen)}>
                    ☰
                </Button>
                {/* Dropdown menu content positioned absolutely to the right */}
                <div className={`absolute right-0 top-full w-48 bg-background shadow-md border-black border-3 ${menuOpen ? 'block' : 'hidden'}`}>
                    <NavbarContent className="flex flex-col">
                        <NavbarItem>
                            <Link color="primary" href="/dashboard">
                                Dashboard
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link color="primary" href="#">
                                Integrations
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link href="#">Login</Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Button color="secondary" className="text-background">Learn more</Button>
                        </NavbarItem>
                    </NavbarContent>
                </div>
            </div>
            <NavbarContent className="sm:flex gap-4 hidden lg:flex" justify="center">
            <NavbarItem>
                    <Link className="font-bold" color="primary" href="/dashboard">
                        Dashboard
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="font-bold" color="primary" href="#">
                        Integrations
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link className="font-bold" href="#">Login</Link>
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">
                    <Button color="secondary" className="text-background">Sign up</Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
};

export default NavbarComp;
