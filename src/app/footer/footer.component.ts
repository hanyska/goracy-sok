import { Component } from '@angular/core';
import { GlobalVariable } from '../shared';

@Component({
  selector: 'gs-footer',
  template: `
    <div id="contact" class="offset">
      <footer>
        <div class="col-md-5 mx-auto text-center">
          <h4>
            My <i class="fas fa-heart animated heartBeat" aria-hidden="true"></i> nowych przyjaciół!
          </h4>
          <a href="{{ baseApiUrl }}" target="_blank">
            <i class="fab fa-facebook-square fa-3x"></i>
          </a>
          <a href="" target="_blank"
            ><i class="fab fa-twitter-square fa-3x" aria-hidden="true"></i
          ></a>
          <a href="" target="_blank"><i class="fab fa-instagram fa-3x" aria-hidden="true"></i></a>
          <p class="pt-3">&copy; Anna Pajor 2019 - 2023</p>
        </div>
      </footer>
    </div>
  `,
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public readonly baseApiUrl = GlobalVariable.FAN_PAGE_URL;
}
