using FavoriteApi.Models;
using FavoriteApi.Repository;
using System;
using System.Collections.Generic;

namespace FavoriteApi.Services
{
    public class FavoriteItemService : IFavoriteItemService
    {
        private readonly IFavoriteItemRepository _FavItemRepository;
        public FavoriteItemService(IFavoriteItemRepository FavItemRepository)
        {
            _FavItemRepository = FavItemRepository;
        }
        public FavoriteItem InsertFavItem(FavoriteItem favItem)
        {
            return _FavItemRepository.AddFavoriteItem(favItem);
        }
        public List<FavoriteItem> SelectAllFavItem()
        {
            return _FavItemRepository.GetAllFavoriteItem();
        }
        public List<FavoriteItem> SelectFavItemById(string id)
        {
            return _FavItemRepository.GetAllFavoriteItemById(id);
        }
        public bool RemoveFavItem(string id)
        {
            _FavItemRepository.DeleteFavoriteItem(id);
            return true;
        }
    }
}
