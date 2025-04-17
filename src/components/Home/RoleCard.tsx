import styled from "styled-components";
import { Card, Button } from "antd";
import { colors } from "../../constants/colors";

// Styled wrapper for the Card to apply hover and responsive styles
const StyledCard = styled(Card)`
  border-radius: 16px;
  background: linear-gradient(135deg, ${colors.White}, ${colors.LightBlue});
  text-align: center;
  border: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  /* Hover effect for desktop */
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }

  /* Disable transform on mobile to avoid layout issues */
  @media (max-width: 768px) {
    &:hover {
      transform: none; /* Disable scaling on mobile */
    }
  }
`;

// Styled component for the icon
const RoleIcon = styled.img`
  width: 60px;
  height: 60px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

// Styled component for the title
const RoleTitle = styled.h3`
  font-size: 20px;
  color: ${colors.DarkBlue};
  margin-bottom: 15px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

// Styled component for the button
const StyledButton = styled(Button)`
  font-size: 18px;
  color: #1890ff;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

interface RoleCardProps {
  title: string;
  icon: string; // Path to the icon image
  buttonText?: string; // Optional: Custom button text or icon (defaults to "→")
  onClick?: () => void; // Optional: Callback for button click
}

const RoleCard = ({
  title,
  icon,
  buttonText = "→",
  onClick,
}: RoleCardProps) => {
  return (
    <StyledCard hoverable>
      <RoleIcon src={icon} alt={`${title} icon`} />
      <RoleTitle>{title}</RoleTitle>
      <StyledButton
        type="link"
        onClick={onClick}
        aria-label={`Select ${title} role`}
      >
        {buttonText}
      </StyledButton>
    </StyledCard>
  );
};

export default RoleCard;
