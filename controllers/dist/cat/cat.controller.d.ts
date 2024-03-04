import { Response } from 'express';
import { Observable } from 'rxjs';
export declare class CatController {
    findAll(id: number, params: any): void;
    saveCatData(response: Response): void;
    getDocs(version: any): {
        url: string;
        statusCode: number;
    };
    findAllCard(): Observable<any[]>;
}
