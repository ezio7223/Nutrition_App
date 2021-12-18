using FavoriteApi.Models;
using System.Collections.Generic;

namespace FavoriteApi.Repository
{
    public interface IFavoriteItemRepository
    {
        FavoriteItem AddFavoriteItem(FavoriteItem favItem);
        bool DeleteFavoriteItem(string id);
        List<FavoriteItem> GetAllFavoriteItem();
        List<FavoriteItem> GetAllFavoriteItemById(string id);
    }
}