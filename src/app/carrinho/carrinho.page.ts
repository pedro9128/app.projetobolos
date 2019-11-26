import { Component } from "@angular/core";
import { Bolos } from "../models/bolos";
import { ActivatedRoute } from "@angular/router";
import { BolosService } from "../services/bolos.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController, LoadingController } from "@ionic/angular";

@Component({
  selector: "app-carrinho",
  templateUrl: "./carrinho.page.html",
  styleUrls: ["./carrinho.page.scss"]
})
export class CarrinhoPage {
  formCadastro: FormGroup;
  bolos: Bolos[];
  constructor(
    private bolosService: BolosService,
    public activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController
  ) {}

  ionViewDidEnter() {
    let name = this.activatedRoute.snapshot.paramMap.get("name");
    this.bolosService.getBoloById(name).subscribe((res: Bolos) => {
      this.bolos = Object.values(res);
    });
    this.formSetup();
  }

  onSubmit() {
    this.confirmar();
  }

  formSetup(): any {
    this.formCadastro = this.formBuilder.group({
      nome: ["", Validators.required],
      telefone: ["", [Validators.required]],
      endereco: ["", [Validators.required]]
    });
  }

  async confirmar() {
    const loading = await this.loadingCtrl.create({
      spinner: "circles",
      duration: 4000,
      message: "Confirmando Pedido...",
      translucent: true,
      cssClass: "custom-class custom-loading"
    });

    setTimeout(() => {
      this.navCtrl.navigateRoot("home");
    }, 4000);
    return await loading.present();
  }
}
