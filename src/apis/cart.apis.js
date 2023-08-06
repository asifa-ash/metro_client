const {axios}=require("./api.config")
export const cart={
    add:(data )=>{
        console.log("text");
        return axios.post("/cart/add", data);

    },
    count:(data)=>{
        return axios.get("/cart/count",data)
    },
    getCart() {
        return axios.get("/cart/getCart");
      },
   
}