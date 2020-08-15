import { Component, OnInit } from "@angular/core";
import { FavoriteService } from "../services/favorite.service";
import { Favorite } from "../models/favorite";
import { Store } from "@ngrx/store";
import * as FavoriteActions from "./store/favorite.actions";

@Component({
  selector: "app-favorite",
  templateUrl: "./favorite.component.html",
  styleUrls: ["./favorite.component.css"],
})
export class FavoriteComponent implements OnInit {
  favorites;
  constructor(
    public favoriteService: FavoriteService,
    private store: Store<{ favorite: { favorite: Favorite[] } }>
  ) {}

  ngOnInit() {
    this.store.select("favorite").subscribe((res) => {
      this.favorites = Object.values(res);
    });
  }
  removeFromFavorite(index) {
    this.favoriteService.removeFromFavorite(index);
  }
}
