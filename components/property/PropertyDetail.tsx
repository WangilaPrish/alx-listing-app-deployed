import Header from "../layout/Header";
import Footer from "../layout/Footer";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
