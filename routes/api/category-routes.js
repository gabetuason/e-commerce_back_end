const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// CRUD operations

router.get('/', async (req, res) => {
  // finds all categories
  // includes its associated Products. Findall method from sequelize: categories and associated products
  try {
    const categoriesData = await Category.findAll({ 
      include: [{ model: Product }],
    });
    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // finding one category by its `id` value
  // includes its associated Products. Contains only a single entry from a table
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });

    if (!categoryData) {
     res.status(404).json({ message: 'No category found with this id!' });
     return;
  }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post('/', async (req, res) => {
  // creates a new category
  // create method from sequelize
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  // uses the update method from Sequelize.
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

  if (!categoryData[0]) {
     res.status(404).json({ message: 'No category found with that id!' });
     return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  // using the destroy method from Sequelize.
   try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
