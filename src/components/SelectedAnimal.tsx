import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Animal } from "../types/animal";
import { Fact } from "../types/fact";

interface AnimalProp {
    animal: Animal | undefined;
}

const SelectedAnimal = (props: AnimalProp) => {
    const [factToAdd, setFactToAdd] = useState('');
    const removeSelectedFact = (uid: string) => {
        axios.delete(`http://localhost:5000/animals/${props.animal?.uid}/facts/${uid}`)
            .then((response) => {
                console.log("Removed fact");
            })
            .catch(() => console.error("error deleting fact"));
    };
    const addFact = () => {
        console.log(factToAdd);
        axios.put(`http://localhost:5000/animals/${props.animal?.uid}/facts`, { fact: factToAdd })
            .then((response) => {
                console.log("Added fact (stub)");
            })
            .catch(() => console.error("error adding fact"));
    };
    const changeAddFact = (event: ChangeEvent<HTMLInputElement>) => {
        setFactToAdd(event.target.value);
    }
    const renderedFactsList = props.animal?.facts?.map((fact: Fact) => {
        return (<li key={fact.uid}><p className="fact-item">{fact.fact}</p><button className="remove-fact-button" onClick={() => removeSelectedFact(fact.uid)}>X</button></li>);
    });
    return (
        <div className="AnimalsSelectorList">
            {props.animal &&
                <><p>{props.animal.name}</p>
                <ul>
                    {renderedFactsList}
                </ul>
                <input type="text" onChange={(event) => changeAddFact(event)}></input><button className="add-fact-button" onClick={() => addFact()}>Add fact</button>
                </>
            }
        </div>
    );
}

export default SelectedAnimal;