using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FavoriteApi.Exceptions
{
    public class ItemNotFound : ApplicationException
    {
        public ItemNotFound() { }
        public ItemNotFound(string message) : base(message) { }
    }
}
