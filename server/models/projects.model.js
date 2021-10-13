
module.exports = (sequelize, type) => {
  const Project = sequelize.define(
    "projects",
    {
      // id: {
      //   type: type.INTEGER,
      //   required: true,
      //   unique: true,
      //   primaryKey: true,
      // },
      title: {
        type: type.STRING,
        required: true
      },
      type: {
        type: type.STRING,
        required: true
      },
      requirements: {
        type: type.STRING,
        required: true
      },
      details: {
        type:type.STRING,
        required: true
      },
      coordinator: {
        type:type.STRING,
        required: true
      },
      description: {
        type: type.STRING,
        required: true
      },
      createdBy: { type: type.STRING },
    },
    { timestamps: false }
  );
  return Project;
};
