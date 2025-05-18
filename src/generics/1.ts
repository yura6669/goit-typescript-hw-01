console.log('------------------- Generic Task 1 -------------------');

import axios from "../../node_modules/axios/index";

async function fetchData<T>(url: string): Promise<T> { 
    try {
        const response = await axios.get<T>(url);
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching from ${url}: ${error}`);
    }
}

const url: string = 'https://catfact.ninja/fact';

interface CatFact { 
    fact: string;
    length: number;
}

async function getCatFact(url: string) {
    const cat = await fetchData<CatFact>(url);
    console.log(cat);
}
 
getCatFact(url);