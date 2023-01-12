import axios from "axios";

export const getAllProducts = async () => {
  try {
    const res = await axios.get("/products");
    console.log("getallproducts success", res.data.products);
    return res.data.products;
  } catch (error) {
    console.log("get all products error", error);
  }
};

export const createProduct = async (body: {
  id: string;
  name: string;
  category: string;
  barCode: string;
  createdBy: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
}) => {
  try {
    const res = await axios.post("/products", body);
    // console.log("CreateUser success", res.data.products);
    return res.data.products;
  } catch (error) {
    console.log("createUser error", error);
  }
};

export const findProductById = async (id: string) => {
  try {
    const res = await axios.get(`/products/${id}`);
    // console.log("findProducts success", res.data);
    return res;
  } catch (error) {
    console.log("findProductsById error", error);
  }
};

export const deleteProduct = async (id: string) => {
  try {
    const res = await axios.delete(`/products/${id}`);
    console.log("Delete success", res);
    return res.data;
  } catch (error) {
    console.log("DeleteById error", error);
  }
};
