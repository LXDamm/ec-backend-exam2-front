import axios from "axios";
import { Fact } from "../types/fact";

const SelectedAnimal = (props: any) => {
    const removeSelectedFact = (uid: string) => {
        axios.delete(`http://localhost:5000/animals/${props.animal.uid}/fact/${uid}`)
            .then((response) => {
                console.log("Removed fact");
            })
            .catch(() => console.error("error deleting fact"));
    };
    const renderedFactsList = props.animal.facts?.map((fact: Fact) => {
        return (<li key={fact.uid}><button onClick={() => removeSelectedFact(fact.uid)}>{fact.fact}</button></li>);
    });
    return (
        <div className="AnimalsSelectorList">
            {props.animal &&
                <><p>{props.animal.name}</p>
                <ul>
                    {renderedFactsList}
                </ul></>
            }
        </div>
    );
}

export default SelectedAnimal;