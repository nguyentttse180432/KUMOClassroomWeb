import { Row, Col } from "antd";
import RoleCard from "../RoleCard";
import ScatteredPhotos from "./Photos";
import {
  MainHeading,
  SubHeading,
  SectionTitle,
  RatingText,
  StyledRate,
} from "./style";

// Image imports
import teacher from "../../../assets/teacher.png";
import parent from "../../../assets/parent.png";
import photo1 from "../../../assets/images/photo1.jpg";
import photo2 from "../../../assets/images/photo2.jpg";
import photo3 from "../../../assets/images/photo3.jpg";
import photo4 from "../../../assets/images/photo4.jpg";
import photo5 from "../../../assets/images/photo5.jpg";
import photo6 from "../../../assets/images/photo6.jpg";
import photo7 from "../../../assets/images/photo7.jpg";
import photo8 from "../../../assets/images/photo8.jpg";
import photo9 from "../../../assets/images/photo9.jpg";
import photo10 from "../../../assets/images/photo10.jpg";

interface HeroSectionProps {
  rating?: number;
}

const HeroSection = ({ rating = 4.5 }: HeroSectionProps) => {
  const roles = [
    { title: "Teacher", icon: teacher },
    { title: "Parent", icon: parent },
  ];

  const photos = [
    { src: photo1, alt: "Photo 1", top: "10%", left: "5%", rotate: "-15deg" },
    { src: photo2, alt: "Photo 2", top: "5%", left: "20%", rotate: "10deg" },
    { src: photo3, alt: "Photo 3", top: "15%", left: "35%", rotate: "-5deg" },
    { src: photo4, alt: "Photo 4", top: "10%", left: "50%", rotate: "8deg" },
    { src: photo5, alt: "Photo 5", top: "5%", left: "65%", rotate: "-10deg" },
    { src: photo6, alt: "Photo 6", top: "10%", left: "80%", rotate: "12deg" },
    { src: photo7, alt: "Photo 7", top: "60%", left: "5%", rotate: "5deg" },
    { src: photo8, alt: "Photo 8", top: "65%", left: "20%", rotate: "-8deg" },
    { src: photo9, alt: "Photo 9", top: "70%", left: "65%", rotate: "10deg" },
    {
      src: photo10,
      alt: "Photo 10",
      top: "60%",
      left: "80%",
      rotate: "-12deg",
    },
  ];

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        width: "100%",
        minHeight: "100vh",
        textAlign: "center",
        padding: "40px 20px",
        background: "#f0f2f5",
      }}
    >
      <Col span={24}>
        <MainHeading>Where classrooms become communities</MainHeading>
        <SubHeading>
          Loved by more than 45 million teachers, students, and parents. Free
          forever.
        </SubHeading>
        <Row justify="center" align="middle" style={{ textAlign: "center" }}>
          <Col span={24}>
            <SectionTitle>Get started as a...</SectionTitle>
            <Row gutter={[16, 16]} justify="center">
              {roles.map((role, index) => (
                <Col key={index} lg={3} xs={12}>
                  <RoleCard
                    title={role.title}
                    icon={role.icon}
                    onClick={() => console.log(`Selected ${role.title}`)}
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        <RatingText>
          {rating}{" "}
          <StyledRate disabled defaultValue={rating} allowHalf count={5} /> (2M+
          reviews)
        </RatingText>

        <ScatteredPhotos
          photos={photos}
          centralText="Keeping teachers, families, and kids connected."
        />
      </Col>
    </Row>
  );
};

export default HeroSection;
