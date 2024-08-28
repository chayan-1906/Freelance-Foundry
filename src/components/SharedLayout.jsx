import Navbar from "@/components/Navbar";

function SharedLayout({children}) {
    return (
        <div>
            <header><Navbar/></header>
            <main className={'mx-8 py-24'}>{children}</main>
        </div>
    );
}

export default SharedLayout;
