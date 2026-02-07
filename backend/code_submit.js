import axios from "axios"; 
import dotenv from "dotenv";
dotenv.config();

export  async function code_submission(lang, code) {
    const ans  = await axios.post("https://api.jdoodle.com/v1/execute",{
        clientId: process.env.clientid,
        clientSecret: process.env.clientsecret,
        script: code,
        stdin : "",
        language: lang, 
        versionIndex: "3",
    } )

    return ans.data;  
}