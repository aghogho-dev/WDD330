const baseURL = "http://wdd330-backend.onrender.com/checkout";

async function convertToJson(res) {
    const data = await res.json();
    if (res.ok) {
        return data;
    } else {
        // throw new Error("Bad Response");
        throw { name: "serviceError", message: data };
    }
}

export default class ExternalServices {
    constructor(category) {

    }

    async getData(category) {
        const response = await fetch(baseURL + `products/search/${category}`);
        const data = await convertToJson(response);
        return data.Result;
    }

    async findProductById(id) {
        const response = await fetch(baseURL + `product/${id}`);
        const data = await convertToJson(response);
        return data.Result;
    }

    async checkout(payload) {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        };

        return await fetch(baseURL + "checkout/", options).then(convertToJson);
    }
}