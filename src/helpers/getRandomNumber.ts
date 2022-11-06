type GetRandomNumber = (max: number) => number;
export const getRandomNumber: GetRandomNumber = (max) => Math.floor(Math.random() * max);
