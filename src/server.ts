import { createServer, Model } from "miragejs";

export const server = () =>
  createServer({
    models: {
      users: Model,
      product: Model,
    },
    routes() {
      // this.get("/users", () => {
      //   return {
      //     data: [
      //       {
      //         id: "1",
      //         name: "Luana Farias",
      //         email: "luana@deliver.com",
      //         role: "SuperAdmin",
      //         password: "bananinha",
      //       },
      //       {
      //         " id": "2",
      //         name: "Lígia",
      //         email: "ligia@deliver.com",
      //         role: "Admin",
      //         password: "pipoca",
      //       },
      //     ],
      //   };
      // });
      this.namespace;
      this.get("/users", (schema) => {
        console.log("Mirage pegou", schema.users.all().models);
        return schema.users.all().models;
      });
      this.post("/users", (schema, request) => {
        let body = JSON.parse(request.requestBody);
        console.log(body);
        console.log("Mirage criou", schema.users.create(body));
        return schema.users.create(body);
      });
    },
  });
