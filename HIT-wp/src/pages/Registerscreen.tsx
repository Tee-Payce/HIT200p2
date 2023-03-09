import { Button } from "react-bootstrap";

export function Registerscreen() {
    return(
        <div>
         <div className="Login">
                <div className="LoginBox bg-dark">
                    <div className="LoginHeader-col">
                        <h1>Signup</h1>
                    </div>
                    <div className="inputs">
                    <div>
                            <label>Username</label>
                        <input  className="input" type="Username" placeholder="enter your Username" required/>
                        </div>
                        <div>
                            <label>Email</label>
                        <input  className="input" type="email" placeholder="enter your HIT mail" required/>
                        </div>
                        <div>
                        <label>Password</label>
                        <input className="input"  type="password" placeholder="enter passord" required/>
                        </div>
                        <Button className="input1 btn-primary btn-xxl " type="submit">SIGNUP</Button>
                      
                    </div>
                    
                </div>
            </div>
        
        
        
        </div>


    )
}