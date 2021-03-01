import { Injectable } from '@angular/core';

const PRODUCTS = [
  {
    id: 1,
    name: 'BAKED OATMEAL',
    imageUrl: 'assets/oatsville/gettyimages-1170856611-170667a-removebg-preview 1.png',
    backgroundColor: '#191919',
    ingredients: [
      '1/3 cup butter',
      '2 large eggs',
      '3/4 cup brown sugar',
      '1½ teaspoons baking powder',
      '1½ teaspoons vanilla',
      '1 teaspoon nutmeg or 1 teaspoon cinnamon',
      '1/4 teaspoon salt',
      '1 cup milk',
      '2 tablespoons milk',
      '3 cups Oatsville Oats(Quick or Old Fashioned)'
    ],
    directions: [
      'Melt butter.',
      'Grease 1 1/2 quart baking dish and drop in eggs and beat well.',
      'Add brown sugar, baking powder, vanilla, nutmeg or cinnamon, and salt. Mix well, no lumps.',
      'Whisk in butter and both measures of milk, then add Oatsville Oats.',
      'Stir well, and refrigerate overnight.',
      'Bake, uncovered, at 350 for 35-45 min, or until set in the middle.',
      'Serve hot with warm milk poured over.'
    ]
  },
  {
    id: 2,
    name: 'OATMEAL MUFFIN',
    imageUrl: 'assets/oatsville/gettyimages-908182132-170667a-removebg-preview 2.png',
    backgroundColor: '#F1D0A7',
    ingredients: [
      '2 cups Oatsville Oats (Quick or Old Fashioned)',
      '1 cup milk¹',
      '1/2 cup pure maple syrup',
      '1/3 cup oil²',
      '2/3 cup light brown sugar³ packed',
      '2 large eggs lightly beaten',
      '1½ cups all-purpose flour',
      '1 teaspoon baking powder',
      '1/2 teaspoon ground cinnamon',
      '1/2 teaspoon baking soda',
      '1/2 teaspoon kosher salt⁴',
      'Sparkling or raw sugar optional'
    ],
    directions: [
      'Preheat the oven to 400 F. Line a 12-cup muffin tin with paper liners.',
      'Combine the Oatsville Oats and milk in a large bowl.',
      'Add the maple syrup, oil, brown sugar, and eggs. Mix until combined.',
      'Stir in the flour, baking powder, cinnamon, baking soda, and salt just until combined. The batter will be wet.',
      'Divide the batter between the prepared muffin tins.',
      'Sprinkle sugar over batter, if using.',
      'Bake for 18-25 minutes, or until the muffins spring back when lightly pressed',
      'Let the muffins cool in the tin for 5 minutes.',
      'Remove to wire rack to finish cooling.'
    ]
  },
  {
    id: 3,
    name: 'GRANOLA',
    imageUrl: 'assets/oatsville/gettyimages-1170856611-170667a-removebg-preview 1.png',
    backgroundColor: '#A56037',
    ingredients: [
      '4 cups Oatsville Oats (Quick or Old Fashioned)',
      '1½ cup raw nuts and/or seeds (I used pecans)',
      '1/2 teaspoon salt',
      '1/2 teaspoon ground cinnamon',
      '1/2 cup olive oil',
      '1/2 cup honey',
      '1 teaspoon vanilla extract',
      'Totally optional additional mix-ins: ½ cup chocolate chips or coconut flakes'
    ],
    directions: [
      'Preheat oven to 350 degrees Fahrenheit and line a large, rimmed baking sheet with parchment paper.',
      'In a large mixing bowl, combine Oatsville Oats, nuts and/ or seeds, salt and cinnamon.Stir to blend.',
      'Pour in the oil, honey and vanilla.Mix well, until every oat and nut is lightly coated. Pour the granola onto your prepared pan and use a large spoon to spread it in an even layer.',
      'Bake until lightly golden, about 20 minutes, stirring partway.The granola will further crisp up as it cools.',
      'Let the granola cool completely.Top with the optional chocolate chips, if using.Break the granola into pieces with your hands if you want to retain big chunks, or stir it around with a spoon if you don’t want extra - clumpy granola.',
      'Store the granola in an airtight container at room temperature for 1 to 2 weeks.'
    ]
  },
  {
    id: 4,
    name: 'TRIPPLE BERRY CRISP',
    imageUrl: 'assets/oatsville/gettyimages-908182132-170667a-removebg-preview 1.png',
    backgroundColor: '#D89441',
    ingredients: [
      '1½ cups fresh blackberries',
      '1½ cups fresh raspberries',
      '1½ cups fresh blueberries',
      '4 tablespoons white sugar',
      '2 cups all-purpose flour',
      '2 cups Oatsville Oats (Quick or Old Fashioned)',
      '1½ cups packed brown sugar',
      '1 teaspoon ground cinnamon',
      '1/2 teaspoon ground nutmeg',
      '1½ cups butter'
    ],
    directions: [
      'In a large bowl, gently toss together blackberries, raspberries, blueberries, and white sugar; set aside.',
      'In a separate large bowl, combine flour, Oatsville Oats, brown sugar, cinnamon, and nutmeg. Cut in butter until crumbly. Press half of mixture in the bottom of a 9x13 inch pan. Cover with berries. Sprinkle remaining crumble mixture over the berries.',
      'Bake in the preheated oven for 30 to 40 minutes, or until fruit is bubbly and topping is golden brown. Serve warm with vanilla ice cream.'
    ]
  }
]

@Injectable({
  providedIn: 'root'
})


export class ProductsInfoService {

  getProducts() {
    return PRODUCTS;
  }

  getProduct(id: number) {
    const product = PRODUCTS.find((x) => x.id === id);
    return product;
  }

  constructor() { }
}
