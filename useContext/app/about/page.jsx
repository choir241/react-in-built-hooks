"use server"
export async function addAccount(prevState, queryData){
    const name = queryData.get("name");
    const email = queryData.get("email");
    const password = queryData.get("password");


    return {name, email, password};
}