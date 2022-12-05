import axios from "axios";

export const getAllProducts = async () => {
  try {
    const res = await axios.get("/products");
    console.log("getallproducts success", res.data);
  } catch (error) {
    console.log("get all products error", error);
  }
};

export const createProduct = async (body: {
  id: string;
  name: string;
  category: string;
  barCode: string;
  createdyBy: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
}) => {
  try {
    const res = await axios.post("/products", body);
    console.log("CreateUser success", res.data);
  } catch (error) {
    console.log("createUser error", error);
  }
};

export const findProductById = async (id: string) => {
  try {
    const res = await axios.get(`/products/${id}`);
    console.log("findProducts success", res.data);
    return res;
  } catch (error) {
    console.log("findProductsById error", error);
  }
};
