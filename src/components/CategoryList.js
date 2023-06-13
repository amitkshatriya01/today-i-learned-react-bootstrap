import { Dropdown } from "react-bootstrap";

function CategoryList({ categories }) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {categories.map((cat) => (
          <Dropdown.Item>{cat.name}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default CategoryList;
