using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;


namespace CodeFirstRec.Models
{
    public class RecomendContext:DbContext
    {
        public RecomendContext() { }
        public RecomendContext(DbContextOptions<RecomendContext> options) : base(options)
        {

        }

        public virtual DbSet<Recomend> Recomends { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            IConfiguration configuration = new ConfigurationBuilder()
                .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
                .AddJsonFile("appsettings.json")
                .Build();
            optionsBuilder.UseSqlServer(configuration.GetConnectionString("RecomendConString"));
           
        }

    }
}

