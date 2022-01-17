import React  from "react";
import { Card } from "react-bootstrap";

class CardList extends React.Component {
    constructor(){
        super();
    }

    render(){
        const { list } = this.props;
       return (
        <>
            <div className="row row-cols-1 row-cols-md-3">
                {
                    list.map((i,index)=>(
                        // <Card key={index} title={i}/>
                        <Card key={index} className="text-center">
                            <Card.Title>{i}</Card.Title>
                        </Card>
                    ))
                }
            </div>
        </>
       );
    }
}

export default CardList;