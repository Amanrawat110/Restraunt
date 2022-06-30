import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: '1',
    name: 'Samosa',
    description: 'Light and Tasty',
    price: 12,
  },
  {
    id: '2',
    name: 'Paani-Puri',
    description: "Delicious with wide range of masala's",
    price: 20,
  },
  {
    id: '3',
    name: 'Masala Dosa',
    description: "Perfect southern style Dosa's in various sizes",
    price: 80,
  },
  {
    id: '4',
    name: 'Vada Pav',
    description: 'Mumbai style Vada Pav with sizzling chutney',
    price: 15,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
