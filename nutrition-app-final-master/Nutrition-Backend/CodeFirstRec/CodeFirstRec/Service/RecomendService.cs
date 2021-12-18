using CodeFirstRec.Models;
using CodeFirstRec.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CodeFirstRec.Service
{
    public class RecomendService
    {
        private readonly RecomendRepository RecomendRepository = new RecomendRepository();

        public List<Recomend> SelectAll()
        {
            return RecomendRepository.SelectAll();
        }
        public Recomend SelectRecomendById(int FdCid)
        {
            return RecomendRepository.SelectRecomendById(FdCid);
        }
        public bool InsertRecord(Recomend obj)
        {
            return RecomendRepository.InsertRecord(obj);
        }
        public bool UpdateRecord(int FdCid, Recomend obj)
        {
            return RecomendRepository.UpdateRecord(FdCid, obj);
        }
        public bool DeleteRecord(int FdCid)
        {
            return RecomendRepository.DeleteRecord(FdCid);
        }
    }
}
