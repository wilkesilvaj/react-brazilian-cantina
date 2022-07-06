import { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";
import Header from "../Layout/Header";
const Meals = () => {
    return (
        <Fragment>
            <MealsSummary />
            <AvailableMeals />
        </Fragment>
    )

}

export default Meals;