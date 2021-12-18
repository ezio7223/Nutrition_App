using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace CodeFirstRec.Models
{
    public class Recomend
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]


        public int FdcId { get; set; }

        public string Itemname { get; set; }
        public string Description { get; set; }
    }
}
