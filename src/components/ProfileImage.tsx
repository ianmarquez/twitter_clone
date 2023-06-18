import Image from 'next/image';
import { VscAccount } from 'react-icons/vsc';

type ProfileImage = {
  src: string | null | undefined;
  className?: string;
}

export function ProfileImage ({
  src,
  className = ''
}: ProfileImage) {
  return <div className={`relative h-12 w-12 overflow-hidden rounded-full ${className}`}>
    { src == null 
      ? <VscAccount className='w-full h-full'/> 
      : <Image src={src} alt='Profile Image' quality={100} fill/>
    }
  </div>;
}