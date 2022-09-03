import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { EshopComponent } from './components/eshop/eshop.component';
import { GameComponent } from './components/game/game.component';
import { HomeComponent } from './components/home/home.component';
import { NotFundComponent } from './components/not-fund/not-fund.component';

const routes: Routes = [
  {path:'' ,component:HomeComponent},
  {path:'home' ,component:HomeComponent},
  {path:'eshop' ,component:EshopComponent},
  {path:'card' ,component:CardComponent},
  {path:'game',component:GameComponent},
  {path:'**',component:NotFundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
