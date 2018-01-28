import { Component, OnInit } from "@angular/core";
import { Moment } from "moment";
import * as moment from "moment";

@Component({
  selector: "app-sleep-time",
  templateUrl: "./sleep-time.component.html",
  styleUrls: ["./sleep-time.component.css"]
})
export class SleepTime implements OnInit {
  minutesAgo: number[] = [5, 10, 15, 20];
  currentBabyState: Action;
  lastStateChange: Moment;

  constructor() {}

  ngOnInit() {
    if (!this.currentBabyState) {
      this.currentBabyState = Action.WAKE_UP;
    }
  }

  get nextBabyState() {
    return this.currentBabyState == Action.FALL_ASLEEP
      ? Action.WAKE_UP
      : Action.FALL_ASLEEP;
  }

  changeState(minutesAgo: number) {
    this.currentBabyState = this.nextBabyState;
    this.lastStateChange = moment().subtract(minutesAgo, "minute");
  }
}

enum Action {
  "FALL_ASLEEP" = "zasnęła",
  "WAKE_UP" = "wstała"
}
