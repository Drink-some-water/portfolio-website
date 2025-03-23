import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <Link href="/">home</Link>
            <Link href="/">about</Link>
            <Link href="/">projects</Link>
            <Link href="/pages/resume">resume</Link>
        </nav>
    );
};

export default Navbar