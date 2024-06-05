import './App.css';
import { useState } from 'react';
import {Button, Modal, Form} from 'react-bootstrap'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee} from '@fortawesome/free-solid-svg-icons';

function App() {

  const [clickedContainer, setClickedContainer] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = (containerId) => {
    setClickedContainer(containerId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message was sent.")
  };
  return (
    // <!-- fluid container then your row then columns -->
        <div class="container-fluid">
            <div class="row r1 ">
    {/* <!------------------- 1rd Column --------------------------------------> */}
              <div class="col-md-4 col-sm-12 c1">
                <div class="input-group">
                    <FontAwesomeIcon className='icon-wrapper' icon={faCoffee} size="2xs" />
                    <div id="welcome">Welcome, Frankie!</div>
                </div>    
                {/* <!---------------------------------------------> */}
                    <button class="btn btn-warning compose" type="button" onClick={handleShow}>COMPOSE</button>
                    {/* <!-- Modal --> */}
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Compose Email</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                          <Form.Group controlId="formEmailTo">
                            <Form.Label>To</Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="Enter recipient's email"
                              name="to"
                              required
                            />
                          </Form.Group>
                          <Form.Group controlId="formEmailSubject" className="mt-3">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter subject"
                              name="subject"
                              required
                            />
                          </Form.Group>
                          <Form.Group controlId="formEmailBody" className="mt-3">
                            <Form.Label>Body</Form.Label>
                            <Form.Control
                              as="textarea"
                              rows={3}
                              placeholder="Enter email body"
                              name="body"
                              required
                            />
                          </Form.Group>
                          <Button variant="primary" type="submit" className="mt-3">
                            Send
                          </Button>
                        </Form>
                      </Modal.Body>
                    </Modal>

                    <br></br>
                    <div class="left-options" id="inbox"> Inbox(3)</div>
                    <div class="left-options"> Tagged</div>
                    <div class="left-options"> Important</div>
                    <div class="left-options"> Sent Mail</div>
                    <div class="left-options"> Drafts</div>
                    <div class="left-options"> Trash</div>
              </div>
    {/* <!------------------- 2rd Column --------------------------------------> */}
                <div class="col-md-4 col-sm-12 c2">
                    <input id="search-bar" placeholder="Search for emails"/>
                    <br></br>
                    <div 
                      className={`dl-horizontal box-1 ${clickedContainer === 1 ? 'selected':''}`} 
                      onClick={()=> handleClick(1)}
                    >
                        <div class="left">Linkedln</div>
                        <div class="right">02:45pm</div>
                        <div class="middle">You have a new connection request.</div>
                        {/* <!-- need to clear the floats all up so that it doesn't mess with future <div>--> */}
                        <div class="clear"></div>
                    </div>
                    <br></br>
                        <div 
                          className={`dl-horizontal box-2 ${clickedContainer === 2 ? 'selected':''}`}  
                          onClick={()=> handleClick(2)}
                        >
                            <div class="left">Michael Scott Daily Quotes</div>
                            <div class="right">Jul 3, 2020</div>
                            <div class="middle">Friends joke with one another. 'Hey...</div>
                            <div class="clear"></div>
                        </div>
                    <br></br>
                    <div 
                      className={`dl-horizontal box-3 ${clickedContainer === 3 ? 'selected':''}`} 
                      onClick={()=> handleClick(3)}
                    >
                        <div class="left">LaMar Software</div>
                        <div class="right">Feb 9, 2020</div>
                        <div class="middle">Learn how you can give us money by calling (209)322 7...</div>
                        {/* <!-- need to clear the floats all up so that it doesn't mess with future <div>--> */}
                        <div class="clear"></div>
                    </div>
                </div>
    {/* <!------------------- 3rd Column --------------------------------------> */}
                <div class="col-md-4 col-sm-12 c3 ">
                    { (clickedContainer===3) &&
                      <>
                        <div class="from-to">To:frankie@hotmail.com</div>
                        <div class="from-to-2">From:lamarsoftware@theofficenbc.com</div>
                      </>
                    }
                    { (clickedContainer===2) &&
                      <>
                        <div class="from-to">To:frankie@hotmail.com</div>
                        <div class="from-to-2">From:linkedin@linkedin.com</div>
                      </>
                    }
                    { (clickedContainer===1) &&
                      <>
                        <div class="from-to">To:frankie@hotmail.com</div>
                        <div class="from-to-2">From:re-reply@theofficenbc.com</div>
                      </>
                    }
                    <br></br>

                    { (clickedContainer===2) && <h3 id="Title"> Michael Scott Daily Quotes</h3> }
                    { (clickedContainer===1) && <h3 id="Title"> Linkedln</h3> }
                    { (clickedContainer===3) && <h3 id="Title"> LaMar Software</h3> }
                    <br></br>

                    {(clickedContainer===2) && <p>
                      "Friends joke with one another. 'Hey, you're poor.' 'Hey, your momma's dead.' That's what
                        friends do."
                        <br></br>
                        "It's a good thing Russia doesn't exit anymore."
                        <br></br>
                        "You cheated on me? When I specifically asked you not to?"
                        <br></br>
                        "It just seems awfully mean. But sometimes, the ends justify the mean."
                        <br></br>
                        "Reverse psychology is an awesome tool. I don't know if you guys know about it, but, basically,
                        you make someone think the opposite of what you believe, and that tricks them into doing 
                        something stupid. Works like a charm."
                        <br></br>
                    </p>}
                    {(clickedContainer===1) && <p>
                        You have a new connection request. Stephen Curry wants to connect with you.
                        <br></br>
                        If you wish to see there profile click <a href="https://www.linkedin.com/in/stephencurry30">here</a>. 
                    </p>}
                    {(clickedContainer===3) && <p>
                        Learn how you can give us money by calling (209)322 7122. We have 20
                        thousand dollars waiting for you. 
                    </p>}

                    <br></br>
                    <div class="input-group" id="textbox-1">
                      <textarea class="form-control" aria-label="With textarea"></textarea>
                    </div>
                    <div class="buttonCon">
                    <button type="button" class="btn btn-warning" onClick={handleSubmit}>Reply</button>
                    </div>
                </div>
                
            </div>
        </div>
  );
}

export default App;
