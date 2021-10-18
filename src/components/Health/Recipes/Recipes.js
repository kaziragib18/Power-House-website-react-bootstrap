import React from 'react';
import recipe1 from '../../../images/recipes/recipe1.jpg'
import recipe2 from '../../../images/recipes/recipe2.jpg'
import recipe3 from '../../../images/recipes/recipe3.jpg'
import recipe4 from '../../../images/recipes/recipe4.jpg'
import recipe5 from '../../../images/recipes/recipe5.jpg'
import recipe6 from '../../../images/recipes/recipe6.jpg'
import recipe7 from '../../../images/recipes/recipe7.jpg'
import recipe8 from '../../../images/recipes/recipe8.jpg'

import Recipe from '../Recipe/Recipe';

const recipes = [
      {
            img: recipe1,
            name: 'LOW CARB KETO BANANA BREAD',
            desc: 'This low carb keto banana bread recipe with almond flour is perfectly moist & rich. Made with a secret ingredient, it has loads of banana flavor and no one can tell it is sugar free!',
            video: "https://www.youtube.com/watch?v=GdDLmm2ooCA&ab_channel=KetoConnect"
      },
      {
            img: recipe2,
            name: 'ALMOND FLOUR KETO CREPES',
            desc: 'The best keto crepes recipe - sweet or savory! These low carb almond flour crepes taste just like real ones, have 1g net carb each, and will bend, roll and fold easily.',
            video: "https://www.youtube.com/watch?v=kYPqi5BhZn8&ab_channel=RuledMe"
      },
      {
            img: recipe3,
            name: 'KETO BELL PEPPER SANDWICH',
            desc: 'This easy keto bell pepper sandwich recipe comes together in just 5 minutes and will satisfy any sandwich craving. It is a healthy, low carb way to enjoy a sandwich!',
            video: "https://www.youtube.com/watch?v=Tl__iDGmmXc&ab_channel=TarlaDalal"
       },
      {
            img: recipe4,
            name: 'CUCUMBER TOMATO AVOCADO SALAD',
            desc: 'You will love this quick, easy to make, light and healthy cucumber tomato avocado salad recipe thats made with fresh herbs and ready in 15 minutes!',
            video: "https://www.youtube.com/watch?v=SpI3QF_Iauc&ab_channel=NatashasKitchen"
      },
      {
            img: recipe5,
            name: 'MEDITERRANEAN CHICKEN SALAD',
            desc: 'Make this light and healthy Mediterranean chicken salad in just 15 minutes! It is loaded with crunchy veggies and the best lemon dressing.',
            video: "https://www.youtube.com/watch?v=E5wLN8qOB-E&ab_channel=CafeDelites"
      },
      {
            img: recipe6,
            name: 'KETO CHICKEN FAJITAS',
            desc: 'The best keto chicken fajita recipe, in just 20 minutes! Learn how to make chicken fajitas that are both healthy and full of flavor, plus tips and topping ideas.',
            video: "https://www.youtube.com/watch?v=VSmCWKLHWxk&ab_channel=Downshiftology"
      },
      {
            img: recipe7,
            name: 'BROILED LOBSTER TAIL',
            desc: 'This guide has all you need to know about cooking lobster tails - how to prepare lobster tails (butterfly them), how to cook lobster tails, all in just 20 minutes!',
            video: "https://www.youtube.com/watch?v=GqQdBrb6Ddg&ab_channel=TheStayAtHomeChef"
      },
      {
            img: recipe8,
            name: 'BAKED SALMON',
            desc: 'Learn how to cook salmon in the oven perfectly! This easy to make that is oven baked salmon recipe is fresh, flavorful, healthy, and ready in 15 minutes.',
            video: "https://www.youtube.com/watch?v=2uYoqclu6so&ab_channel=Downshiftology"
      }
]

const Recipes = () => {
      return (
            <div className="container">
                  <h2 className="text-danger mt-4 mb-3">Keto Diet Recipes</h2>
                  <h5 className="text-light">The importance of a balanced diet can’t be emphasized enough for a healthy lifestyle. A healthy lifestyle can be attained by maintaining a balanced diet and keeping into consideration to meet all the essential nutrients required by the body. A proper meal plan helps to attain ideal body weight and reduce the risk of chronic diseases like diabetes, cardiovascular and other types of cancer.</h5>
                  <hr className="text-light"/>
                  <div className="row">
                        {
                              recipes.map(recipe =><Recipe
                              key ={recipe.name}
                              recipe={recipe}></Recipe>)
                        }

                  </div>

            </div>
      );
};

export default Recipes;