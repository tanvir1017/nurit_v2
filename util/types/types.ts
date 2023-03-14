/////////////////////////////
/////// ENUM SECTION ///////
///////////////////////////
export enum DB_OPERATION_METHOD {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export enum USER__ROLE {
  ADMIN = "admin",
  MEMBER = "member",
  STUDENT = "student",
}
/////////////////////////////
/// KEY VALUE WISE TYPE ////
///////////////////////////
export type registerBodyDataType = {
  first__name: string;
  last__name: string;
  email__id: string;
  password: string;
  photo__URL: string;
  gender: string;
  phone__numb: number;
};

/////////////////////////////
////// FUNCTION TYPE ///////
///////////////////////////
export type A__SingleModelFunctionType = (
  id?: string | string[] | undefined
) => Promise<{} | null>;

export type GetAllUserFunctionType = () => Promise<{} | null>;
export type registerAUserFunctionType = (
  bodyData: registerBodyDataType
) => Promise<{} | null>;

// COMMENT => blogs section function type
export type GetAllBlogsFunctionType = () => Promise<{} | []>;
export type GetASingleBlogFunctionType = (
  slug?: string | string[] | undefined
) => Promise<{} | null>;
