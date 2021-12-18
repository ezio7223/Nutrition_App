using FavoriteApi.Models;
using System.Collections.Generic;

namespace FavoriteApi.Services
{
    public interface IFavoriteItemService
    {
        FavoriteItem InsertFavItem(FavoriteItem favItem);
        bool RemoveFavItem(string id);
        List<FavoriteItem> SelectAllFavItem();
        List<FavoriteItem> SelectFavItemById(string id);
    }
}