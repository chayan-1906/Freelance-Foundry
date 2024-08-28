import SharedLayout from "@/components/SharedLayout";
import ClientLoginPage from "@/app/(routes)/sign-in/ClientLoginPage";

function LoginPage() {
    return (
        <SharedLayout>
            <ClientLoginPage/>
        </SharedLayout>
    );
}

export default LoginPage;
