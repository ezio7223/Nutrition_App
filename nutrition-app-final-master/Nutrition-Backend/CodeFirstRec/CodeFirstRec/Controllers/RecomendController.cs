using CodeFirstRec.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CodeFirstRec.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecomendController : ControllerBase
    {
        private readonly RecomendContext _context = new RecomendContext();

        // GET: api/<RecomendController>
        [HttpGet]
        public IEnumerable<Recomend> Get()
        {
            return _context.Recomends.ToList();
        }

        // GET api/<RecomendController>/5
        [HttpGet("{id}")]
        public Recomend Get(int FdCid)
        {
            return _context.Recomends.Find(FdCid);
        }

        // POST api/<RecomendController>
        [HttpPost]
        public void Post([FromBody] Recomend value)
        {
            _context.Recomends.Add(value);
            _context.SaveChanges();
        }

        // PUT api/<RecomendController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Recomend newdata)
        {
            Recomend c = _context.Recomends.Find(id);
            c.Itemname = newdata.Itemname;
            c.Description = newdata.Description;
            _context.Entry(c).State = EntityState.Modified;
            _context.SaveChanges();
        }

        // DELETE api/<RecomendController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            Recomend c = _context.Recomends.Find(id);
            _context.Recomends.Remove(c);
            _context.SaveChanges();
        }
    }
}
