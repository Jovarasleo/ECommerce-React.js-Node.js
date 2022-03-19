const fetchAPI = {
  fetchItems: async () => {
    try {
      console.log("fetchAPi");
      const response = await fetch("http://127.0.0.1:4000/items", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};
export default fetchAPI;
