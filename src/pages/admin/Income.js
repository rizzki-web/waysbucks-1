import { Table } from 'react-bootstrap';
import NavbarList from '../../components/Navbar';
import dataIncome from '../../dataIncome/data'



function IncomeTransaction() {
    return (
      <>

      <NavbarList />
      <div className='table-transaction'>
        <h2 style={{margin: "50px 0", color: "red", textAlign: "left"}}>
          Income Transaction
        </h2>
        <Table striped bordered hover style={{width: "80%", margin: "auto"}}>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Address</th>
            <th>Post Code</th>
            <th>Income</th>
            <th>Status</th>
            
          </tr>
        </thead>
        <tbody>
        {dataIncome?.map((item, index)=>(
          <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.address}</td>
          <td>{item.postcode}</td>
          <td style={{color: "blue"}}>{item.income}</td>
          <td>{item.status}</td>
          
        </tr>
            ))}
          
        </tbody>
      </Table>
      </div>
  
      </>
    )
    
}


export default IncomeTransaction;