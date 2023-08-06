const {axios}=require("./api.config")
export const product={
    upload:(data )=>{
        return axios.post("/product/upload", data.body,data.option);

    },
    getAll() {
        return axios.get("/product/getAll");
      },
    
}