import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { ShoppingItemComponent } from './shopping-list/shopping-item/shopping-item.component';
import { RecipeItemComponent } from './recipe-book/recipe-item/recipe-item.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ShoppingListComponent, RecipeBookComponent, ShoppingItemComponent, RecipeItemComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
