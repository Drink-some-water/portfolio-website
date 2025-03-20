
import Navbar from "./components/navbar"

export default function DashboardLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar/>
                <main>{children}</main>
            </body>
        </html>
    );
};