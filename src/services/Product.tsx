import axios from "axios";
import { api } from "../api";

export const getAllProducts = async () => {
  try {
    const res = await api.get("/products");
    // console.log("getallproducts success", res.data);
    return res.data;
  } catch (error) {
    console.log("get all products error", error);
  }
};

export const createProduct = async (body: {
  name: string;
  category: number;
  barCode: string;
  createdBy: number;
}) => {
  try {
    const res = await api.post("/products", body);
    console.log("Createprod success", res.data);
    return res.data;
  } catch (error) {
    console.log("createProd error", error);
  }
};

export const findProductById = async (id: string) => {
  try {
    const res = await api.get(`/products/${id}`);
    // console.log("findProducts success", res.data);
    return res.data;
  } catch (error) {
    console.log("findProductsById error", error);
  }
};

export const deleteProduct = async (id: string) => {
  try {
    const res = await api.delete(`/products/${id}`);
    console.log("Delete success", res);
    return res.data;
  } catch (error) {
    console.log("DeleteById error", error);
  }
};
