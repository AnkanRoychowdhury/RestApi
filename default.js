import {ideas} from './constants/data.js';

import Idea from "./src/models/idea.model.js";

const DefaultData = async() => {
    try{
        await Idea.insertMany(ideas);
        console.log('Ideas imported Succesfully');
    }catch(error){
        console.log('Restricting Insertion of Default Data',error.message);
    }
}

export default DefaultData;