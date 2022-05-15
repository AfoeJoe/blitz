import { Attempts, Questions, User } from "@prisma/client"

export function getQuestions(): Partial<Questions>[] {
  return [
    {
      question: "I _____ a dog and two cats.",
      options: ["is", "are", "have", "has"],
      correctAnswer: 2,
      subject: "english",
    },
    {
      question: "You ____ red hair.",
      options: ["is", "are", "have", "has"],
      correctAnswer: 2,
      subject: "english",
    },
    {
      question: "She ____ blue eyes.",
      options: ["is", "are", "have", "has"],
      correctAnswer: 3,
      subject: "english",
    },
    {
      question: "Jackie _____ many books.",
      options: ["is", "are", "have", "has"],
      correctAnswer: 3,
      subject: "english",
    },
    {
      question: "She ____ blue eyes.",
      options: ["is", "are", "have", "has"],
      correctAnswer: 3,
      subject: "english",
    },
    {
      question: "The zoo _____ many animals.",
      options: ["is", "are", "have", "has"],
      correctAnswer: 3,
      subject: "english",
    },
    {
      question: "Maths question He ......a new watch",
      options: ["is", "are", "have", "has"],
      correctAnswer: 3,
      subject: "maths",
    },
    {
      question: "We .....two hamsters",
      options: ["is", "are", "have", "has"],
      correctAnswer: 2,
      subject: "english",
    },
    {
      question: "We....a new class teacher",
      options: ["is", "are", "have", "has"],
      correctAnswer: 2,
      subject: "english",
    },
    {
      question: "She....a good girl",
      options: ["is", "are", "have", "has"],
      correctAnswer: 0,
      subject: "english",
    },
    {
      question: "We _____ happy.",
      options: ["is", "are", "have", "has"],
      correctAnswer: 1,
      subject: "english",
    },
  ]
}

export function getUsers(questions: Questions[]) {
  return [
    {
      email: "12345@y.com",
      hashedPassword:
        "JGFyZ29uMmlkJHY9MTkkbT02NTUzNix0PTIscD0xJHpqVFZtenIxV3FYTk9xM0c4VFZuYlEkQ1c2bVRWc3Jqc1ZORUxJdzhEUmt6VVlxNjlBaXFwWkRRL01tWk10akIzYwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=", //1234567890
      Attempts: {
        create: [
          {
            questionId: [
              questions[0]?.id,
              questions[2]?.id,
              questions[9]?.id,
              questions[1]?.id,
              questions[3]?.id,
            ],
            userAnswers: [0, 2, 3, 2, 3],
            result: 1000,
          },
        ],
      },
    },
    {
      email: "123459@y.com",
      hashedPassword:
        "JGFyZ29uMmlkJHY9MTkkbT02NTUzNix0PTIscD0xJDg1ZGo0S2ZUbzNEM2VFb3ovRmQxcmckVDdabWZ4d2tnUjg1ZWM3bWJQUlVvbkZyN0ZINHNLZkExUjdCTno5UlJaNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=", //1234567899
      Attempts: {
        create: [
          {
            questionId: [questions[1]?.id],
            userAnswers: [0],
            result: 1000,
          },
        ],
      },
    },
  ]
}
