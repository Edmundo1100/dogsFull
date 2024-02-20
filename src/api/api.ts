export const API_URL = "https://dogsapi.origamid.dev/json";

export function TOKEN_POST(body: any) {
  return {
    url: API_URL + "/jwt-auth/v1/token",
    options:{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    }
  };
}

export function GET_USER(token: any) {
  return {
    url: API_URL + "/api/user",
    options:{
        method: "GET",
        headers: {
          Authorization: 'Bearer ' + token,
        },
    }
  };
}

