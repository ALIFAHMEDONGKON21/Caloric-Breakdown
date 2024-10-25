
import PropTypes from 'prop-types';

const Sidercontiner = ({addrecipe}) => {
    
    return (
        
        <div className="md:w-1/3 border-2 rounded-xl py-2">
            <h3 className='text-xl items-center text-center border-b-2 mt-2'>You wanted recipe {addrecipe.length}</h3>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
   
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
   
     {   
        addrecipe.map((item,index)=><tr className='hover:bg-gray-200' key={index}>
        <th>{index+1}</th>
        <td>{item.recipe_name}</td>
        <td>{item.preparing_time}</td>
        <td>{item.calories}</td>
        <tb> <button onClick={"procsed"} className="btn bg-green-400 rounded-full px-2  md:px-4 py-1 my-2 ">Preparing</button></tb>
       
      </tr>)
       
       
      
     }

                           
     
    </tbody>
  </table>
</div>
            
        </div>
    );
};

Sidercontiner.propTypes = {
    addrecipe:PropTypes.object
};

export default Sidercontiner;