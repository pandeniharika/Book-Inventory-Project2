module.exports = (sequelize, Sequelize) => {
  const Mybook = sequelize.define("mybook", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return Mybook;
};