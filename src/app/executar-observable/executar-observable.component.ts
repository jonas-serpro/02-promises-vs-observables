import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'app-executar-observable',
  templateUrl: './executar-observable.component.html',
  styleUrls: ['./executar-observable.component.scss'],
})
export class ExecutarObservableComponent implements OnInit {
  ouvir: boolean = false;
  resultado: string = '---';
  status: string = 'Inicial';

  constructor() {}

  ngOnInit(): void {}

  executarObservable() {
    const fonteEmissao = new Observable<string>((subscriber) => {
      this.status = 'Execução em andamento';
      setTimeout(() => {
        console.log('Resultado via Observable', 'ouvindo', this.ouvir);
        if (this.ouvir) {
          this.resultado = 'Resultado via Observable: ouvindo';
        } else {
          this.resultado = 'Resultado via Observable: sem ouvir';
        }
        this.status = 'Executado';

        subscriber.next('Resultado via Observable');
        subscriber.complete();
      }, 1000);
    });
    if (this.ouvir) {
      console.log('Inscrito: aguarde 1s');
      fonteEmissao.subscribe((_) => {});
    } else {
      console.log('Não está inscrito: nada deve ocorrer');
      fonteEmissao;
    }
  }

  alternarOuvir(event: MouseEvent | PointerEvent) {
    const checkbox: HTMLInputElement = event.target as HTMLInputElement;
    this.ouvir = checkbox.checked;
  }
}
