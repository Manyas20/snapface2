import { Component, OnInit, Input } from '@angular/core';
import{FaceSnap }from '../modeles/face-snap.model';
import { FaceSnapsService } from '../services/face-snap.service';


@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{ 
  @Input () faceSnap!: FaceSnap;
  
  buttonText! : string;

  constructor ( private faceSnapsService: FaceSnapsService )  {}

  ngOnInit(){
  this.buttonText= "Oh Snap!";
  }

  onSnap(){
  if (this.buttonText === 'Oh Snap!') {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id);
    this.buttonText= 'oups, unSnap';
  } else {
    this.faceSnap.snaps--;
    this.buttonText='Oh Snap!';
  }
  }
}
