import { Component } from '@angular/core';

@Component({
  selector: 'gs-contact',
  template: `
    <div class="contact">
      <h4 class="p-4">Szczegóły kontaktu</h4>
      <div *ngFor="let detail of details" class="detail">
        <i class="fa-2x fas {{ detail.icon }}"></i>
        <p class="break-word">{{ detail.text }}</p>
      </div>
    </div>
  `,
  styles: [
    `
      .break-word {
        word-wrap: break-word;
      }
      .contact {
        height: 100%;
        text-align: center;
        background: #f1802d;
        color: #fff;
        padding: 50px 10px;
      }
      .contact .detail {
        margin-bottom: 30px;
      }
      .contact .detail p {
        margin: 0;
        padding-left: 18px;
        font-size: 16px;
        font-weight: 200;
        color: #fff;
        text-decoration: none;
      }
    `,
  ],
})
export class ContactComponent {
  public readonly details = [
    { icon: 'fa-map-marker-alt', text: '33-300 Nowy Sącz' },
    { icon: 'fa-phone', text: '(+48) 500 - 000 - 000' },
    { icon: 'fa-envelope', text: 'goracysokpomaranczowy@gmail.com' },
  ];
}
