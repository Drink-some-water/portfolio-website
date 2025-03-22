import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <Link href="/home">about</Link>
            <Link href="/about">about</Link>
            <Link href="/projects">projects</Link>
            <Link href="/resume">resume</Link>
        </nav>
    );
};

export default Navbar