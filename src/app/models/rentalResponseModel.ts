import { Rental } from "./rental";
import { ResponseModel } from "./responseModel";

export interface RentalResponseMode extends ResponseModel{
    data : Rental[];
}