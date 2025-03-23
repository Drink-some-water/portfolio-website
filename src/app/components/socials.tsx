import Link from "next/link";

const Socials = () => {

    return (
        <nav>
            <Link
                href='Sean Collins Software Engineer and AI Trainer 2025.pdf'
                download={'Sean Collins Software Engineer and AI Trainer 2025.pdf'}
                target="_blank"
                rel="noopener noreferrer">
                <button>resume pdf</button>
            </Link>
            <Link href='https://github.com/Drink-some-water'
                target="_blank"
                rel="noopener noreferrer">
                <button>Github</button>
            </Link>
            <Link href='https://www.linkedin.com/in/sean-collins-4a6279252/'
                target="_blank"
                rel="noopener noreferrer">
                <button>LinkedIn</button>
            </Link>
            <Link href="mailto:sean.collins.developer@gmail.com?subject=Requesting an Interview/Collaboration&body=Hello, I'd like to discuss an opportunity...">
                <button>Email</button>
            </Link>
        </nav>
    );
};

export default Socials