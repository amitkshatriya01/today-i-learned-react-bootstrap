import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";

function FactList({ facts, setFacts }) {
  return (
    <Container>
      {facts.map((fact) => (
        <Card className="mb-2" border="primary">
          <Card.Body>{fact.text}</Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default FactList;
