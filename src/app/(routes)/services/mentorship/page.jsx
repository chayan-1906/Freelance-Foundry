import SharedLayout from "@/components/SharedLayout";
import {Text} from "@radix-ui/themes";
import {webClientUrl} from "@/globals/Constants";

export async function generateMetadata({params, searchParams}, parent) {
    const title = 'Mentorship';
    const description = '';
    const icons = (await parent).icons ?? {};

    const metadata = {
        title: title,
        description: description,
        // image: {url: imageUrl, alt: imageAlt},
        url: webClientUrl,
        // keywords: keywords,
        type: 'website',
        icons,
        openGraph: {
            title: title,
            description: description,
            url: webClientUrl,
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: title,
            description: description,
            url: webClientUrl,
        },

    }

    return metadata;
}

function MentorshipPage() {
    return (
        <SharedLayout>
            <Text className={'text-center font-bold text-3xl'}>Mentorship</Text>
        </SharedLayout>
    );
}

export default MentorshipPage;
