const express = require("express");
const route = express.Router();
//const exp=require("express").Router();

const posts = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
];

// GET method
route.get("/", (req, res) => {
  //logics in db for retriving data
  res.send(posts);
});

//accessing posts methods body
route.post("./", (req, res) => {
  //accessing req.body will returns undefined,
  //In order to access req.body we have to use middleware express.json()
  console.log(req.body);
  //logics in db
  res.send(req.body);
});

//accessing data from url using req.params
route.put("./:id", (req, res) => {
  console.log(req.params);
  //logics
  res.send({ ...req.body, userId: req.body.userId });
});

route.delete("/:id", (req, res, next) => {
  console.log(req.params.id);
  //logic in  db to delete data
  res.end();
});

module.exports = route;
