import { useState, useContext } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";

const AddRestaurant = () => {
    const {AddRestaurants} = useContext(RestaurantsContext);
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [priceRange, setPriceRange] = useState("Price Range");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await RestaurantFinder.post("/", {
                name,
                location,
                price_range: priceRange
            });
            AddRestaurants(response.data.data.restaurant);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="mb-4 p-4">
            <form action="">
                <div className="d-flex flex-row flex-wrap gap-3 justify-content-evenly align-items-center">
                    <div className="col">
                        <input value={name} onChange={e => setName(e.target.value)} type="text" className="form-control" placeholder="name" />
                    </div>
                    <div className="col">
                        <input value={location} onChange={e => setLocation(e.target.value)} type="text" className="form-control" placeholder="location"/>
                    </div>
                    <div className="col">
                        <select value={priceRange} onChange={e => setPriceRange(e.target.value)} className="form-select my-1 mr-sm-2">
                            <option disabled>Price Range</option>
                            <option value="1">$</option>
                            <option value="2">$$</option>
                            <option value="3">$$$</option>
                            <option value="4">$$$$</option>
                            <option value="5">$$$$$</option>
                        </select>
                    </div>
                    <button onClick={handleSubmit} className="btn btn-primary">Add</button>
                </div>
            </form>
        </div>
  )
}

export default AddRestaurant