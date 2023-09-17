const Items = require('./Schema');
const getAllItems = async (req, res) => {
  const items = await Items.find({});
  res.send(items);
};

module.exports = {
  getAllItems,
};
