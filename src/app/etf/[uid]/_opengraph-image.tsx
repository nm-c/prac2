import { ImageResponse } from 'next/og';

export const alt = 'alt text'
export const size = {
  width: 1200,
  height: 630,
}

export async function generateStaticParams() {
  const assetUids = ['a1', 'a2', 'a3'];
  return assetUids.map((uid) => ({ uid }));
}

export default async function Image({ params : { uid } }: { params: { uid: string }}) {
  return new ImageResponse(
    <>
    <p>Image { uid }</p>
    </>
  );
}