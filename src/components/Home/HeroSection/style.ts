import styled from "styled-components";
import { Typography, Rate } from "antd";
import { colors } from "../../../constants/colors";

const { Title } = Typography;

export const MainHeading = styled.h1`
  font-size: 60px;
  margin-bottom: 20px;
  font-weight: 900;
  color: ${colors.DarkBlue};
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

export const SubHeading = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${colors.DarkBlue};
  max-width: 500px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const SectionTitle = styled(Title)`
  color: ${colors.DarkBlue};
  margin-bottom: 20px;
  font-size: 20px !important;

  @media (max-width: 768px) {
    font-size: 18px !important;
  }
`;

export const RatingText = styled.p`
  margin-top: 10px;
  color: ${colors.DarkBlue};
  display: inline-flex;
  align-items: center;
  gap: 5px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const StyledRate = styled(Rate)`
  font-size: 16px;

  .ant-rate-star-first,
  .ant-rate-star-second {
    color: #e8e8e8;
    transition: color 0.3s;
  }

  .ant-rate-star-full .ant-rate-star-first,
  .ant-rate-star-full .ant-rate-star-second {
    color: #ffd700;
  }

  .ant-rate-star-half .ant-rate-star-first {
    color: #ffd700;
  }

  .ant-rate-star-half .ant-rate-star-second {
    color: #e8e8e8;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;