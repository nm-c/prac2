import { Metadata } from "next";

export async function generateMetadata({ params : { uid } }: { params: { uid: string }}): Promise<Metadata> {
  return {
    title: `etf ${uid}`,
    description: `This is the description of the etf ${uid}`,
    openGraph: {
      siteName: "My Site Name",
      type: "website",
      description: `This is the description of the etf ${uid}`,
      title: `etf ${uid}`,
      url: `/etfs/${uid}`,
    }
  };
}

// export const metadata: Metadata = {
//   metadataBase: new URL('https://acme.com'),
//   alternates: {
//     canonical: '/',
//     languages: {
//       'en-US': '/en-US',
//       'de-DE': '/de-DE',
//     },
//   },
//   openGraph: {
//     images: '/og-image.png',
//   },
// }

export async function generateStaticParams() {
  const assetUids = ['a1', 'a2', 'a3'];
  return assetUids.map((uid) => ({ uid }));
}

export default function EtfPage({ params: { uid } }: { params: { uid: string } }) {
  return (
    <div>
      <p>Data</p>
      <pre>{JSON.stringify(uid)}</pre>
    </div>
  );
}
