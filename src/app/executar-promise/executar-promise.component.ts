import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-executar-promise',
  templateUrl: './executar-promise.component.html',
  styleUrls: ['./executar-promise.component.scss'],
})
export class ExecutarPromiseComponent implements OnInit {
  resultado: string = 'vazio';
  status: string = 'Inicial';

  constructor() {}

  ngOnInit(): void {}

  executarPromise() {
    const fonteEmissao = new Promise<string>((resolve, _reject) => {
      this.status = 'Execução em andamento';
      setTimeout(() => {
        console.log('Resultado via Promise');
        this.status = 'Executado';
        resolve('Resultado via Promise');
      }, 1000);
    });


    // fonteEmissao;
    
  }

}
