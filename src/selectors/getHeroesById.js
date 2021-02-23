import { heroes } from "../data/Heroes";

export const getHeroesById = ( id ) => {

    return heroes.find( heroe => heroe.id === id);

}