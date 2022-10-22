import { Injectable } from '@angular/core';
import { Feelings } from 'src/app/types/Guess';

@Injectable({
  providedIn: 'root'
})
export class GuessService {
  color: string = '';
  image: string = '';
  msg: string = '';

  guessImages: Feelings = {
    happy: 'https://www.rarejob.com/cms/wp-content/uploads/2021/06/210626-750x491.jpg',
    cranky: 'https://image.shutterstock.com/image-photo/cranky-child-boy-refuses-go-600w-1112575511.jpg',
    sad: 'https://image.shutterstock.com/image-photo/sad-woman-hug-her-knee-600w-381189358.jpg',
    upset: 'https://image.shutterstock.com/image-photo/tired-depressed-bored-african-businessman-600w-1368244247.jpg',
    ticked: 'https://image.shutterstock.com/image-photo/closeup-portrait-handsome-man-eyeglasses-600w-1759890674.jpg',
    angry: 'https://image.shutterstock.com/image-vector/angry-emotion-reaction-symbol-icon-600w-620790257.jpg',
    furios: 'https://image.shutterstock.com/image-photo/arab-man-wearing-camouflage-army-600w-2208857797.jpg'
  }

  getColor(diff: number){
    if(diff > 50) this.color = 'red';
    else if(diff >= 25) this.color ='orange';
    else if(diff >= 10) this.color ='yellow';
    else if(diff >= 5) this.color ='blue';
    else if(diff >= 3) this.color ='skyblue';
    else if(diff >= 1) this.color ='green';
    else if(diff == 0) this.color = 'pink';

    return this.color;
  }

  getMsg(diff: number){
    if(diff > 50) this.msg = 'Over 50';
    else if(diff >= 25) this.msg ='differ 25~49';
    else if(diff >= 10) this.msg ='differ 10~24';
    else if(diff >= 5) this.msg ='differ 5~9';
    else if(diff >= 3) this.msg ='differ 3~4';
    else if(diff >= 1) this.msg ='So close!!';
    else if(diff == 0) this.msg = 'Correct!!';

    return this.msg;
  }

  getImage(diff: number){
    if(diff >= 50) this.image = this.guessImages.furios;
    else if(diff >= 25) this.image = this.guessImages.angry;
    else if(diff >= 10) this.image = this.guessImages.ticked;
    else if(diff >= 5) this.image = this.guessImages.upset;
    else if(diff >= 3) this.image = this.guessImages.sad;
    else if(diff >= 1) this.image = this.guessImages.cranky;
    else if(diff == 0) this.image = this.guessImages.happy;

    return this.image;
  }

  constructor() { }
}
