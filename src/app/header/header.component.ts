import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  scrollTo(id: string): void {
    const el: HTMLElement | null = document.getElementById(id);
    if (!el) {
      return;
    }
    setTimeout(
      () => el.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' }),
      0
    );
  }
}
