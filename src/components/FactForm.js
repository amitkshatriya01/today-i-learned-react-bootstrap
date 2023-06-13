import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CategoryList from "./CategoryList";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import supabase from "../supabase";
import FactList from "./FactList";

function FactForm({ categories, showForm, setShowForm, facts, setFacts }) {
  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");
  const [isUploading, setisUploading] = useState(false);
  const textLength = text.length;

  async function handleSubmit(e) {
    e.preventDefault();
    setisUploading(true);
    const { data: newFact, error } = await supabase
      .from("facts")
      .insert([{ text, source, category }])
      .select();
    setisUploading(false);
    if (!error) {
      setFacts((facts) => [newFact[0], ...facts]);
    }
    setText("");
    setSource("");
    setCategory("");
    setShowForm(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Container onSubmit={handleSubmit}>
        <Row className="mt-3 mb-5">
          <Col xs={8}>
            <Form.Control
              size="md"
              type="text"
              placeholder="Enter Fact"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Control
              size="md"
              type="text"
              placeholder="Source"
              value={source}
              onChange={(e) => setSource(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Select
              size="md"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Category</option>
              {categories.map((cat) => (
                <option>{cat.name}</option>
              ))}
            </Form.Select>
          </Col>
          <Col>
            <Button variant="primary" type="submit">
              Submit Fact
            </Button>
          </Col>
        </Row>
      </Container>
    </form>
  );
}

export default FactForm;
