import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";

const Catalog = () => {
    const { cars } = useContext(DataContext);

    return (
        <div>
            <h2>Avtomobillar Katalogi</h2>
            <ul>
                {cars.map((car) => (
                    <li key={car.id}>
                        {car.name} - ${car.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Catalog;
