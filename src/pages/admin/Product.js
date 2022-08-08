import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import paperclip from '../../assets/paperclip.png';
import product from '../../assets/product.png';
import NavbarList from '../../components/Navbar';



function Product() {
  return (
    <>
        <NavbarList />
        <div className='container-add-product'>
        <Row style={{marginTop: "70px" }}>

        
            <Col xs={12} md={7}>
            <div className='form-product'>
                <Form >
                
                    <h1 style={{color: "#BD0707",textAlign: "left", marginBottom: "50px" }}>Product</h1>

                    <Form.Group className="mb-10" style={{marginBottom: "20px"}}>
                    <Form.Control type="text" placeholder="Name product" />
                    </Form.Group>
            
                    <Form.Group className="mb-10" style={{marginBottom: "20px"}}>
                    <Form.Control type="text" placeholder="Price" />
                    </Form.Group>

                    <InputGroup className="mb-3" style={{border: "1px red solid",    
                     borderRadius: "6px"}}>
                    <Form.Control
                    placeholder="Photo Product" type="file"/>
                    <InputGroup.Text id="basic-addon2" style={{backgroundColor: "white"}}>
                        <img src={paperclip} style={{width: "12px", height: "12px" }}></img>
                    </InputGroup.Text>
                    </InputGroup>

                    <Button className='btn-add-product' type="submit" style={{textAlign: "center"}}>
                    Add Product
                    </Button>
                </Form>
                </div>
            </Col>
        

            <Col xs={12} md={4}>

                <div className='img-product'>
                    <img src={product} style={{height: "400px"}} ></img>
                </div>
            </Col>
        </Row>
        </div>
      </>
  );
}


export default Product;