import { Row, Col } from "antd";

const Footer = () => {
  return (
    <Row
      justify="space-around"
      style={{ padding: "20px", background: "#001529", color: "#fff" }}
    >
      <Col>
        <h4>Company</h4>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>About us</li>
          <li>Press</li>
          <li>Careers</li>
          <li>Accessibility</li>
          <li>ClassDojo Plus</li>
          <li>Dojo Tutor</li>
        </ul>
      </Col>
      <Col>
        <h4>Resources</h4>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>Points</li>
          <li>Community</li>
          <li>Privacy & Security</li>
        </ul>
      </Col>
      <Col>
        <h4>Support</h4>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>Contact</li>
          <li>Help Center</li>
        </ul>
      </Col>
      <Col>
        <h4>Community</h4>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>Twitter</li>
          <li>Wall of Love</li>
        </ul>
      </Col>
    </Row>
  );
};

export default Footer;
