import axios from "axios";
import { useEffect, useState } from "react";
import { Fact } from "../types/fact";

const FactsList = () => {
    const [facts, setFacts] = useState<Array<Fact>>();
    const renderedFactsList = facts?.map((fact) => {
        return (<li key={fact.uid}><p>{fact.fact}</p></li>);
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

export default FactsList;