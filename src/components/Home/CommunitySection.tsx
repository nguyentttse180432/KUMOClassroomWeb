import { Row, Col, Button } from "antd";

interface Feedback {
  name: string;
  quote: string;
  image: string;
}

interface CommunitySectionProps {
  feedback: Feedback[];
}

const CommunitySection = ({ feedback }: CommunitySectionProps) => {
  return (
    <Row
      justify="center"
      style={{
        padding: "40px 20px",
        background: "#e6f4ff",
        textAlign: "center",
      }}
    >
      <Col span={24}>
        <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
          Our community is our superpower
        </h2>
        <Row gutter={[16, 16]} justify="center">
          {feedback.map((item, index) => (
            <Col key={index} xs={24} sm={12} md={8}>
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "80px", borderRadius: "50%" }}
              />
              <p style={{ margin: "10px 0" }}>
                <strong>{item.name}</strong>
              </p>
              <p>{item.quote}</p>
            </Col>
          ))}
        </Row>
        <Button type="primary" style={{ marginTop: "20px" }}>
          See more smiles
        </Button>
      </Col>
    </Row>
  );
};

export default CommunitySection;
