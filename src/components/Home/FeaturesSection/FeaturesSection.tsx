import React from "react";
import feature1 from "../../../assets/features/feature1.png";
import feature2 from "../../../assets/features/feature2.png";
import feature3 from "../../../assets/features/feature3.png";
import feature4 from "../../../assets/features/feature4.png";
import {
  Container,
  FeatureRow,
  ImageColumn,
  ContentColumn,
  Heading,
  SubHeading,
  IconCircle,
} from "./style";

interface FeatureProps {
  heading: string;
  subheading: string;
  imageSrc: string;
  imageAlt: string;
  iconSrc?: string;
  imagePosition: "left" | "right";
  backgroundColor?: string;
}

const Feature: React.FC<FeatureProps> = ({
  heading,
  subheading,
  imageSrc,
  imageAlt,
  imagePosition,
  backgroundColor,
}) => {
  const isImageLeft = imagePosition === "left";

  return (
    <div style={{ backgroundColor: backgroundColor || "transparent" }}>
      <Container>
        <FeatureRow reverse={!isImageLeft}>
          <ImageColumn>
            <img src={imageSrc} alt={imageAlt} />
          </ImageColumn>
          <ContentColumn>
            <Heading>{heading}</Heading>
            <SubHeading>{subheading}</SubHeading>
          </ContentColumn>
        </FeatureRow>
      </Container>
    </div>
  );
};

const FeaturesSection = () => {
  const features: FeatureProps[] = [
    {
      heading: "Stay connected—instantly",
      subheading:
        "Messages make it easy to communicate with teachers, families and staff anytime, anywhere—and are automatically translated into more than 35 languages",
      iconSrc: "/icons/chat-bubble.svg",
      imageSrc: feature1,
      imageAlt: "Message bubbles showing parent-teacher communication",
      imagePosition: "left",
      backgroundColor: "#f0f2f5",
    },
    {
      heading: "Offer a window into their world",
      subheading:
        "With Stories, teachers can securely share photos, videos and updates on a private feed so parents can see the classroom magic for themselves ✨",
      iconSrc: "/icons/photos.svg",
      imageSrc: feature2,
      imageAlt: "Teacher cards showing classroom activities",
      imagePosition: "right",
      backgroundColor: "#f0f2f5",
    },
    
    {
      heading: "Share the love",
      subheading:
        "With a few taps, parents can share their child’s favorite moments with family and friends, or post them to their own social media accounts.",
      iconSrc: "/icons/share.svg",
      imageSrc: feature3,
      imageAlt: "Parent sharing photos with family",
      imagePosition: "left",
      backgroundColor: "#f0f2f5",
    },
    {
      heading: "Make it your own",
      subheading:
        "Customize your app with your school’s colors and logo, and add your own content to make it feel like home.",
      iconSrc: "/icons/customize.svg",
      imageSrc: feature4,
      imageAlt: "Customizable app interface",
      imagePosition: "right",
      backgroundColor: "#f0f2f5",
    },
  ];

  return (
    <section id="features">
      {features.map((feature, index) => (
        <Feature
          key={index}
          heading={feature.heading}
          subheading={feature.subheading}
          iconSrc={feature.iconSrc}
          imageSrc={feature.imageSrc}
          imageAlt={feature.imageAlt}
          imagePosition={feature.imagePosition}
          backgroundColor={feature.backgroundColor}
        />
      ))}
    </section>
  );
};

export default FeaturesSection;
