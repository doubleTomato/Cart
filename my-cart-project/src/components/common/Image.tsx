import { useState } from "react";

interface ImageProps {
  src?: string;       // 이미지 경로 null체크
  alt: string;       
  classN?: string; //  위해서 추가
}
export const Image = ({ src, alt, classN = "" }: ImageProps) => {
    const [isError, setIsError] = useState(false);
    const defaultImage = "/images/no-image.png";
    const [isLoaded, setIsLoaded] = useState(false);
    return (
        <div className={`overflow-hidden bg-gray-100 ${classN}`}
        style={{ 
        position: 'relative', 
        overflow: 'hidden'
      }}
        >
            <img
              // 에러 시 기본이미지 출력
              src={isError || !src ?  defaultImage : src}
              className={`default-image ${classN}`}
              onLoad={() => setIsLoaded(true)}
              alt={`${alt}`}
              // 이미지 로드 실패 시 true로 변경
              onError={() => setIsError(true)}
              loading="lazy"
              style={{
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 0.4s ease-in-out',
              objectFit: 'cover',
            }}
            />
        </div>
    )
}