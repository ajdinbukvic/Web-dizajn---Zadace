using Microsoft.EntityFrameworkCore.Migrations;

namespace ZSRVjezbe8.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "WeatherSummaries",
                columns: table => new
                {
                    WeatherId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    WeatherName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    WeatherLevel = table.Column<int>(type: "int", nullable: false),
                    WeatherTemperature = table.Column<decimal>(type: "decimal(18,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WeatherSummaries", x => x.WeatherId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "WeatherSummaries");
        }
    }
}
