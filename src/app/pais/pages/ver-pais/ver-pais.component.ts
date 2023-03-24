import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from "rxjs/operators";
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  //pais!: Country[];
  pais: any;  

  constructor(
    private activatedRoute: ActivatedRoute,
    private paiseSerive: PaisService
    ) {}

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap((params) => this.paiseSerive.getPaisPorAlpha(params["id"])),
        tap(console.log)
      )
      .subscribe(res => {
        this.pais = res[0]});



  //  this.activatedRoute.params
  //    .subscribe(params => {
  //      console.log(params["id"])
  //      this.paiseSerive.getPaisPorAlpha(params["id"])
  //        .subscribe(pais => {
  //          console.log(pais);
  //        })
  //    })
  }

}
