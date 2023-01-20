import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FaceSnap } from '../models/face-snap-model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {

 faceSnap$!:Observable<FaceSnap>;

  buttonText!: string;
  constructor( private faceSnapsService: FaceSnapsService, private route: ActivatedRoute){}

  ngOnInit(){
 
    this.buttonText = 'Oh snap !';
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(snapId);

  }

  onSnap(){
    // if(this.buttonText === 'Oh snap !'){
    //   this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
    //   this.buttonText = 'Oops, unSnap !';
    // } else {
    //   this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    //   this.buttonText = 'Oh snap !';
    // }
  }

}
