export type GetASingleUserFunctionType = (
  id: string | undefined
) => Promise<{} | null>;

export enum DB_OPERATION_METHOD {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}
