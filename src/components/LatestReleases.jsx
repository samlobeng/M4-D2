import React from 'react'
import horror from '../data/horror.json'
import {Card, Button, Container,Row, Col} from 'react-bootstrap'

export default function LatestReleases(){
    console.log(horror)
    return (
        horror.map(book=>{
           return <Container>
               <Row >
                <Col className = "col-12 col-md-4 col-lg-3 d-flex">
                <Card>
           <Card.Img variant="top" src={book.img} />
           <Card.Body>
             <Card.Title>{book.title}</Card.Title>
             <Card.Text>
             </Card.Text>
             <Button variant="primary">Go somewhere</Button>
           </Card.Body>
         </Card>
                </Col>
               </Row>
           </Container>
           
        })
    
    )
    }