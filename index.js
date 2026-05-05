
async function exampleDog() 
{
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    return data;
}

async function exampleCat() 
{
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    return data;
}

export { exampleDog, exampleCat}
