import React  from "react";
// import CardList from "./CardList";
import "./portfolio.css";

class Portfolio extends React.Component {
    constructor(){
        super();
    }

    render(){
        let cards = [
            { cardTitle: "WEB DESIGN", color: "#969387" },
            { cardTitle: "MOBILE DESIGN", color: "#413f41" },
            { cardTitle: "LOGO DESIGN", color: "#969387" },
            { cardTitle: "WEB APPLICATION DEVELOPMENT", color: "#413f41" },
            { cardTitle: "MOBILE APLLICATION DEVELOPMENT", color: "#969387" },
            { cardTitle: "PWA DEVELOPMENT", color: "#413f41" },
        ];
       return (
        <>  
            <div className="portofolio">
                <h3 className="offset-1 p-3 text-start"> Portfolio</h3>
                <div className="container portcards pb-5">
                    {cards.map((item,index) => {
                        return (
                            <div key={index} className="col-3 m-3 cardss" style={{ "backgroundColor" :`${item.color}` }}>
                                <div className="card h-100" style={{ "backgroundColor" :`${item.color}` }}>
                                    <div className="card-body"style={{ "backgroundColor" :`${item.color}` }} >
                                        <h5 className="card-title">{item.cardTitle}</h5>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            
            {/* <div className="port-heading">
                <h2>Portfolio</h2>
            </div>
            <CardList list={[
                "WEB DESIGN",
                "MOBILE DESIGN",
                "LOGO DESIGN",
                "WEB APPLICATION DEVELOPMENT",
                "MOBILE APLLICATION DEVELOPMENT",
                "PWA DEVELOPMENT"
            ]}/> */}
        </>
       );
    }
}

export default Portfolio;