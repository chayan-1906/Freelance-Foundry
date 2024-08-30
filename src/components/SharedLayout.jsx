import Navbar from "@/components/Navbar";

function SharedLayout({children}) {
    return (
        <div>
            <header><Navbar/></header>
            <main className={'mx-8 py-28'}>{children}</main>
        </div>
    );
}

export default SharedLayout;
