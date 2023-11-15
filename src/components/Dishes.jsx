import Dish from "./Dish";
const Dishes = ({data,keistiPatiekloStatusa }) => {
    return ( 
        <section id ="allDishes">
            <h1>Our Dishes</h1>
            <div>
            {
            data.map(dish =>{
                return<Dish
                key={dish.id}
                data={dish}
                keistiPatiekloStatusa={keistiPatiekloStatusa}
                />
        })
    }
            
        </div>
        </section>
     );
}
 
export default Dishes;