import { Component } from '@angular/core';
import { GlobalVariable } from '../shared';

@Component({
  selector: 'gs-fanpage',
  template: `
    <div id="fanpage" class="wow slideInRight" data-wow-offset="200" #fanpage>
      <div class="fixed">
        <div class="row dark text-center">
          <div class="col-12 narrow text-center">
            <h3 class="heading">Odwiedź nasz fanpage!</h3>
            <div class="heading-underline"></div>
            <p class="lead">
              Dowiedz się wiecej poprzez nasz fanpage! Codziennie świeże informacje i inspiracje
              związane z gorącym sokiem pomarańczowym!
            </p>
            <a
              class="btn btn-secondary wow pulse"
              data-wow-iteration="infinite"
              data-wow-duration="2s"
              href="{{ baseApiUrl }}"
              target="_blank">
              PRZEJDŹ DO FB
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .fixed {
        z-index: -1;
        background: url(../../assets/img/tlo.jpg) no-repeat fixed;
        background-size: cover;
        overflow: hidden;
      }

      .dark {
        background-color: rgba(0, 0, 0, 0.75);
        color: white;
        padding: 112px 32px;
      }
    `,
  ],
})
export class FanpageComponent {
  public readonly baseApiUrl = GlobalVariable.FAN_PAGE_URL;
}
