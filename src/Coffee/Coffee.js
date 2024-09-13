import "./coffee.css";
import CoffeeList from "./CoffeeList";

function Coffee() {
  return (
    <div className="App">
      <div className="coffees-container">
        {/* heading div Start */}
        <div className="heading">
          <h1>Our Collection</h1>
          <div className="discription">
            Introducing our Coffee Collection, a selection of unique coffees
            <br />
            from different roast types and origins, expertly roasted in small
            <br />
            batches and shipped fresh weekly.
          </div>
          <div className="tabs-container">
            <button style={{ backgroundColor: "#6F757C" }}>All Products</button>
            <button>Available Now</button>
          </div>
          <div className="coffee-list">
            <CoffeeList></CoffeeList>
          </div>
        </div>
        {/* heading div End */}
      </div>
    </div>
  );
}

export default Coffee;
