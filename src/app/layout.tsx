import Navbar from "./components/navbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body>
                <Navbar />
                <main>{children}</main>
            </body>
        </html>
    );
}
