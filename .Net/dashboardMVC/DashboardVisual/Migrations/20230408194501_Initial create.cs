using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DashboardVisual.Migrations
{
    public partial class Initialcreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Mytables",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    End_year = table.Column<int>(type: "int", nullable: true),
                    Intensity = table.Column<int>(type: "int", nullable: true),
                    Sector = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Topic = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Insight = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Url = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Region = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Start_year = table.Column<int>(type: "int", nullable: true),
                    Impact = table.Column<int>(type: "int", nullable: true),
                    Added = table.Column<DateTime>(type: "datetime", nullable: true),
                    Published = table.Column<DateTime>(type: "datetime", nullable: true),
                    Country = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Relevance = table.Column<int>(type: "int", nullable: true),
                    Pestle = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Source = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Likelihood = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Mytables", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Mytables");
        }
    }
}
