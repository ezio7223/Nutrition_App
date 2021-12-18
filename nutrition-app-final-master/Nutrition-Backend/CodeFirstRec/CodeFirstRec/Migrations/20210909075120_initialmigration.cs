using Microsoft.EntityFrameworkCore.Migrations;

namespace CodeFirstRec.Migrations
{
    public partial class initialmigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Recomends",
                columns: table => new
                {
                    FdcId = table.Column<int>(nullable: false),
                    Itemname = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Recomends", x => x.FdcId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Recomends");
        }
    }
}
