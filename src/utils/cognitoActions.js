import {confirmSignUp, resendSignUpCode, signIn, signOut, signUp} from 'aws-amplify/auth';
import {confirmSignUpPath, homePath, signInPath} from "@/globals/Routes";
import {getErrorMessage} from "@/utils/get-error-message";

export async function handleSignUp(prevState, formData, router) {
    try {
        const {isSignUpComplete, userId, nextStep} = await signUp({
            username: String(formData.email),
            password: String(formData.password),    // Abcd123#
            options: {
                userAttributes: {
                    email: String(formData.email),
                    name: String(formData.name),
                },
                autoSignIn: true,
            },
        });
        router.replace(confirmSignUpPath);
    } catch (error) {
        console.log('inside catch of handleSignUp', error);
        return getErrorMessage(error);
    }
}

export async function handleSendEmailVerificationCode(prevState, formData) {
    let currentState;
    try {
        await resendSignUpCode({
            username: String(formData.get('email')),
        });
        currentState = {
            ...prevState, message: 'Code sent successfully',
        }
    } catch (error) {
        currentState = {
            ...prevState,
            errorMessage: getErrorMessage(error),
        }
    }
    return currentState;
}

export async function handleConfirmSignUp(prevState, formData, router) {
    try {
        const {isSignUpComplete, nextStep} = await confirmSignUp({
            username: String(formData.email),
            confirmationCode: String(formData.code),
        });
    } catch (error) {
        return getErrorMessage(error);
    }
    router.replace(signInPath);
}

export async function handleSignIn(prevState, formData, router) {
    let redirectLink = homePath;
    try {
        const {isSignedIn, nextStep} = await signIn({
            username: String(formData.email),
            password: String(formData.password),
        });
        if (nextStep.signInStep === 'CONFIRM_SIGN_UP') {
            await resendSignUpCode({
                username: String(formData.email),
            });
            redirectLink = confirmSignUpPath;
        }
        router.replace(redirectLink);
    } catch (error) {
        return getErrorMessage(error);
    }
}

export async function handleSignOut(router) {
    try {
        await signOut();
    } catch (error) {
        console.log(getErrorMessage(error));
    }
    router.replace(signInPath);
}

