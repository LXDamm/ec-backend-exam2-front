import axios from "axios";
import { useEffect, useState } from "react";
import { Animal } from "../types/animal";
import SelectedAnimal from './SelectedAnimal';

const AnimalsSelectorList = () => {
    const [animals, setAnimals] = useState<Array<Animal>>();
    const [selectedAnimal, setSelectedAnimal] = useState<Animal>();
    const renderedAnimalsList = animals?.map((animal) => {
        return (<li key={animal.uid}><button className="animal-button" onClick={() => setSelectedAnimal(animal)}>{animal.name}</button></li>);
    });
    useEffect(() => {
        axios.get("http://localhost:5000/animals")
            .then((response) => {
                setAnimals(response.data);
            })
            .catch(() => console.error("error fetching animals"));
    }, []);
    return (
        <div className="AnimalsSelectorList">
            {animals
                ? <><ul>
                    {renderedAnimalsList}
                </ul>
                <SelectedAnimal animal={selectedAnimal} /></>
                : <p>Found no facts</p>
            }
        </div>
    );
}

export default AnimalsSelectorList;