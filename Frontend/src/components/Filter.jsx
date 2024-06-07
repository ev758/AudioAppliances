import { useState } from 'react';
import { Accordion, Button, Form, Offcanvas } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function Filter() {
    const [show, setShow] = useState(false);
    const close = () => setShow(false);
    const offcanvas = () => setShow(true);
    const navigate = useNavigate();

  return (
    <>
      <div className="filter">
        <Button className="filter-text" variant="outline-*" onClick={offcanvas}>Filter</Button>

        <Offcanvas show={show} onHide={close}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Filter</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Accordion flush alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Headphones</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                <Form.Check
                                    type="checkbox"
                                    id="wiredHeadphones"
                                    label="wired headphones"
                                    name="headphones"
                                    value="wired headphones"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="wirelessHeadphones"
                                    label="wireless headphones"
                                    name="headphones"
                                    value="wireless headphones"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="leatherHeadphones"
                                    label="leather headphones"
                                    name="headphones"
                                    value="leather headphones"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="sustainableHeadphones"
                                    label="sustainable headphones"
                                    name="headphones"
                                    value="sustainable headphones"
                                />
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Headsets</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                <Form.Check
                                    type="checkbox"
                                    id="wiredHeadsets"
                                    label="wired headsets"
                                    name="headsets"
                                    value="wired headsets"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="wirelessHeadsets"
                                    label="wireless headsets"
                                    name="headsets"
                                    value="wireless headsets"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="leatherHeadsets"
                                    label="leather headsets"
                                    name="headsets"
                                    value="leather headsets"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="sustainableHeadsets"
                                    label="sustainable headsets"
                                    name="headsets"
                                    value="sustainable headsets"
                                />
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Earphones</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                <Form.Check
                                    type="checkbox"
                                    id="wiredEarphones"
                                    label="wired earphones"
                                    name="earphones"
                                    value="wired earphones"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="wirelessEarphones"
                                    label="wireless earphones"
                                    name="earphones"
                                    value="wireless earphones"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="dustproofEarphones"
                                    label="dustproof earphones"
                                    name="earphones"
                                    value="dustproof earphones"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="dustResistantEarphones"
                                    label="dust resistant earphones"
                                    name="earphones"
                                    value="dust resistant earphones"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="waterproofEarphones"
                                    label="waterproof earphones"
                                    name="earphones"
                                    value="waterproof earphones"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="waterResistantEarphones"
                                    label="water resistant earphones"
                                    name="earphones"
                                    value="water resistant earphones"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="sustainableEarphones"
                                    label="sustainable earphones"
                                    name="earphones"
                                    value="sustainable earphones"
                                />
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Microphones</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                <Form.Check
                                    type="checkbox"
                                    id="condenserMicrophones"
                                    label="condenser microphones"
                                    name="microphones"
                                    value="condenser microphones"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="dynamicMicrophones"
                                    label="dynamic microphones"
                                    name="microphones"
                                    value="dynamic microphones"
                                />
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Speakers</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                <Form.Check
                                    type="checkbox"
                                    id="wiredSpeakers"
                                    label="wired speakers"
                                    name="speakers"
                                    value="wired speakers"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="wirelessSpeakers"
                                    label="wireless speakers"
                                    name="speakers"
                                    value="wireless speakers"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="dustproofSpeakers"
                                    label="dustproof speakers"
                                    name="speakers"
                                    value="dustproof speakers"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="waterproofSpeakers"
                                    label="waterproof speakers"
                                    name="speakers"
                                    value="waterproof speakers"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="waterResistantSpeakers"
                                    label="water resistant speakers"
                                    name="speakers"
                                    value="water resistant speakers"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="sustainableSpeakers"
                                    label="sustainable speakers"
                                    name="speakers"
                                    value="sustainable speakers"
                                />
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="5">
                        <Accordion.Header>Brand</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                <Form.Check
                                    type="checkbox"
                                    id="sony"
                                    label="Sony"
                                    name="brand"
                                    value="sony"
                                />

                                <Form.Check
                                    type="checkbox"
                                    id="masterDynamic"
                                    label="Master & Dynamic"
                                    name="brand"
                                    value="master and dynamic"
                                />

                                <Form.Check
                                    type="checkbox"
                                    id="houseOfMarley"
                                    label="House of Marley"
                                    name="brand"
                                    value="house of marley"
                                />

                                <Form.Check
                                    type="checkbox"
                                    id="creative"
                                    label="Creative"
                                    name="brand"
                                    value="creative"
                                />

                                <Form.Check
                                    type="checkbox"
                                    id="soundcore"
                                    label="Soundcore"
                                    name="brand"
                                    value="soundcore"
                                />

                                <Form.Check
                                    type="checkbox"
                                    id="akg"
                                    label="AKG"
                                    name="brand"
                                    value="akg"
                                />

                                <Form.Check
                                    type="checkbox"
                                    id="beyerdynamic"
                                    label="beyerdynamic"
                                    name="brand"
                                    value="beyerdynamic"
                                />

                                <Form.Check
                                    type="checkbox"
                                    id="jbl"
                                    label="JBL"
                                    name="brand"
                                    value="jbl"
                                />

                                <Form.Check
                                    type="checkbox"
                                    id="jvc"
                                    label="JVC"
                                    name="brand"
                                    value="jvc"
                                />

                                <Form.Check
                                    type="checkbox"
                                    id="jabra"
                                    label="Jabra"
                                    name="brand"
                                    value="jabra"
                                />
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                
                <div className="filter-apply">
                    <Button variant="dark" onClick={() => {
                        const headphones = document.getElementsByName("headphones");
                        const headsets = document.getElementsByName("headsets");
                        const earphones = document.getElementsByName("earphones");
                        const microphones = document.getElementsByName("microphones");
                        const speakers = document.getElementsByName("speakers");
                        const brands = document.getElementsByName("brand");
                        const products = [headphones, headsets, earphones, microphones, speakers, brands];
                        let filters = "";

                        for (let i = 0; i < products.length; i++) {
                            for (let j = 0; j < products[i].length; j++) {
                                if (products[i][j].checked) {
                                    filters = filters + products[i][j].value + "-";
                                }
                            }
                        }

                        filters = filters.slice(0, filters.lastIndexOf("-"));

                        navigate(`/filterresults/${filters}`, { state: { filters } });
                    }}>Apply</Button>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  )
}

export default Filter;