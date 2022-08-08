import { Modal, Alert } from "react-bootstrap";

export default function CartAlert ({show, handleClose}){
    return(
        <Modal show={show} onHide={handleClose} style={{borderRadius:'2px', paddingTop:'20px', borderStyle:'none'}}>
            <p style={{margin:'auto', color:'rgba(189, 7, 7, 1)', paddingTop:'35px', paddingBottom:'35px'}}>You must login first to add to your cart</p>
        </Modal>
    )
}