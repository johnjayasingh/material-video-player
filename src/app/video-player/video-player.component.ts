import { Component, OnInit, ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ElementRef } from '@angular/core/src/linker/element_ref';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit, AfterViewInit {
  @ViewChild('video') video: any;
  videoPlayer: HTMLVideoElement;
  currentTime: String = "00:00";
  totalTime: String = "00:00";
  currentTimeSeconds: number = 0;
  currentTimePercentage: number = 0;
  isPaused: Boolean = true;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.videoPlayer = this.video.nativeElement;
    setInterval(() => {
      //String("0" + this.videoPlayer.currentTime).slice(-2)
      this.currentTime = this.returnTime(this.videoPlayer.currentTime);
      this.totalTime = this.returnTime(this.videoPlayer.duration);
      this.isPaused = this.videoPlayer.paused;
      this.currentTimeSeconds = this.videoPlayer.currentTime;
      this.currentTimePercentage = (this.videoPlayer.currentTime / this.videoPlayer.duration) * 100;
    }, 10)
  }


  hover(event) {
    // console.log(event.offsetX + ":" + event.offsetY)
  }

  click(event) {
    // this.currentTimePercentage = event.offsetX;
    let clickedPosPercentage = (event.offsetX / event.target.clientWidth) * 100;
    this.videoPlayer.currentTime = (this.videoPlayer.duration / 100) * clickedPosPercentage;
    // this.currentTimePercentage = 
    // console.log(event.offsetX + ": OffsetX");
    // console.log(event.offsetX + ": OffsetX");
    // console.log(this.videoPlayer.currentTime)
  }

  returnTime(time: number) {
    return String("0" + Math.floor(time / 60)).slice(-2) + ":" + String("0" + Math.floor(time % 60)).slice(-2);
  }

  play() {
    this.videoPlayer.play();
    this.isPaused = false;
  }
  pause() {
    this.videoPlayer.pause();
    this.isPaused = true;
  }

  mute() {
    this.videoPlayer.muted = !this.videoPlayer.muted;
  }

  seek() {

  }

}
