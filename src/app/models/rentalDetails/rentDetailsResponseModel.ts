import { ResponseModel } from "../responseModel";
import { RentDetails } from "./rentalDetails";

export interface RentDetailsResponseModel extends ResponseModel{
    data:RentDetails[];
}