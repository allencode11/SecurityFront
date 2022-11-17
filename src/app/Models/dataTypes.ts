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

export type RsaRequestDataModel = {
  firstPrim: number,
  secondPrim: number,
  message: number,
  eNumber: number,
}

export type RsaResponseDataModel = {
  message: number,
  status: number,
}
