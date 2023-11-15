import AddNewDish from "./AddNewDish";
import Dishes from "./Dishes";

const Main = ({data,keistiPatiekloStatusa,formInputs,setFormInputs, pridetiNaujaPatiekala}) => {
    return ( 
        <main>
            <AddNewDish 
            formInputs={formInputs}
            setFormInputs={setFormInputs}
            pridetiNaujaPatiekala={pridetiNaujaPatiekala}
            />
            <Dishes 
             data={data}
             keistiPatiekloStatusa={keistiPatiekloStatusa}
             
            />
        </main>   
     );
}
 
export default Main;