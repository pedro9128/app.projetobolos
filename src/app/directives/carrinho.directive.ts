import { Directive, Renderer2, ElementRef, OnInit } from "@angular/core";
import { Bolos } from "../models/bolos";
import { BolosService } from "../services/bolos.service";
import { ActivatedRoute } from "@angular/router";
import { NavController, LoadingController } from "@ionic/angular";

@Directive({
  selector: "[appCarrinho]"
})
export class CarrinhoDirective implements OnInit {
  bolos: Bolos[];
  private loading;
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private bolosService: BolosService,
    public activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    let receberId = this.activatedRoute.snapshot.paramMap.get("name");
    this.callPage(receberId);
  }

  private callPage(id: String) {
    this.bolosService.getBolos().subscribe((res: Bolos[]) => {
      this.bolos = res["bolos"];
      for (let i = 0; i < this.bolos.length; i++) {
        if (id === this.bolos[i].id) {
          const card = this.renderer.createElement("ion-card");
          const cardHeader = this.renderer.createElement("ion-card-header");
          const cardTitle = this.renderer.createElement("ion-card-title");
          const CardTitleSubtitleText = this.renderer.createText(
            "BOLO ESCOLHIDO"
          );
          const CardTitleText = this.renderer.createText(this.bolos[i].nome);
          this.renderer.appendChild(cardTitle, CardTitleText);
          this.renderer.appendChild(cardHeader, CardTitleSubtitleText);
          this.renderer.appendChild(cardHeader, cardTitle);
          const content = this.renderer.createElement("ion-card-content");
          const img = this.renderer.createElement("img");
          const contentText = this.renderer.createText(
            this.bolos[i].descricao +
              " Preço: " +
              this.bolos[i].preco.toString()
          );
          this.renderer.setAttribute(img, "src", this.bolos[i].url);
          this.renderer.appendChild(content, img);
          this.renderer.appendChild(content, contentText);
          this.renderer.appendChild(card, cardHeader);
          this.renderer.appendChild(card, content);
          this.renderer.appendChild(this.el.nativeElement, card);
          const cardInput = this.renderer.createElement("ion-card");
          const cardInputHeader = this.renderer.createElement(
            "ion-card-header"
          );
          const CardInputSubtitleText = this.renderer.createText(
            "Dados para entrega"
          );
          this.renderer.appendChild(cardInputHeader, CardInputSubtitleText);
          this.renderer.appendChild(cardInput, cardInputHeader);
          const contentInput = this.renderer.createElement("ion-card-content");
          const inputNome = this.renderer.createElement("ion-input");
          this.renderer.setProperty(inputNome, "type", "text");
          this.renderer.setProperty(inputNome, "placeholder", "Nome");
          const inputTelefone = this.renderer.createElement("ion-input");
          this.renderer.setProperty(inputTelefone, "type", "text");
          this.renderer.setProperty(inputTelefone, "placeholder", "Telefone");
          const inputEndereco = this.renderer.createElement("ion-input");
          this.renderer.setProperty(inputEndereco, "type", "text");
          this.renderer.setProperty(inputEndereco, "placeholder", "Endereco");
          this.renderer.appendChild(contentInput, inputNome);
          this.renderer.appendChild(contentInput, inputTelefone);
          this.renderer.appendChild(contentInput, inputEndereco);
          this.renderer.appendChild(cardInput, contentInput);
          this.renderer.appendChild(this.el.nativeElement, cardInput);
          const buttonConfirmar = this.renderer.createElement("ion-button");
          this.renderer.setProperty(buttonConfirmar, "expand", "block");
          const buttonText = this.renderer.createText("Confirmar Pedido");
          this.renderer.appendChild(buttonConfirmar, buttonText);
          this.renderer.appendChild(this.el.nativeElement, buttonConfirmar);
          this.renderer.listen(buttonConfirmar, "click", event => {
            this.confirmar();
          });
        }
      }
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
