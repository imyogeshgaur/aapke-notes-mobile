import { decode } from "jsonwebtoken";

const decodeUser = (token: any) => {
    const decodedValue: any = decode(token, { complete: true })
    return decodedValue?.payload?.userId;
}

export default decodeUser;