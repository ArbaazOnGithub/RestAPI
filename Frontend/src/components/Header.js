import React from "react";
import { Card, CardBody } from "reactstrap";

function Header(){
    return(

        <div>
            <Card className="text-center my-3 bg-warning">
                <CardBody>
                    <h1>Welcome to Cources Application</h1>  
                </CardBody>
            </Card>            
        </div>
    )
           
}
export default Header;