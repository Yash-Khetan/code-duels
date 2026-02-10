import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export async function code_submission(lang, code, testCases) {
    for (let tc of testCases) {
        const res = await axios.post(
            "https://api.jdoodle.com/v1/execute",
            {
                clientId: process.env.clientid,
                clientSecret: process.env.clientsecret,
                script: code,
                stdin: tc.input,
                language: lang,
                versionIndex: ""
            }
        );

        const actual = (res.data.output || "").trim();
        const expected = tc.output.trim();

        if (actual !== expected) {
            return {
                verdict: "WRONG_ANSWER",
                failedTestCase: tc,
                actual
            };
        }
    }

    return { verdict: "ACCEPTED" };
}
