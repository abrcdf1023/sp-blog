import { AxiosError, AxiosResponse } from "axios";
import { SWRResponse } from "swr";
import { SWRInfiniteResponse } from "swr/infinite";

export interface PathParams {
    [key: string]: string | undefined;
}

export interface ReturnedValues<Data, ErrorData> {
    data?: Data;
    mutate: SWRResponse<AxiosResponse<Data>, AxiosError<ErrorData>>["mutate"];
    response?: AxiosResponse<Data>;
    error?: AxiosError<ErrorData>;
    isError: boolean;
    key: string | null;
    isValidating: boolean;
}

export interface ReturnedInfiniteValues<Data, ErrorData>
  extends Omit<
    ReturnedValues<Data, ErrorData>,
    "data" | "mutate" | "response" | "key"
  > {
  data?: Data[];
  mutate: SWRInfiniteResponse<
    AxiosResponse<Data>,
    AxiosError<ErrorData>
  >["mutate"];
  response?: AxiosResponse<Data>[];
  setSize: SWRInfiniteResponse["setSize"];
  size: SWRInfiniteResponse["size"];
}