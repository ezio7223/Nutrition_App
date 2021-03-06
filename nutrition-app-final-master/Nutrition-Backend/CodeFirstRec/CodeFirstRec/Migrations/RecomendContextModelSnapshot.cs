// <auto-generated />
using CodeFirstRec.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace CodeFirstRec.Migrations
{
    [DbContext(typeof(RecomendContext))]
    partial class RecomendContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.15")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("CodeFirstRec.Models.Recomend", b =>
                {
                    b.Property<int>("FdcId")
                        .HasColumnType("int");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Itemname")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("FdcId");

                    b.ToTable("Recomends");
                });
#pragma warning restore 612, 618
        }
    }
}
