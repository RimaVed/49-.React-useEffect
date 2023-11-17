import {v4 as uuid} from 'uuid'

const AddNewDish = ({formInputs,setFormInputs,pridetiNaujaPatiekala}) => {
// funkcionalumas
const formSubmit = (e)=>{
    e.preventDefault();

    pridetiNaujaPatiekala({
        ...formInputs,
        id:uuid()
    });
     setFormInputs({
        title:'',
        image:'',
        description:'',
        tasted:false
     });
    } 

    const inputHandler = (e) => {
        setFormInputs({
          ...formInputs,
          [e.target.name]:
            e.target.type === 'checkbox' || e.target.type === 'radio'
              ? e.target.checked
              : e.target.type === 'number'
              ? e.target.valueAsNumber
              : e.target.value,
        });
    

}

    return ( 
        <section>
     <h1>Add New dish</h1>
     <form onSubmit={formSubmit}>
        {/* patiekalo pav */}
        <input 
        type="text"
        name="title"
        id="title"
        value={formInputs.title}
        onChange={(e)=>{
            // setFormInputs({...formInputs,title:e.target.value})
            inputHandler(e);
        }} 
        placeholder="Dish name"
        /><br/>
        {/* patiekalo apr */}
        <textarea
        name="description"
        id="description"
        value = {formInputs.description}
        onChange={(e)=>{
           // setFormInputs({... setFormInputs({ ...formInputs, description: e.target.value })
                inputHandler(e);
        }} 
        
        placeholder="Describe this dish.."
        /><br/>
        {/* patiekalo img */}
        <input
         type="url" 
         name= "image"
         id="image"
         value={formInputs.image}
         onChange={(e)=>{
            // setFormInputs({...formInputs,image:e.target.value})
            inputHandler(e);
        }} 
        placeholder="Image Url of the dish..."
        /><br/>
        {/* patiekalo cbox*/}
        <input 
        type="checkbox"
        name="tasted"
        id="tastad"
        checked={formInputs.tasted}
        onChange={(e)=>{
            // setFormInputs({...formInputs,tasted:e.target.checked})
            inputHandler(e);

        }} 
        /> <br/>
        <input type="submit"value="Add" />
     </form>
        </section>
     );
}
 
export default AddNewDish;