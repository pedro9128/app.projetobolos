import { Component } from "@angular/core";
import { BolosService } from "../services/bolos.service";
import { Bolos } from "../models/bolos";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-bolo",
  templateUrl: "./bolo.page.html",
  styleUrls: ["./bolo.page.scss"]
})
export class BoloPage {
  bolos: Bolos[];
  constructor(
    private bolosService: BolosService,
    public activatedRoute: ActivatedRoute
  ) {}

  ionViewDidEnter() {
    let name = this.activatedRoute.snapshot.paramMap.get("name");
    this.bolosService.getBoloById(name).subscribe((res: Bolos) => {
      this.bolos = Object.values(res)
    });
  }
}
