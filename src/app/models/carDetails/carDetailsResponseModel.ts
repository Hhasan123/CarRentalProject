import {ResponseModel} from "../responseModel"
import { CarDetails } from "./carDetails";
export interface CarDetailsResponseModel extends ResponseModel{
data:CarDetails[]
}