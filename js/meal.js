const loadMeal = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeal(data.meals))
}

const displayMeal = meals => {
    console.log(meals)
    const mealContainer = document.getElementById('food-container')
    mealContainer.innerHTML = '';
    meals.forEach(meal => {
        const mealsDiv = document.createElement('div')
        mealsDiv.classList.add('col');
        mealsDiv.innerHTML =
            ` <div onclick="loadMealDetail(${meal.idMeal})" class="card">
              <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
             <div class="card-body">
             <h5 class="card-title">${meal.strMeal}</h5>
             <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
             </div>
          </div>
        `;
        mealContainer.appendChild(mealsDiv)

    })
}

const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadMeal(searchText);
    searchField.value = '';
}

// idMeal api added 

const loadMealDetail = (idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetail(data.meals[0]))

}

const displayMealDetail = meal => {
    console.log(meal)
    const detailContainer = document.getElementById('detail-container');
    detailContainer.innerHTML = '';
    const mealsDiv = document.createElement('div');
    mealsDiv.classList.add('card')
    mealsDiv.innerHTML = `
      <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
         <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
         card's content.</p>
       <a href="#" class="btn btn-primary">Submit</a>
      </div>
    `;
    detailContainer.appendChild(mealsDiv)
}

// loadMeal('');