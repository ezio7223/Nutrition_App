using FavoriteApi.Exceptions;
using FavoriteApi.Models;
using FavoriteApi.Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FavoriteApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FavoriteItemController : ControllerBase
    {
        private readonly IFavoriteItemService _FavItemService;
        public FavoriteItemController(IFavoriteItemService favItemService)
        {
            _FavItemService = favItemService;
        }
        // GET: api/<FavoriteItemController>
        [HttpGet]
        public ActionResult Get()
        {
            var res = _FavItemService.SelectAllFavItem();
            return Ok(res);
        }

        // GET api/<FavoriteItemController>/5
        [HttpGet("{id}")]
        public IActionResult Get(string id)
        {
            var data = _FavItemService.SelectFavItemById(id);
            return Ok(data);
        }

        // POST api/<FavoriteItemController>
        [HttpPost]
        public void Post([FromBody] FavoriteItem value)
        {
            _FavItemService.InsertFavItem(value);
        }

        // PUT api/<FavoriteItemController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<FavoriteItemController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(string id)
        {
            try
            {
                _FavItemService.RemoveFavItem(id);
                return Ok("Deleted Succesffully");
            }
            catch (ItemNotFound msg)
            {
                return Conflict(msg.Message);
            }

        }
    }
}
