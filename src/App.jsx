import Banner from "./components/banner";
import Header from "./components/Header";
import OurRecipes from "./components/OurRecipes";
import Cardcontianer from './components/Cardcontianer'
import Sidercontiner from "./components/Sidercontiner";


const App = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Header ></Header>

      <Banner></Banner>


      <OurRecipes>

      </OurRecipes>

      <section className="flex  flex-row justify-between gap-5 ">
        <Cardcontianer ></Cardcontianer>
        <Sidercontiner></Sidercontiner>
      </section>
    </div>
  );
};

export default App;