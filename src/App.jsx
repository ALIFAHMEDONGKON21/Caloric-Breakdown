import Banner from "./components/banner";
import Header from "./components/Header";
import OurRecipes from "./components/OurRecipes";
import Cardcontianer from './components/Cardcontianer'
import Sidercontiner from "./components/Sidercontiner";
import { useState } from "react";


const App = () => {
  const [addrecipe,setaddrecipe]=useState([])

  const handleaddrecipe=(recipe)=>
  {
    const isexit=addrecipe.find(p=>p.recipe_id === recipe.recipe_id)
    if(!isexit)
    {
      setaddrecipe([...addrecipe,recipe]);
    }
    else
    {
      alert("Recipe Here");
    }
  }
  


  return (
    <div className="w-11/12 mx-auto">
      <Header ></Header>

      <Banner></Banner>


      <OurRecipes>

      </OurRecipes>

      <section className="flex  flex-col  md:flex-row justify-between gap-5 ">
        < Cardcontianer handleaddrecipe={handleaddrecipe} ></Cardcontianer>
        <Sidercontiner addrecipe={addrecipe}></Sidercontiner>
      </section>
    </div>
  );
};

export default App;