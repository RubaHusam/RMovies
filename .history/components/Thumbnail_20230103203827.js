/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';

export default function Thumbnail({ result }) {
  console.log(result);
  return (
    <div>
      <Image scr={result.pase_url} height={1080} width={1920} />
    </div>
  );
}
