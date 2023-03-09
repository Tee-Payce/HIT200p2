import { Button, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
export function Loginscreen() {
    return(
        <div>
            <div className="Login">
                <div className="LoginBox bg-dark">
                    <div className="LoginHeader-col">
                        <h1>Login</h1>
                    </div>
                    <div className="inputs">
                        <div>
                            <label>Email</label>
                        <input  className="input" type="email" placeholder="enter your HIT mail" required/>
                        </div>
                        <div>
                        <label>Password</label>
                        <input className="input"  type="password" placeholder="enter passord" required/>
                        </div>
                        <Button className="input1 btn-primary btn-xxl " type="submit">LOGIN</Button>
                        <p>Do not have an account <Nav.Link to="/register" as={NavLink} className="input2">click here to signup</Nav.Link>

                             </p>
                    </div>
                    
                </div>
            </div>
            
            
        </div>
    )
}