
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
      },
      requirements: {
        type: type.STRING,
      },
      details: {
        type:type.BOOLEAN
      },
      coordinator: {
        type:type.BOOLEAN
      },
      description: {
        type: type.STRING,
      },
      createdBy: { type: type.STRING },
    },
    { timestamps: false }
  );
  return Project;
};
