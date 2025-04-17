import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    padding: 2rem 2rem;
  }
`;

export const FeatureRow = styled.div<{ reverse?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  @media (min-width: 992px) {
    flex-direction: ${props => (props.reverse ? "row-reverse" : "row")};
    align-items: center;
    gap: 6rem;
  }
`;


export const ImageColumn = styled.div`
  width: 100%;
  max-width: 650px;
  
  @media (min-width: 992px) {
    width: 55%;
  }
  
  img {
    height: auto;
  }
`;

export const ContentColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (min-width: 992px) {
    width: 45%;
  }
`;

export const IconCircle = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

export const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #4a90e2;
  margin-bottom: 1.5rem;
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const SubHeading = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: #333;
  max-width: 600px;
  margin-bottom: 0;
  
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const FeatureButton = styled.a`
  display: inline-block;
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  background-color: #4a90e2;
  color: white;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #3a7bc8;
    transform: translateY(-2px);
  }
`;