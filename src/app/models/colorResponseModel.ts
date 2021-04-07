import { Color } from "./color";
import { ResponseModel } from "./responseModel";

export interface BrandResponseModel extends ResponseModel{
    data : Color[];
}