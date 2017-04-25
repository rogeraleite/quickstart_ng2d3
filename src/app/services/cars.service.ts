import {Injectable} from '@angular/core';
import {Cars} from '../shared/cars';

@Injectable()

export class CarsService {
	
	getCars(){
		return Promise.resolve(Cars)
	}

}