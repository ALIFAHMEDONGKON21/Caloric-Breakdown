import { useEffect, useState } from "react";
import { WiTime9 } from "react-icons/wi";

import { BsFire } from "react-icons/bs";


const CardContainer = () => {
    const [recipes, setRecipes] = useState([]);

    // Corrected useEffect with proper fetch syntax
    useEffect(() => {
        fetch('fake.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
            .catch(error => console.error('Error fetching recipes:', error));
    }, []);

    return (
        <div className="md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                {recipes.map((recipe) => (
                    <div key={recipe.id} className="card bg-base-100 w-96  border-2">
                        <figure>
                            <img className="w-full object-cover "
                                src={recipe.recipe_image}  
                                alt={recipe.recipe_name}  
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{recipe.recipe_name}</h2>  {/* Dynamic recipe name */}
                            <p>{recipe.short_description}</p>
                            <p>Ingredients: {recipe.ingredients.length}</p>
                            <ul  className=" text-gray-600">
                                {
                                    recipe.ingredients.map((item, id)=> <li className=" list-disc ml-5" key={id}>{item}</li>)
                                }
                            </ul>
                            <div className="flex gap-7">
                                <div className="flex items-center ">
                                    <p className=" text-xl">
                                    <WiTime9></WiTime9>
                                    </p>
                                
                                <p className="ml-2">{recipe.preparing_time} </p>

                                </div>
                                <div className="flex items-center">
                                    <p className="text-xl">
                                    <BsFire></BsFire>
                                    </p>
                                
                                <p className="ml-2">{recipe.preparing_time} </p>

                                </div>


                            </div>
                            <div className="card-actions ">
                                <button className="btn bg-green-400 rounded-full w-40 h-5">Cook Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardContainer;
