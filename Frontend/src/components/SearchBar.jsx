import { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

function SearchBar() {
  return (
    <>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Enter an audio product"
          />
          <Button variant="dark" id="button-addon2">
            Search
          </Button>
        </InputGroup>
    </>
  )
}

export default SearchBar;