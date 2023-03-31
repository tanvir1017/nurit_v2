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
  id?: string;
  first__name: string;
  last__name: string;
  email__id: string;
  password: string;
  photo__URL: string;
  gender: string;
  phone__numb: number;
  role?: string;
};

export interface LoginWithExistingEmailType {
  id: string;
  first__name: string;
  last__name: string;
  email__id: string;
  password: string;
  photo__URL: string;
  phone__numb: number;
  gender: string;
  role: string;
}

export interface responseType {
  title: string;
  description: string;
  image: string;
  isShowButton: boolean | null;
  buttonText: string;
  buttonLink?: string;
}

export interface ShareContextType {
  allContext: {
    data: {
      verifiedToken: string;
    };
    error: string;
    isLoading: boolean;
    mutate: () => {};
  };
}

/////////////////////////////
////// FUNCTION TYPE ///////
///////////////////////////
export type A__SingleModelFunctionType = (
  id?: string | undefined
) => Promise<{} | null>;
export type LoginUserModelFunctionType = (
  email__id?: string | undefined
) => any;

export type GetAllUserFunctionType = () => Promise<{} | null>;
export type registerAUserFunctionType = (
  bodyData: registerBodyDataType
) => Promise<{} | null>;

// COMMENT => blogs section function type
export type GetAllBlogsFunctionType = () => Promise<{} | []>;

export type GetASingleBlogFunctionType = (
  slug: string | undefined
) => Promise<{} | null>;
