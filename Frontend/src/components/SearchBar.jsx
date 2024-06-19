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
              let keyword = document.getElementById("searchbar").value;
              keyword = keyword.trim().toLowerCase();

              //goes to product results page with keyword input
              navigate(`/searchresults/${keyword}`, { state: { keyword } });
            }
          }}
        />
        <Button variant="dark" onClick={() => {
          let keyword = document.getElementById("searchbar").value;
          keyword = keyword.trim().toLowerCase();

          //goes to product results page with keyword input
          navigate(`/searchresults/${keyword}`, { state: { keyword } });
        }}>
          Search
        </Button>
      </InputGroup>
    </>
  )
}

export default SearchBar;