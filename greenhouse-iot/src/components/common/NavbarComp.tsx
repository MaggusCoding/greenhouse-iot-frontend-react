import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {useState} from "react";

    const NavbarComp = () => {

      const [menuOpen, setIsOpen] = useState(false);
    return (
        <Navbar isBordered>
            <NavbarBrand>
                <Link color="primary" href="/">
                    <img src="/greenhouse.png" alt="My Greenhouse Logo" style={{height: '50px', marginRight: '10px'}}/>
                    IOT Greenhouse
                </Link>
            </NavbarBrand>
            {/* Aligning the button and dropdown to the right */}
            <div className="lg:hidden absolute right-0">  {/* Added relative positioning */}
                <Button auto ghost onClick={() => setIsOpen(!menuOpen)}>
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
                            <Button as={Link} color="primary" href="#" variant="flat">
                                Sign Up
                            </Button>
                        </NavbarItem>
                    </NavbarContent>
                </div>
            </div>
            <NavbarContent className="sm:flex gap-4 hidden lg:flex" justify="center">
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
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
};

export default NavbarComp;
