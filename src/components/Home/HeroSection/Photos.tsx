import styled from "styled-components";
import { colors } from "../../../constants/colors";

// Styled component for the container of scattered photos
const PhotoContainer = styled.div`
  position: relative;
  height: 400px;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 300px;
    margin: 0 auto;
  }
`;

// Central text
const CentralText = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  font-size: 28px;
  font-weight: 700;
  color: ${colors.DarkBlue};
  padding: 5px 20px;
  z-index: 2;
  max-width: 80%;

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 8px 16px;
  }
`;

// Styled component for the individual photo
const PhotoImage = styled.img`
  position: absolute;
  width: 180px;
  height: 120px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100px;
    height: 70px;
  }
`;

// Interface for a single photo's properties
interface PhotoProps {
  src: string;
  alt: string;
  top: string;
  left: string;
  rotate: string;
}

// Interface for the ScatteredPhotos component props
interface ScatteredPhotosProps {
  photos: PhotoProps[];
  centralText: string;
}

const ScatteredPhotos = ({ photos, centralText }: ScatteredPhotosProps) => {
  return (
    <PhotoContainer>
      {photos.map((photo, index) => (
        <PhotoImage
          key={index}
          src={photo.src}
          alt={photo.alt}
          style={{
            top: photo.top,
            left: photo.left,
            transform: `rotate(${photo.rotate})`,
          }}
        />
      ))}
      <CentralText>{centralText}</CentralText>
    </PhotoContainer>
  );
};

export default ScatteredPhotos;
