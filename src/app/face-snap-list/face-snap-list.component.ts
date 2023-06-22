import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../modeles/face-snap.model';
import { FaceSnapsService } from '../services/face-snap.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit{
  faceSnaps!:FaceSnap[];

  constructor(private faceSnapService: FaceSnapsService){

  }
  ngOnInit(): void{
    this.faceSnaps = this.FaceSnapsService.getAllFaceSnaps() ;   /* permet de modifier comme ont veut l'implementation de cette methode a partir du momment qu'il continue a renvoyer les facesnaps au component */   
}
}
