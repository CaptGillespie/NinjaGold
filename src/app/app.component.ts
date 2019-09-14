import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  Gold = 0;
  Activity = [];

Job(){
  var rand = Math.random()*3 +3;
  this.Gold+=(Math.floor(rand));
  this.Activity.push("Ninja got a job and made " + Math.floor(rand) +" gold!")
}
Dragon(){
  var rand = Math.random()*10 +5;
  this.Gold+=(Math.floor(rand));
  this.Activity.push("Ninja Tamed a Dragon and made " + Math.floor(rand) +" gold!")
}
Pet(){
  var rand = Math.random()*6 +15;
  this.Gold+=(Math.floor(rand));
  this.Activity.push("Ninja Pet a Therapist and made " + Math.floor(rand) +" gold!")
}
Casino(){
  var rand = Math.random()*10 +15;
  this.Gold+=(Math.floor(rand));
  this.Activity.push("Ninja went to the Casino " + Math.floor(rand) +" gold!")
}



}

