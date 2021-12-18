using CodeFirstRec.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CodeFirstRec.Repository
{
    public class RecomendRepository
    {
        private readonly RecomendContext _context = new RecomendContext();
        public List<Recomend> SelectAll()
        {
            //logic to connect and read data from database table
            return _context.Recomends.ToList();
        }
        public Recomend SelectRecomendById(int Fdcid)
        {  //logic to connect and read data from database table
            return _context.Recomends.Find(Fdcid);
        }
        public bool InsertRecord(Recomend obj)
        {
            _context.Recomends.Add(obj);
            _context.SaveChanges();
            return true;
        }
        public bool UpdateRecord(int FdCid, Recomend obj)
        {
            Recomend o = _context.Recomends.Find(FdCid);
            o.Itemname = obj.Itemname;
            _context.Entry(o).State = EntityState.Modified;
            _context.SaveChanges();
            return true;
        }
        public bool DeleteRecord(int FdCid)
        {
            Recomend o = _context.Recomends.Find(FdCid);
            _context.Recomends.Remove(o);
            _context.SaveChanges();
            return true;
        }
    }
}
