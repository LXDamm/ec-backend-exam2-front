import { Fact } from './fact';

interface Animal {
    uid: string;
    name: string;
    facts: Array<Fact>;
}

export type { Animal };