using FavoriteApi.Models;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace FavoriteApi.Repository
{

    public class FavoriteItemRepository : IFavoriteItemRepository
        {
            private readonly FavoriteItemDbContext _FavItemDbContext;
            public FavoriteItemRepository(FavoriteItemDbContext FavDbContext)
            {
                _FavItemDbContext = FavDbContext;
            }
            public FavoriteItem AddFavoriteItem(FavoriteItem favItem)
            {
                _FavItemDbContext.favoriteitem.InsertOne(favItem);
                return favItem;
            }
            public List<FavoriteItem> GetAllFavoriteItem()
            {
                return _FavItemDbContext.favoriteitem.Find(item => item.userId != null).ToList();
            }
            public List<FavoriteItem> GetAllFavoriteItemById(string id)
            {
                return _FavItemDbContext.favoriteitem.Find(p => p.userId == id).ToList();
            }
            public bool DeleteFavoriteItem(string id)
            {
                var ItemExist = GetAllFavoriteItemById(id);
                if (ItemExist != null)
                {
                    var deleteCatInfo = _FavItemDbContext.favoriteitem.DeleteOne(c => c.userId == id);
                    return true;
                }
                else
                {
                    return false;
                }
            }

        }
    
}
