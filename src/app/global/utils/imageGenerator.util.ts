import {Injectable} from '@angular/core';


@Injectable({
    providedIn:'root'
})
export class ImageGeneratorUtil{

    constructor(){

    }

    public getIcon(suffix: number): string | false{
        switch (suffix) {
            case 1:
                return 'assets/icons/home.png'
                break;
            case 2:
                return 'assets/icons/menu.png'
                break;
            case 3:
                return 'assets/icons/offert.png'
                break;
            default:
                return false;
        }

    }

}
