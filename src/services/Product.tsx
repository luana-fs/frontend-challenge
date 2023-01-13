import axios from "axios";

export const getAllProducts = async () => {
  try {
    const res = await axios.get("http://192.168.3.48:3307/products");
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
    const res = await axios.post("http://192.168.3.48:3307/products", body, {
      headers: {
        auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuYUBlbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1NiIsImlhdCI6MTY3MzU3MzE1OH0.D6iPNSW0uARW_VY_MNRlU8gUqjaWcAj64mqyM-8XqTQ",
      },
    });
    console.log("Createprod success", res.data);
    return res.data;
  } catch (error) {
    console.log("createUser error", error);
  }
};

export const findProductById = async (id: string) => {
  try {
    const res = await axios.get(`http://192.168.3.48:3307/products/${id}`, {
      headers: {
        auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuYUBlbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1NiIsImlhdCI6MTY3MzU3MzE1OH0.D6iPNSW0uARW_VY_MNRlU8gUqjaWcAj64mqyM-8XqTQ",
      },
    });
    // console.log("findProducts success", res.data);
    return res.data;
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
