import {createServerRunner} from "@aws-amplify/adapter-nextjs";
import {authConfig} from "@/app/amplify-cognito-config";
import {fetchAuthSession, getCurrentUser} from 'aws-amplify/auth/server';

export const {runWithAmplifyServerContext} = createServerRunner({
    config: {
        Auth: authConfig,
    }
});

export async function authenticatedUser(context) {
    return await runWithAmplifyServerContext({
        nextServerContext: context,
        operation: async (contextSpec) => {
            try {
                const session = await fetchAuthSession(contextSpec);
                if (!session.tokens) return;
                const user = {
                    ...(await getCurrentUser(contextSpec)),
                    isAdmin: false,
                }
                const groups = session.tokens.accessToken.payload['cognito:groups'];
                user.isAdmin = Boolean(groups && groups.includes('Admins'));

                return user;
            } catch (error) {
                console.log('inside catch of authenticate user:', error);
            }
        },
    });
}
