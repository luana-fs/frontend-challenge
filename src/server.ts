import { createServer, Model } from "miragejs";

export const server = () =>
  createServer({
    models: {
      users: Model,
      products: Model,
    },
    routes() {
      this.get("/users", (schema) => {
        return {
          data: [
            ...schema.users.all().models,
            {
              id: "1",
              name: "Luana Farias",
              email: "luana@deliver.com",
              role: "SuperAdmin",
              password: "bananinha",
            },
            {
              id: "2",
              name: "Lígia",
              email: "ligia@deliver.com",
              role: "Admin",
              password: "pipoca",
            },
          ],
        };
      });
      this.namespace;
      //pegar usuário por id
      this.get("/users/:id", (schema, request) => {
        const user = schema.users.find(request.params.id); //retorna null se id não existe
        return user;
      });

      //pega objeto por propriedades iguais
      this.post(`/users/getBy`, (schema, request) => {
        const res = schema.users.where(request.queryParams);
        return res.models;
        //pra voltar certinho os ids na hora da ceianção precisam ser diferentes
      });

      //criar usuário
      this.post("/users", (schema, request) => {
        let body = JSON.parse(request.requestBody);
        return schema.users.create(body);
      });

      //delete user by Id
      this.delete("/users/:id", (schema, request) => {
        return schema.users.find(request.params.id).destroy();
      });

      //pegar todos produtos
      this.get("/products", (schema) => {
        return {
          data: [
            ...schema.products.all().models,
            {
              id: "1",
              name: "Camiseta Adeus Tokyo",
              category: "Roupas",
              barCode: "9039908202",
              createdyBy: {
                id: "2",
                name: "Lígia",
                email: "ligia@deliver.com",
                role: "Admin",
              },
            },
          ],
        };
      });

      //criar produto
      this.post("/products", (schema, request) => {
        let body = JSON.parse(request.requestBody);
        return schema.products.create(body);
      });

      //pegar produto por id
      this.get("/products/:id", (schema, request) => {
        const product = schema.products.find(request.params.id); //retorna null se id não existe
        return product;
      });

      //delete product by Id
      this.delete("/products/:id", (schema, request) => {
        console.log("schema", schema.products);
        console.log("request", schema.products.find(request.params.id));
        return schema.products.find(request.params.id).destroy();
      });
    },
  });

//examples https://github.com/miragejs/tutorial/blob/master/src/lib/server-final.js
