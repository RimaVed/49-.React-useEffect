const Dish = ({data,keistiPatiekloStatusa}) => {
    return ( 
        <div className="dish">
            <h1>{data.title}</h1>
            <img 
            src={data.image}
             alt={data.title}
             />
             <p>{data.description}</p>
             <label> I have tested this dish:</label>
             <input 
             type="checkbox" 
             checked = {data.tasted}
             onChange={()=>keistiPatiekloStatusa(data.id)}
             />
        </div>
     );
}
 
export default Dish;