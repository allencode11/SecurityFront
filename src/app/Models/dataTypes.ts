export type Cripto = {
    plainText: string,
    key: string,
}

export type ResponseModel = {
    data: string,
    leftParts: string[],
    rightParts: string[],
    afterInitialPermutation: string,
    statusCode: number,
}