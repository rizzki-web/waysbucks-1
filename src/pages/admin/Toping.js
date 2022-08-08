import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import paperclip from '../../assets/paperclip.png';
import toping from '../../assets/toping.png';
import NavbarList from '../../components/Navbar';



function Toping() {
  return (
    <>

      <NavbarList />  
        <div className='container-add-toping'>
        <Row style={{marginTop: "70px" }}>

        
            <Col xs={12} md={7}>
            <div className='form-toping'>
                <Form >
                
                    <h1 style={{color: "#BD0707",textAlign: "left", marginBottom: "50px" }}>Toping</h1>

                    <Form.Group className="mb-10" style={{marginBottom: "20px"}}>
                    <Form.Control type="text" placeholder="Name Toping" />
                    </Form.Group>
            
                    <Form.Group className="mb-10" style={{marginBottom: "20px"}}>
                    <Form.Control type="text" placeholder="Price" />
                    </Form.Group>

                    <InputGroup className="mb-3" style={{border: "1px red solid",    
                     borderRadius: "6px"}}>
                    <Form.Control
                    placeholder="Photo Product" type="file"/>
                    <InputGroup.Text id="basic-addon2" style={{backgroundColor: "white", borderLeft: "none"}}>
                        <img src={paperclip} style={{width: "12px", height: "12px" }}></img>
                    </InputGroup.Text>
                    </InputGroup>

                    <Button className='btn-add-product' type="submit">
                    Add Product
                    </Button>
                </Form>
                </div>
            </Col>
        

            <Col>

                <div className='img-toping'>
                    <img src={toping} style={{height: "400px"}} ></img>
                </div>
            </Col>
        </Row>
        </div>
      </>
  );
}


export default Toping;