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
export type bodyDataType = {
  id?: string;
  first__name: string;
  last__name: string;
  username: string;
  email__id: string;
  password: string;
  photo__URL: string;
  gender: string;
  phone__numb: number;
  role?: string;
  createdAt?: string;
  updatedAt?: string;
};

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
      verifiedToken: {
        email__id: string | null;
        iat: number | null;
        id: string | null;
        role: string | null;
      };
    };
    error: string;
    isLoading: boolean;
    mutate: () => {};
    routerPath: string;
  };
}

export interface Data {
  success: boolean;
  message: string;
  dataCounted?: number;
  returnData?: {} | [] | null;
}

// COMMENT: => Blogs section type start from here
export interface TagValueOption {
  label: string;
  value: string;
}

export type BlogBodyDataType = {
  slug: string;
  title: string;
  sub_title: string;
  cover: string;
  thumbnail: string;
  html: string;
  tags: string[];
  authorId: string;
  readTime: string;
};

export interface CookieType {
  id: string;
  first__name: string;
  last__name: string;
  photo__URL: string;
  role: string;
  iat: number;
}

export interface DashBoardAuthorTableType {
  id: string;
  createdAt: string;
  updatedAt: string;
  first__name: string;
  last__name: string;
  email__id: string;
  photo__URL: string;
  phone__numb: number;
  gender: string;
  role: string;
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
  bodyData: bodyDataType
) => Promise<{} | null>;

// COMMENT => blogs section function type
export type GetAllBlogsFunctionType = () => Promise<{} | []>;

export type PostABlogToDB = (
  blogBodyDataType: BlogBodyDataType
) => Promise<{} | null>;

// COMMENT => Global function type

export type GetASingleDataFunctionType = (
  slug: string | undefined
) => Promise<{} | null>;
