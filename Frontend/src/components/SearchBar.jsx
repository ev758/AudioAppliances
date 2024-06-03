import { Button, Form, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const navigate = useNavigate();
  
  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          id="searchbar"
          placeholder="Enter an audio product"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              const keyword = document.getElementById("searchbar").value;
              navigate(`/searchresults/${keyword}`, { state: { keyword } });
            }
          }}
        />
        <Button variant="dark" onClick={() => {
          const keyword = document.getElementById("searchbar").value;
          navigate(`/searchresults/${keyword}`, { state: { keyword } });
        }}>
          Search
        </Button>
      </InputGroup>
    </>
  )
}

export default SearchBar;