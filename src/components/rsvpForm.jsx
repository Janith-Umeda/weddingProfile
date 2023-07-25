import {motion,useScroll} from 'framer-motion';
import { Button, Card, Form } from 'react-bootstrap';

export default function RSVPForm(){

    const {scrollY} = useScroll();

    return(
        <div className="rsvp-form" id="rsvp">
            <div className="rsvp-heading">
                <h2>RSVP</h2>
                <p>We'd love it if you could join us on our wedding day, so please let us know as soon as possible if you are or are not able to attend. Please RSVP by 26th November 2022</p>
            </div>
            <div className="rsvp-container">
                <motion.img 
                    src="/images/rsvp.jpg" 
                    alt="bgImage" 
                    className="rsvp-bg-image"
                    // style={{translateY:scrollY}}
                    loading='lazy'
                />
                <div className="form-container">
                    <Card>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card>
                </div>
            </div>
        </div>
    );
}