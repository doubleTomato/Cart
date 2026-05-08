import { useState } from "react";

interface ImageProps {
  src?: string;       // 이미지 경로 null체크
  alt: string;       
  classN?: string; //  위해서 추가
}
export const Image = ({ src, alt, classN = "" }: ImageProps) => {
    const [isError, setIsError] = useState(false);
    const defaultImage = "/images/no-image.png"; 
    console.log(!src);
    return (
        <div className={`overflow-hidden bg-gray-100 ${classN}`}>
            <img
              // 에러 시 기본이미지 출력
              src={isError || !src ?  defaultImage : "/images/" + src}
              alt={alt}
              className="default-image"
              // 이미지 로드 실패 시 true로 변경
              onError={() => setIsError(true)}
              loading="lazy"
            />
        </div>
    )
}