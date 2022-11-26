import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Edited with ♥ by <b>JohnnLoR</b> Nov2023
    </span>
    <div class="sponsors">
          <img class="MinTIC" src="../../../../assets/images/logo-mision.png" alt="">
          <img class="UNAL" src="../../../../assets/images/logo.png" alt="">
          <img class="RNac" src="../../../../assets/images/cobranding.png" alt="">
    </div>

  `,
})
export class FooterComponent {
}

// <div class="socials">
//     <a href="#" target="_blank" class="ion ion-social-github"></a>
//     <a href="#" target="_blank" class="ion ion-social-facebook"></a>
//     <a href="#" target="_blank" class="ion ion-social-twitter"></a>
//     <a href="#" target="_blank" class="ion ion-social-linkedin"></a>
// </div>