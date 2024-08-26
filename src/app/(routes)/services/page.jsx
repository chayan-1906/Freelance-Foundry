import SharedLayout from "@/components/SharedLayout";
import ClientServicesPage from "@/app/(routes)/services/ClientServicesPage";
import {webClientUrl} from "@/globals/Constants";

export async function generateMetadata({params, searchParams}, parent) {
    const title = 'Services';
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

function ServicesPage() {
    return (
        <SharedLayout>
            <ClientServicesPage/>
        </SharedLayout>
    );
}

export default ServicesPage;
