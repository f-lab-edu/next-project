import { AxiosRequestConfig } from "axios";

export interface BaseAxiosRes extends Record<string, unknown> {}

export interface BaseAxiosReq extends AxiosRequestConfig {}
