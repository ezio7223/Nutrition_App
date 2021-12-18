using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FavoriteApi.Models
{
    public class FavoriteItemDbContext
    {
        MongoClient mongoClient;
        IMongoDatabase mongoDB;
        public FavoriteItemDbContext()
        {
            mongoClient = new MongoClient("mongodb://127.0.0.1:27017");
            mongoDB = mongoClient.GetDatabase("Favorite_Foods");
        }
        public IMongoCollection<FavoriteItem> favoriteitem => mongoDB.GetCollection<FavoriteItem>("Favourite_Item");
    }
}
