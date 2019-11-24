import { Component, OnInit } from "@angular/core";
import { BolosService } from "../services/bolos.service";
import { Bolos } from "../models/bolos";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  bolos: Bolos[];
  constructor(private bolosService: BolosService) {}

  ngOnInit() {
    this.bolosService.getBolos().subscribe((res: Bolos[]) => {
      this.bolos = res['bolos']
    });
  }
}
