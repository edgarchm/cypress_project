// TODO: Move these to a config file
const ocapiBaseURL = 'https://test.com/s/CosmoProf/dw/shop/v19_5';
const ocapiClientID = '8eda7b30-135c-40d7-9567-3006a01b0bxy';

const authGuestCustomer = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");

    var raw = JSON.stringify({
        "type": "guest"
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };


    const response = await fetch(ocapiBaseURL + "/customers/auth?client_id=" + ocapiClientID, requestOptions);
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    return response.headers.get('Authorization');
};

const createCustomerAccount = async (authorization, options) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", authorization);

    var raw = JSON.stringify(options);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    const response = await fetch(ocapiBaseURL + "/customers", requestOptions);
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    // console.log("createCustomerAccount response = " + await response.text());
    return null;
};

const createCustomer = async (options) => {

    let authorization = await authGuestCustomer();
    if (authorization) {
        await createCustomerAccount(authorization, options);
    }
    return null;
}
exports.createCustomer = createCustomer;
