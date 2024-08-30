import SharedLayout from "@/components/SharedLayout";
import ClientSignInPage from "@/app/(routes)/sign-in/ClientSignInPage";

function LoginPage() {
    return (
        <SharedLayout>
            <ClientSignInPage/>
        </SharedLayout>
    );
}

export default LoginPage;
