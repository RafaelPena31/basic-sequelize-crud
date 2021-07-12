const { create, find, update, findByPk, deleteById } = require("./index");

module.exports = {
  async create(request, response){
    const { name, born_date, nickname} = request.body;

    const user = await create({name, born_date, nickname});

    return response.json(user)
  },

  async update(request,response){
    const { name, born_date, nickname} = request.body;
    const { id } = request.params;

    const user = await update(id,{name, born_date, nickname});

    return response.json(user);
  },

  async find(request, response){
    const user = await find();

    return response.json(user)
  },

  async findUserByPk(request, response){
    const { id } = request.params;

    const user = await findByPk(id);

    return response.json(user)
  },

  async deleteById(request, response){
    const { id } = request.params;

    await deleteById(id);

    return response.sendStatus(200)
  }
}