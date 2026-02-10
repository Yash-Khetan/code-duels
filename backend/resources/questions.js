// questions.js

const questions = [
    {
        id: 1,
        title: "Sum of Two Numbers",
        difficulty: "easy",
        problemStatement: `
You are given two integers.
Print their sum.
    `.trim(),

        stdinFormat: "Two integers a and b",
        stdoutFormat: "Single integer representing a + b",

        constraints: "−10^9 ≤ a, b ≤ 10^9",

        testCases: [
            {
                input: "2 3",
                output: "5"
            },
            {
                input: "-10 4",
                output: "-6"
            },
            {
                input: "1000000000 -1000000000",
                output: "0"
            }
        ]
    },

    {
        id: 2,
        title: "Count Even Numbers",
        difficulty: "easy",
        problemStatement: `
Given a list of integers, count how many of them are even.
    `.trim(),

        stdinFormat: `
First line: integer n (number of elements)
Second line: n space-separated integers
    `.trim(),

        stdoutFormat: "Single integer – count of even numbers",

        constraints: `
1 ≤ n ≤ 10^5
−10^9 ≤ arr[i] ≤ 10^9
    `.trim(),

        testCases: [
            {
                input: "5\n1 2 3 4 5",
                output: "2"
            },
            {
                input: "3\n7 11 13",
                output: "0"
            },
            {
                input: "6\n2 4 6 8 10 12",
                output: "6"
            }
        ]
    }
];

export default questions;
