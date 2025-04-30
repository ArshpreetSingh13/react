import "../ComCss/main.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
let MAIN = (props) => {
    return (
        <>
            
            <div className="gap">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            {props.discription}
                        </Card.Text>
                       
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default MAIN