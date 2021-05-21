import React, { useState } from "react";
import FactList from "../components/FactsList";
import { Animal } from "../types/animal";
import { Fact } from "../types/fact";

export default function Start() {
    const [animals, setAnimals] = useState<Array<Animal>>();
    const [facts, setFacts] = useState<Array<Fact>>();
    return (
        <>
            <h2>Facts</h2>
            <FactList />
        </>
    );
}