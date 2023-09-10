// import { notification } from "antd";
import { create } from "apisauce";
 import AuthService from "./auth.service";
// import { unAuthenticatedRoutesConstant, userInfo } from "./constant";

// define the api
const apiInstance = create({
    baseURL: 'https://blog-api-testing.squadcodersdev.com/api',
});

const get = (url, queryParams, config) => {
    const response = apiInstance.get(url, queryParams, config);
    //   return handleReponse(response);
    return response;
};

const post = (url, data, config) => {
    const response = apiInstance.post(url, data, config);
    // return handleReponse(response);
    return response;

};

const put = (url, data, config) => {
    const response = apiInstance.put(url, data, config);
    // return handleReponse(response);
    return response;
};

const patch = (url, data, config) => {
    const response = apiInstance.patch(url, data, config);
    // return handleReponse(response);
    return response;
};

const deleteRequest = (url, queryParams, config) => {
    const response = apiInstance.delete(url, queryParams, config);
    // return handleReponse(response);
    return response;
};

// const handleReponse = (response) => {
//     if (response.status === 401) {
//         localStorage.removeItem(userInfo.TOKEN);
//         localStorage.removeItem(userInfo.USERNAME);
//         window.location.href = unAuthenticatedRoutesConstant.Login;
//     }

//     // if (!response.ok) {
//     //   // notification.info({
//     //   //   message: `something went wrong`,
//     //   //   placement: "topRight",
//     //   // });
//     // }

//     return response;
// };

apiInstance.addRequestTransform((request) => {
    if (AuthService.isTokenExist()) {
        request.headers["Authorization"] = `Bearer ${AuthService.isTokenExist()}`;
    }
});

export const ApiService = {
    get,
    post,
    put,
    patch,
    deleteRequest,
};