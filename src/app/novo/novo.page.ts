import { Component, OnInit } from "@angular/core";
import { BolosService } from "../services/bolos.service";
import { Bolos } from "../models/bolos";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-novo",
  templateUrl: "./novo.page.html",
  styleUrls: ["./novo.page.scss"]
})
export class NovoPage implements OnInit {
  formBolo: FormGroup;
  bolo: Bolos;

  constructor(
    private bolosService: BolosService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formBolo = this.formBuilder.group({
      nome: ["", Validators.required],
      descricao: ["", [Validators.required]],
      url: ["", [Validators.required]],
      preco: ["", [Validators.required]]
    });
  }

  onSubmit(): void {
    let id = this.formBolo.get("nome").value;
    id = id.replace(/\s+/g, "").toLowerCase();
    this.bolo = {
      id: id,
      ...this.formBolo.value
    };
    this.bolosService.addBolo(this.bolo).subscribe();
      this.router.navigate(["/home"]);
  }
}
