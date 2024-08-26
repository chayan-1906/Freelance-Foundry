import SharedLayout from "@/components/SharedLayout";
import ClientHomePage from "@/app/(routes)/(home)/ClientHomePage";

function Home() {
    return (
        <div>
            <SharedLayout>
                <ClientHomePage/>
            </SharedLayout>
        </div>
    );
}

export default Home;
