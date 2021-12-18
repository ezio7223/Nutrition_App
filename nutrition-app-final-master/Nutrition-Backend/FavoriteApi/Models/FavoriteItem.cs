using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FavoriteApi.Models
{
    public class FavoriteItem
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string userId { get; set; }
        public int fdcId { get; set; }
        public string itemName { get; set; }
        public string description { get; set; }
    }
}
