import axios from "axios";
import { useEffect, useState } from "react";
import { Fact } from "../types/fact";

const AllFactsList = () => {
    const [facts, setFacts] = useState<Array<Fact>>();
    const renderedFactsList = facts?.map((fact) => {
        return (<li key={fact.uid}><p className="all-fact-item">{fact.fact}</p></li>);
    });
    useEffect(() => {
        axios.get("http://localhost:5000/facts")
            .then((response) => {
                setFacts(response.data);
            })
            .catch(() => console.error("error fetching facts"));

    }, []);
    return (
        <div className="FactsList">
            {facts
                ? <ul>
                    {renderedFactsList}
                </ul>
                : <p>Found no facts</p>
            }
        </div>
    );
}

export default AllFactsList;